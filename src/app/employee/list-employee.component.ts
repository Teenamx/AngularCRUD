import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] ;
  employToDisplay:Employee;
  dataFromChild:Employee;
  private arrayIndex=1;
  constructor(private _employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.employees= this._employeeService.getEmployees();
    this.employToDisplay=this.employees[0];
  }
  nextEmployee() :void{
    if(this.arrayIndex <= 2)
    {
      this.employToDisplay=this.employees[this.arrayIndex];
      this.arrayIndex++;

    }
    else
    {
      this.employToDisplay=this.employees[0];
      this.arrayIndex=1;
    }
  }
  handleNotify(eventData:Employee)
  {
    this.dataFromChild=eventData;
  }
}
