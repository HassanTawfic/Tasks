import { Component, OnInit } from '@angular/core';
import {Department} from "../classes/department";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  Departments:Department[]=[
    new Department(0,'DevOps','Alex')
  ];
  currentDepName:string=""
  currentDepLocation:string=""
  departmentOptions:string[]=[
    'Alex',
    'Mansoura',
    'Cairo',
    'Aswan'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  submit(depName:string,depLocation:string){
    let department = new Department((this.Departments.length+1),depName,depLocation);
    this.Departments.push(department);
    this.clear()
  }

  delete(id:number){
    for(let i=0; i<this.Departments.length ;i++){
      if(id === this.Departments[i].id){
        this.Departments.splice(i,1)
      }
    }
  }

  getData(id:number) {
    for (let i = 0; i < this.Departments.length; i++) {
      if (id === this.Departments[i].id) {
        this.currentDepName = this.Departments[i].deptName
        this.currentDepLocation = this.Departments[i].location
      }
    }
  }

  updateData(id:number){
    for (let i = 0; i < this.Departments.length; i++) {
      if (id === this.Departments[i].id) {
        this.Departments[i].deptName = this.currentDepName
        this.Departments[i].location = this.currentDepLocation
      }
    }
  }

  clear(){
    this.currentDepLocation=""
    this.currentDepName="";
  }

}
