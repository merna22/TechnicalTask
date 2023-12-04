import { Component,Inject,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { employee } from '../model/employee';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {

  constructor(
    private activeRoute:ActivatedRoute
    ,private empservice:EmployeeService,
     private router:Router,
     public dialogRef: MatDialogRef<EmployeeDetailsComponent>,
     @Inject(MAT_DIALOG_DATA) public data: employee
    
    ){}
   employeeId:any;
   emp:employee|undefined;
   departments = [
    { value: 'IT', description: 'Information Technology' },
    { value: 'Marketing', description: 'Marketing' },
    { value: 'Sales', description: 'Sales' },
  ];
  selectedDepartment: string = '';
  ngOnInit(){
     //this.activeRoute.paramMap.subscribe((params:ParamMap)=>{

     //this.employeeId=params.get('id')0;
     console.log("hello from ng ")
     
   // this.emp= this.empservice.getEmployeebyid(this.employeeId);
     
  }

  submitRelocation() {
    console.log("hello from relocate")
     if (this.selectedDepartment) {
       this.empservice.updateDepartment(this.data.id, this.selectedDepartment);
        
     }
     this.dialogRef.close();
    //return this.selectedDepartment;
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
