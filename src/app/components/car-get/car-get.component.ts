import { Component, OnInit } from '@angular/core';
import {Car, CarClientService} from '../../services/car-client.service';

@Component({
  selector: 'app-car-get',
  templateUrl: './car-get.component.html',
  styleUrls: ['./car-get.component.css']
})
export class CarGetComponent implements OnInit {

  cars: Car[];
  constructor(public carClientService: CarClientService) { }

  ngOnInit(): void {
    this.carClientService.getCars().subscribe(value =>
    this.cars = value);
  }
}
