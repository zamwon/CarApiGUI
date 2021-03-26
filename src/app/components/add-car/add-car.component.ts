import {Component, OnInit} from '@angular/core';
import {Car, CarClientService} from '../../services/car-client.service';



@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car;
  cars: Car[];
  carId: number;
  mark: string;
  model: string;
  color: string;
  productionYear: number;

  constructor(public carClientService: CarClientService) {
  }

  ngOnInit(): void {
  }

  createCar(carId: number, mark: string, model: string, color: string, productionYear: number): Car {
    this.carId = carId,
      this.mark = mark,
      this.model = model,
      this.color = color,
      this.productionYear = productionYear;
    return this.car;
  }
}
