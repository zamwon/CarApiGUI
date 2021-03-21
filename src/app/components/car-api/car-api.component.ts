import { Component, OnInit } from '@angular/core';
import {CarClientService} from '../../services/car-client.service';


@Component({
  selector: 'app-car-api',
  templateUrl: './car-api.component.html',
  styleUrls: ['./car-api.component.css']
})
export class CarApiComponent implements OnInit {

  messageForUser: string;
  id: number;
  mark: string;
  model: string;
  color: string;
  productionYear: number;

  constructor(public carClientService: CarClientService) { }

  ngOnInit(): void {
  }

  addCar(id: number, mark: string, model: string, color: string, productionYear: number): void {
  this.id = id;
  this.mark = mark;
  this.model = model;
  this.color = color;
  this.productionYear = productionYear;
  this.messageForUser = 'Car added:';
  }
}
