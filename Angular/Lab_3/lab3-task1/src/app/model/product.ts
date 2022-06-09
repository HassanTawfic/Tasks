export class Product {


  private _id:number;
  private _productName:string;
  private _productCode:string;
  private _availability:Date;
  private _rating:number;
  private _price:number;


  constructor(id: number, productName: string, productCode: string, availability: Date, rating: number, price: number) {
    this._id = id;
    this._productName = productName;
    this._productCode = productCode;
    this._availability = availability;
    this._rating = rating;
    this._price = price;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get productName(): string {
    return this._productName;
  }

  set productName(value: string) {
    this._productName = value;
  }

  get productCode(): string {
    return this._productCode;
  }

  set productCode(value: string) {
    this._productCode = value;
  }

  get availability(): Date {
    return this._availability;
  }

  set availability(value: Date) {
    this._availability = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
