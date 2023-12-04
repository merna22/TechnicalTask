import { Injectable } from '@angular/core';
import { employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employees:employee[]=[
    {
      id:1,
      name:"merna",
      department:"IT",
      skills:"communication",
      performance:"Excellent"

    },
    {
      id:2,
      name:"Amr",
      department:"Marketing",
      skills:"communication",
      performance:"good"

    }
    ,
    {
      id:3,
      name:"Ali",
      department:"IT",
      skills:"communication",
      performance:" very good"

    },
    {
      id:4,
      name:"Khaled",
      department:"Sales",
      skills:"communication",
      performance:"medium"

    }
  ]
  getEmployeeList(){
    return this.employees
  }
  getEmployeebyid(id:number):employee|undefined{
  
    return this.employees.find(emp=>emp.id==id);
   }

   updateDepartment(employeeId: number, newDepartment: string) {
    const employee = this.employees.find(e => e.id == employeeId);
  
    if (employee) {
      employee.department = newDepartment;
    }
  }
  
}
