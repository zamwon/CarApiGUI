import { Component, OnInit } from '@angular/core';
import {CarClientService} from '../../services/car-client.service';
import {Car} from '../../car';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-car-api',
  templateUrl: './car-api.component.html',
  styleUrls: ['./car-api.component.css']
})
export class CarApiComponent implements OnInit {

  car: Car[];
  constructor(public http: HttpClient, public carClientService: CarClientService) { }

  ngOnInit(): void {
    this.getCarList();
  }
  // tslint:disable-next-line:typedef
  getCarList() {
    this.carClientService
      .getCars()
      .subscribe((data: any) => {
        console.log(data);
        this.car = data.data;
      });
  }
}
