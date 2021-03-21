import {Injectable} from '@angular/core';
import {Car} from '../car';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CarClientService {

    constructor(private httpClient: HttpClient) {}
    public getCars() {
        return this.httpClient.get('http://localhost:8080/cars').pipe(map((data: Car[]) => {
            return data;
        }), catchError(error => {
            return throwError('Something went wrong!');
        }));
    }
}


