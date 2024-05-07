import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable, debounce, debounceTime, retry, tap } from 'rxjs';

const url = environment.api + 'customers/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // HttpClient wird instantiiert, weil er als Typ erwähnt wird.
  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(url)
      .pipe(
        
        tap((data) => {
          console.log(data);
        }), // Operator von rxjs
    
        retry(3),
      )
  }

  deleteById(id: number) {
    return this.http.delete(url + id);
  }
  
}
