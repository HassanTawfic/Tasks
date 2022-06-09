import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


let ArtistDetails = () => {
    let {id} = useParams()
    // console.log(id)
    let [artist, setArtist] = useState({})
    useEffect( ()=>{
             fetch(`http://localhost:3030/artists/${id}`)
            .then((response)=>{return response.json()})
            .then((data)=>{setArtist(data)})
            .catch((err)=> console.log(err))
    },[])

    let renderArtist = () => {
        console.log(artist)
        if (!artist.name) {
            return (
                <div className={'alert alert-danger'}>
                    Artist Not Found
                </div>
            )
        } else {
            return (
                <div>
                    <div className={'d-flex flex-column align-items-center'}>
                        <a className={'btn btn-success btn-lg m-3'} href="/artists">Go Back To All Artists</a>
                    </div>
                    <div className={"d-flex flex-column align-items-center justify-content-center mb-5"}>
                        <div>
                            <img src={require(`../imagesDay3/covers/${artist.cover}.jpg`)} style={{width: '30rem'}}
                                 alt=""/>
                        </div>
                        <div>
                            <p className={'text-dark fs-5 p-5 mx-5 text-center'}>
                                {artist.bio}
                            </p>
                        </div>
                        <div className={"row row-cols-1 row-cols-md-2 g-4 col-9"}>
                            {artist.albums.map((album) => {
                                return (
                                    <div>
                                        <div className="col">
                                            <div className="card">
                                                <img src={require(`../imagesDay3/albums/${album.cover}.jpg`)}
                                                     className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{album.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
    return(
        <div>
            {renderArtist()}
        </div>
    )
}

export default ArtistDetails

