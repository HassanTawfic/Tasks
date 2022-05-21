import {Injectable} from '@angular/core';
import {Student} from "./_models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    new Student(1, 'Hassan', 'h@h.com', 25),
    new Student(2, 'Ahmed', 'h@h.com', 26),
    new Student(3, 'Hassan', 'h@h.com', 27),
    new Student(4, 'Tawfic', 'h@h.com', 28),
    new Student(5, 'Hassan', 'h@h.com', 29),
  ]

  constructor() {
  }

  getAllStudents() {
    return this.students
  }

  addStudent(student: Student) {
    this.students.push(new Student(student._id, student.name, student.email, student.age))
  }
}
