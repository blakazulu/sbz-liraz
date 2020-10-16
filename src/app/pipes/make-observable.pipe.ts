import {Pipe, PipeTransform} from '@angular/core';
import {Observable, of} from 'rxjs';

@Pipe({
  name: 'makeObservable'
})
export class MakeObservablePipe implements PipeTransform {
  transform(value: string): Observable<string> {
    return of(value);
  }
}
