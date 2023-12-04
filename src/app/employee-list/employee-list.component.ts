import { Component,Inject,OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog,  } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { employee } from '../model/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  constructor( 
    private empService:EmployeeService,
    private router:Router,
    public dialog: MatDialog,
   // public dialogRef: MatDialogRef<EmployeeDetailsComponent>,
    //@Inject(MAT_DIALOG_DATA) public data:employee
   
    ){}
 
    displayedColumns: string[] = ['id', 'name', 'department', 'skills','performance','Action'];
    dataSource !: MatTableDataSource<any>;

Employee:any=[];
searchValue:any='';

  searchCriteria:string='';
getAll(){
  this.Employee= this.empService.getEmployeeList();
 console.log(this.Employee);
 this.dataSource =new MatTableDataSource(this.Employee)

}
viewDetails( employee:employee){
  this.dialog.open(EmployeeDetailsComponent,{
    width:'600px',
    data:employee
  });
  

  console.log(employee.id)
  
}

ngOnInit(){
  this.getAll();
}
search(filterValue:any){
 
  filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
}

}
