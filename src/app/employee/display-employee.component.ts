import { Component, Input, OnChanges, OnInit, SimpleChanges,Output,EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit,OnChanges{
 @Input() employee:Employee;
 @Input() employeeId:number;
 @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  //private _employee:Employee;

// @Input()
/* set employee(val:Employee)
{
  console.log('Previous :'+(this._employee?this._employee.name:null));
  console.log('Current :'+val.name);
  this._employee=val;
}
get employee()
{
return this._employee;
} */
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName of Object.keys(changes)) {

      const change = changes[propName];
      const from =JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);

      console.log(propName + ' changed from ' + from + ' to ' + to);
    }
  }
  handleClick(){
    this.notify.emit(this.employee)
  }
  /* ngOnChanges(changes:SimpleChanges){
   console.log(changes);
   const previousValue=<Employee>changes.employee.previousValue;
   const currentValue=<Employee>changes.employee.currentValue;
   console.log('Previous :'+(previousValue?previousValue.name:null));
   console.log('Current :'+(currentValue?currentValue.name:null))

  }*/


}
