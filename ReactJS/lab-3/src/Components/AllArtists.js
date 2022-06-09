import {Component} from "react";


export default class AllArtists extends Component{

    constructor(props) {
       super(props);
       this.state =
           {
                Artists:[]
           }
   }

    render(){
       console.log(this.state.Artists)
       return(
           <div>
               {this.renderAllArtist()}
           </div>
       )
    }

    renderAllArtist = () => {
        return(
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <h1 className={'my-5 display-2 fw-bold'}>Artist Collection</h1>
                {this.state.Artists.map((artist) => {
                    return (
                        <div key={artist.id}>
                            <div className="card mb-5" style={{width: '18rem'}}>
                                <img src={require(`../imagesDay3/covers/${artist.cover}.jpg`)} className="card-img-top"
                                     alt={"Not Found!"}/>
                                <div className="card-body d-flex flex-column align-items-center">
                                    <h5 className="card-title">{artist.name}</h5>
                                    <a href={`/artists/${artist.id}`} className="btn btn-primary">See More Details</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        )

    }

    componentDidMount() {
       fetch("http://localhost:3030/artists")
           .then((response)=> {return response.json()})
           .then((data)=>{this.setState({Artists: data})})
           .catch((err)=>{console.log(err)})
    }
}