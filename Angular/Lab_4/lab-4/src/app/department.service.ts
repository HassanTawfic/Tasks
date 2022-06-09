import {Injectable} from '@angular/core';
import {Department} from "./_models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private depts: Department[] = [
    new Department(100, 'os', 'Alex'),
    new Department(200, 'pd', 'Mansoura'),
    new Department(300, 'mobile', 'Cairo'),
    new Department(300, 'Ai', 'Smart'),
    new Department(300, 'Cloud', 'Cairo'),
  ]

  constructor() {
  }

  getAllDepts() {
    return this.depts;
  }

  addDepartment(dept: Department) {
    this.depts.push(new Department(dept._id, dept.name, dept.location))
  }

  getDepartment(id: number) {

    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i]._id === id) return this.depts[i];
    }
    return null;
  }
}
