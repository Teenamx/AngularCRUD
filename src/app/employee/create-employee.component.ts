import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto = false;
  dateOfBirth: Date = new Date();
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: "select",
    isActive: null,
    photoPath: null,
    password:null,
    confirmPassword:null

  };
 /*

const e
  fullName:string="";

  email:string="";
  phoneNumber?:number;
  contactPreference:string="";
  gender:string="";
  isActive?:boolean;
  department?:string="";
  photoPath:string="";*/
  datePickerConfig:Partial<BsDatepickerConfig>;
  constructor(private _employeeService:EmployeeService,private _router:Router) {

    this.datePickerConfig=Object.assign({},
      {
        containerClass:'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2021, 8, 1),
        maxDate: new Date(2021, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
   }
departments:Department[]=[{
  id: 1, name: 'Help Desk' },
{ id: 2, name: 'HR' },
{ id: 3, name: 'IT' },
{ id: 4, name: 'Payroll' }];

  ngOnInit(): void {
  }
  saveEmployee(): void {
   /*  console.log(this.employee);
    console.log("hai"); */
    this._employeeService.saveEmployee(this.employee);
    this._router.navigate(['list']);
  }
  togglePhotoPreview(){
this.previewPhoto=!this.previewPhoto;
  }
}

