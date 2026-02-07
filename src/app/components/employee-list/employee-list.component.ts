import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  selectedState: string = '';
  findCityList: any[] = [];

  onStateChange() {
    this.findCityList = this.stateCity.filter((item) => item.stateId == this.selectedState)
  }

  stateList: any[] = [
    { stateId: 1, state: "UP" },
    { stateId: 2, state: "UK" },
    { stateId: 3, state: "Delhi" },
  ]

  stateCity: any[] = [
    { cityId: 11, stateId: 1, city: "Lucknow" },
    { cityId: 111, stateId: 1, city: "Sharanpur" },
    { cityId: 112, stateId: 1, city: "Muzaffarnagar" },
    { cityId: 113, stateId: 1, city: "Meerut" },
    { cityId: 114, stateId: 1, city: "Bhagpat" },
    { cityId: 115, stateId: 1, city: "Varanshi" },
    { cityId: 22, stateId: 2, city: "Dehradun" },
    { cityId: 221, stateId: 2, city: "Haridwar" },
    { cityId: 222, stateId: 2, city: "Roorkee" },
    { cityId: 223, stateId: 2, city: "Rishikesh" },
    { cityId: 33, stateId: 3, city: "South Delhi" },
    { cityId: 331, stateId: 3, city: "New Delhi" },
    { cityId: 332, stateId: 3, city: "North Delhi" },

  ]
}