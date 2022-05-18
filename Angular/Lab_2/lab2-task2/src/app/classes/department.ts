export class Department {
  private _id:number
  private _deptName:string
  private _location:string


  constructor(id: number, deptName: string, location: string) {
    this._id = id;
    this._deptName = deptName;
    this._location = location;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get deptName(): string {
    return this._deptName;
  }

  set deptName(value: string) {
    this._deptName = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

}
