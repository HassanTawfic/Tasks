import {Component} from "react";

export default class SliderComponent extends Component{

    constructor() {
        super();
        this.state = {
            images:[
                'https://images.unsplash.com/photo-1650359369950-f97d326286a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1060&q=80',
                'https://images.unsplash.com/photo-1651758877650-bd17a3132779?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                'https://images.unsplash.com/photo-1651007911009-2dd8f3bc0232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1650750560562-a138fa997d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                'https://images.unsplash.com/photo-1650578509622-a103ac9a21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            ],
            index:0,
            interval:false
        }
    }

    nextPicture = () =>{
        if(this.state.index < 4){
            let currIndex = this.state.index + 1
            this.setState({index:(currIndex)})
        }
    }

    prevPicture = () =>{
        if(this.state.index > 0){
            let currIndex = this.state.index - 1
            this.setState({index:(currIndex)})

        }
    }

    Slide = () => {
        if(this.state.index < 4){
            let currIndex = this.state.index + 1
            this.setState({index:(currIndex)})
        }else{
            this.setState({index:(0)})
        }
    }

    setSlider = () =>{
        let intervalId = setInterval(this.Slide,1000)
        this.setState({intervalId:intervalId})
    }

    unsetSlider = () => {
        clearInterval(this.state.intervalId)
    }

    render(){
        return(
            <div className={'mt-5 ms-5'}>
                <div className="mt-5 ms-5">
                    <img style={{width:500}} src={this.state.images[this.state.index]} alt=""/>
                </div>
                <div>
                    <input
                        type="button"
                        className={'btn btn-success m-3'}
                        value={'Next Picture'}
                        onClick={this.nextPicture}
                    />
                    <input
                        type="button"
                        className={'btn btn-success m-3'}
                        value={'Previous Picture'}
                        onClick={this.prevPicture}
                    />
                    <input
                        type="button"
                        className={'btn btn-warning m-3'}
                        value={'Slide'}
                        onClick={this.setSlider}
                    />
                    <input
                        type="button"
                        className={'btn btn-primary m-3'}
                        value={'Stop'}
                        onClick={this.unsetSlider}
                    />
                </div>
            </div>

        )
    }
}