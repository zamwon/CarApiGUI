import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Car} from '../components/car-list/car-list.component';



@Injectable({
  providedIn: 'root'
})
export class CarClientService {

  constructor(private httpClient: HttpClient) {
  }

  public getCars(): Observable<Car> {
    return this.httpClient.get<Car>('http://localhost:8080/cars');
  }
}




