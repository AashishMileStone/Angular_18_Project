import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("Aashish");
  lastName = signal("Kumar");
  fullName = computed(() => this.firstName() + " " + this.lastName());

  fullNameeffect = effect(() => {
  console.log(this.fullName());
});

  
  course: string = "HTML5";

  cityList = signal(['Noida', 'Pune']);

  studentObj = signal({
    name : 'Rohit',
    city : 'Jaipur'
  });

  rollNumber = signal<number>(1);

  constructor() {
    const fName = this.firstName;

    setTimeout(() => {
      // this.firstName.set('React');
      this.course = "Phyton"
    }, 1000);
  }

  // changeSignalName(){
  //   this.firstName.set("Ojas")
  // }

  changeFirstName() {
    this.firstName.set("Ojas")
  }

  changeLastName() {
    this.lastName.set("Pal")
  }

  addCity() {

    this.cityList.set([...this.cityList(), 'Goa'])

  }

  changeCity(){

    this.studentObj.set({...this.studentObj(), city: 'Mumbai'})

  }

}
