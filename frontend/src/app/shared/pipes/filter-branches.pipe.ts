import { Pipe, PipeTransform } from '@angular/core';
import { IBranch } from '../../api/models/i-branch';

@Pipe({
  name: 'filterBranches',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {
  transform(branches: IBranch[], searchTerm: string): IBranch[] {
    if (!branches || !searchTerm) {
      return branches;
    }
    const lowerCaseTerm = searchTerm.toLowerCase();
    return branches.filter(branch =>
      branch.branchName.toLowerCase().includes(lowerCaseTerm)||
      branch.address.toLowerCase().includes(lowerCaseTerm)
    );
  }
}
