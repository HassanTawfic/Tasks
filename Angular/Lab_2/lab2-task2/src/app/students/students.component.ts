import { Component, OnInit } from '@angular/core';
import {Student} from "../classes/student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  Students:Student[]=[
    new Student(0,"Hassan",25,100),

  ];
  currentName:string='';
  currentAge:number=0;
  currentDepartment:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  submit(name:string,age:number,depno:number){
    let student = new Student((this.Students.length+1),name,age,depno);
    this.Students.push(student);
    this.currentName=""
    this.currentAge=0;
    this.currentDepartment=0
  }

  delete(id:number){
    for(let i=0; i<this.Students.length ;i++){
        if(id === this.Students[i].id){
          this.Students.splice(i,1)
        }
    }
  }

  getData(id:number) {
    for (let i = 0; i < this.Students.length; i++) {
      if (id === this.Students[i].id) {
        this.currentName = this.Students[i].name
        this.currentDepartment = this.Students[i].deptno
        this.currentAge = this.Students[i].age
        }
      }
     }

  updateData(id:number){
    for (let i = 0; i < this.Students.length; i++) {
      if (id === this.Students[i].id) {
        this.Students[i].name = this.currentName
        this.Students[i].deptno = this.currentDepartment
        this.Students[i].age = this.currentAge
      }
    }
  }

  clear(){
    this.currentName=""
    this.currentAge=0;
    this.currentDepartment=0
  }
}
