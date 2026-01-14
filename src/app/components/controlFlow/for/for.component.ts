
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export  class ForComponent {

cityArray : string [] = ['Noida', 'Goa', 'pune', 'bihar' ];
dayNumber : string = '';


   studentList : any[] = [
    {id: 1, Gender : 'Male', Name: 'Ashish', City: 'Muzaffarnagar',  Occupation: 'Sr. UI Developer', isActive: false},
    {id: 2, Gender : 'Female', Name: 'Parul', City: 'Haridwar',  Occupation: 'Business', isActive: true},
    {id: 3, Gender : 'Male', Name: 'Anuj', City: 'Muzaffarnagar',  Occupation: 'Engineer', isActive: true},
    {id: 4, Gender : 'Female', Name: 'Aarti', City: 'Roorkee',  Occupation: 'Sr. Software Engineer', isActive: true},
    {id: 5, Gender : 'Male', Name: 'Sunil', City: 'Rishikesh',  Occupation: 'Sr. frontEnd Developer', isActive: false},
    
  ]

}
