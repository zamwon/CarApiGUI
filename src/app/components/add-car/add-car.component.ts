import {Component, OnInit} from '@angular/core';
import {Car, CarClientService} from '../../services/car-client.service';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car;

  constructor(public carClientService: CarClientService) {
  }

  ngOnInit(): void {
  }

  createCar(carId: number, mark: string, model: string, color: string, productionYear: number): Car {
    // tslint:disable-next-line:new-parens
    this.car = new class implements Car {
      carId: number;
      color: string;
      mark: string;
      model: string;
      productionYear: number;
    };
    this.car.carId = carId;
    this.car.mark = mark;
    this.car.model = model;
    this.car.color = color;
    this.car.productionYear = productionYear;
    console.log(this.car.carId);
    console.log(this.car.model);
    console.log(this.car.mark);
    console.log(this.car.color);
    console.log(this.car.productionYear);
    console.log(this.car);
    return this.car;
  }
}
