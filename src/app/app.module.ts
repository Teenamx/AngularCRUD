import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { DisplayEmployeeComponent } from './employee/display-employee.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee/employee.service';
const appRoute: Routes = [
  {path : 'list',component:ListEmployeeComponent},
  {path : 'create',component:CreateEmployeeComponent},
  {path: '',redirectTo:'/list',pathMatch:'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
