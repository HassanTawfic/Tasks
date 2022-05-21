import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Student[] = []

  constructor(public studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentList = this.studentService.getAllStudents()
  }

}
