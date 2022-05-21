import React from "react";

export default function Error(){
    return (
        <div>
            <p className={'text-center display-3 my-5'}>You're in Error</p>
            <p className={'text-center display-5 my-2'}>404</p>
            <div className="d-flex justify-content-center">
                <button className={'btn btn-lg btn-success mt-3'}
                        onClick={(e) =>
                    window.location.href='/'}>
                    Press here to return!
                </button>
            </div>
        </div>

    )
}