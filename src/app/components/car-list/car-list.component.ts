import {Component, OnInit} from '@angular/core';
import {CarClientService} from '../../services/car-client.service';

export class Car {
  constructor(
    carId: number,
    mark: string,
    model: string,
    color: string,
    productionYear: number,
  ) {
  }
}

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  car: Car;
  constructor(private carClientService: CarClientService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.carClientService.getCars().subscribe(response => {
      console.log(response);
      this.car = response;
    });
  }
}
