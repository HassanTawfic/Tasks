import {Component} from "react";


export default class TableComponent extends Component{

    constructor(props) {
        super(props);
        this.state={

        }
    }


    render(){
        console.log(this.props)
        return(

            <div className={'d-flex justify-content-center mt-5'}>
                <div className={'col-6'}>
                <table className="table table-light table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.object.map((item)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }

}

