import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarClientService {

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://localhost:8080/cars');
  }

  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>('http://localhost:8080/cars', car);
  }
}

export interface Car {
  carId: number;
  mark: string;
  model: string;
  color: string;
  productionYear: number;
}
