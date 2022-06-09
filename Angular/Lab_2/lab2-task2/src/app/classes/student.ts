export class Student {
  private _id:number;
  private _name:string;
  private _age:number;
  private _deptno:number;

  constructor(id: number, name: string, age: number, deptno: number) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._deptno = deptno;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get deptno(): number {
    return this._deptno;
  }

  set deptno(value: number) {
    this._deptno = value;
  }
}
