import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductEventService {
  private productAddedSource = new Subject<string>();
  productAdded$ = this.productAddedSource.asObservable();

  emitProductAdded(product: string): void {
    this.productAddedSource.next(product);
  }
}
