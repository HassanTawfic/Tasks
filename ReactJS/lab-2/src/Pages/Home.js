import React, {Component} from "react";
import TableComponent from "./TableComponent";


export default class Home extends Component{

    constructor(){
        super();
        this.state ={
            name:"",
            age:0,
            students: [
                {
                    name: 'Hassan',
                    age: 25
                },
                {
                    name: 'Tawfic',
                    age: 30,
                },
            ]
        }
    }

    submit = (e) =>{
        e.preventDefault()
        let objectOfStudent = {name: this.state.name,age: this.state.age }
        this.setState({
            students: [...this.state.students, objectOfStudent],
            age:0,
            name:""
        })

    }

    render(){
        return(
            <div>
            <div className={'d-flex justify-content-center'}>
                <div className="card col-6">
                    <div className="card-header text-center">
                        Add Student
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Enter Name:</label>
                                <input type="text"
                                       className="form-control"
                                       id={"name"}
                                       value={this.state.name}
                                       onChange={(e)=>{
                                           this.setState({name: e.target.value})
                                       }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Age" className="form-label">Enter Age:</label>
                                <input type="number"
                                       className="form-control"
                                       id="age"
                                       value={this.state.age}
                                       onChange={(el)=>{
                                           this.setState({age: el.target.value})
                                       }}
                                    />
                            </div>
                            <button type="submit"
                                    className="btn btn-primary"
                                    value={'Submit'}
                                    onClick={this.submit}>Submit</button>
                        </form>
                    </div>
                </div>
                <hr/>
            </div>
                <div>
                    <TableComponent object={this.state.students}/>
                </div>
            </div>
        )
    }
}
/*export default function Home(){
    return (
        <div className={'d-flex justify-content-center'}>
            <div className="card col-6">
                <div className="card-header text-center">
                    Add Student
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Enter Name:</label>
                            <input type="text" className="form-control" id="Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Age" className="form-label">Enter Age:</label>
                            <input type="number" className="form-control" id="Age"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

 */