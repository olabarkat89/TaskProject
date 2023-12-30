import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { product } from '../interface/products';
import { catchError, retry, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiServiceService {

  constructor(private http: HttpClient) { }
  GetAllProducts() {
    let API = `${environment.endPoint.api}/products`;
    return this.http.get<product[]>(API).pipe(
      retry(3), take(1)
      , catchError(err => { console.log(err, "ERROR"); throw err })
    )

  }
}
