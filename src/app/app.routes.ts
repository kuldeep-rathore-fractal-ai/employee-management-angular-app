import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EmployeeListComponent } from './features/employees/components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './features/employees/components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './features/employees/components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './features/employees/components/employee-details/employee-details.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'about-us', component: AboutComponent },
];
