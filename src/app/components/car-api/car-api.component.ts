import { Component, OnInit } from '@angular/core';
import {Car, CarClientService} from '../../services/car-client.service';

@Component({
  selector: 'app-car-api',
  templateUrl: './car-api.component.html',
  styleUrls: ['./car-api.component.css']
})
export class CarApiComponent implements OnInit {

  car: Car[];
  constructor(private carClientService: CarClientService) { }

  ngOnInit(): void {
    this.carClientService.getCars().subscribe(value =>
    this.car = value);
  }
}
