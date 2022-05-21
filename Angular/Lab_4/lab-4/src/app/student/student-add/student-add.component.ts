import {Component, OnInit} from '@angular/core';
import {Student} from "../../_models/student";
import {StudentService} from "../../student.service";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  nStudent = new Student(0, '', '', 0)

  constructor(public studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  save() {
    this.studentService.addStudent(this.nStudent)
  }
}
