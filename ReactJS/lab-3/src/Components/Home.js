import React from "react";

const Home = () => {
    return(
        <div>
            <p className={'display-1 text-center mt-5'}>Lab-3</p>
            <p className={'display-6 text-center m-2'}>Artist Library</p>
                <div className={'d-flex flex-column align-items-center justify-content-center'}>
                    <div className="card mb-5" style={{width: '40rem'}}>
                        <img src={require(`../imagesDay3/cover.png`)} className="card-img-top" alt={"Not Found!"}/>
                        <div className="card-body d-flex flex-column align-items-center">
                            <a href="/artists/" className="btn btn-dark btn-lg p-3 fs-4">See More Details</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home