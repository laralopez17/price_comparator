import { Component, Input } from '@angular/core';
import { IBranch } from '../../../api/models/i-branch';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {
  @Input() branch!: IBranch;
  groupedHorariosList: string[] = [];

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    const groupedHorarios = this.groupBySchedule(this.branch.branchSchedule);
    this.groupedHorariosList = this.formatGroupedHorarios(groupedHorarios);
  }

  // Agrupar horarios por apertura y cierre
  groupBySchedule(branchSchedule: string): { [key: string]: string[] } {
    const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const grouped: { [key: string]: string[] } = {};

    branchSchedule
      .split('.')
      .map((daySchedule) => daySchedule.trim())
      .filter(Boolean)
      .forEach((schedule) => {
        const match = /([A-Za-zÁÉÍÓÚáéíóú]+):\s*([0-9]{2}:[0-9]{2}\s*a\s*[0-9]{2}:[0-9]{2})/.exec(schedule);
        if (match) {
          const [_, day, hours] = match;
          if (!grouped[hours]) grouped[hours] = [];
          grouped[hours].push(day.trim());
        }
      });

    return grouped;
  }

  // Formatear horarios agrupados
  formatGroupedHorarios(groupedHorarios: { [key: string]: string[] }): string[] {
    const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    return Object.entries(groupedHorarios).map(([time, days]) => {
      // Ordenamos y agrupamos días consecutivos
      const sortedDays = days.sort((a, b) => weekdays.indexOf(a) - weekdays.indexOf(b));
      const groupedDays = this.groupConsecutiveDays(sortedDays);
      return `${groupedDays.join(', ')}: ${time}`;
    });
  }

  // Agrupar días consecutivos (Lunes a Viernes)
  groupConsecutiveDays(days: string[]): string[] {
    const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const grouped: string[] = [];
    let currentGroup: string[] = [];

    days.forEach((day, index) => {
      if (currentGroup.length === 0) currentGroup.push(day);
      else {
        const lastIndex = weekdays.indexOf(currentGroup[currentGroup.length - 1]);
        const currentIndex = weekdays.indexOf(day);
        if (currentIndex === lastIndex + 1) currentGroup.push(day);
        else {
          grouped.push(this.formatDayGroup(currentGroup));
          currentGroup = [day];
        }
      }
    });

    if (currentGroup.length > 0) grouped.push(this.formatDayGroup(currentGroup));

    return grouped;
  }

  // Formatear días consecutivos (ej. Lunes a Viernes)
  formatDayGroup(days: string[]): string {
    return days.length === 1 ? days[0] : `${days[0]} a ${days[days.length - 1]}`;
  }
}