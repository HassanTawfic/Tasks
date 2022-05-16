import {Component} from "react";

export default class TextComponent extends Component{

    constructor() {
        super();
        this.state = {
            userName:""
        }
    }

    resetText = () =>{
        document.getElementById('form-input').value="";
        this.setState({userName:""})
    }

    render(){
        return(
            <div>
                <div className="mt-3">
                    <label htmlFor="exampleInputEmail1" className="ms-5 form-label">Enter a Name!</label>
                    <input
                        type="text"
                        id={"form-input"}
                        className={"col-6 mx-3"}
                        onChange={(e)=>{
                            this.setState({userName: e.target.value})
                        }}
                    />
                    <br/>
                    <div className="ms-5 mt-5 fs-3 text-info bg-dark">
                        {this.state.userName}
                    </div>
                    <br/>
                    <input
                        type="button"
                        className={'btn btn-secondary mx-5'}
                        value={'Reset'}
                        onClick={this.resetText}
                    />
                </div>
            </div>
        )
    }
}