import { Component, OnInit } from '@angular/core';
import {CarClientService} from '../../services/car-client.service';
import {Car} from '../car-list/car-list.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carId: number;
  mark: string;
  model: string;
  color: string;
  productionYear: number;
  car: Car;
  constructor(private carClientService: CarClientService) { }

  ngOnInit(): void {
    this.car = new Car(this.carId, this.mark, this.model, this.color, this.productionYear);
  }

}
