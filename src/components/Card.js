import React from 'react'

function Card(props) {
    return (
        <div className="card h-96 w-96 bg-base-100 shadow-xl m-5 z-0">
            <figure><img src={props.imgSrc} alt="Shoes" className='h-80 w-80' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Erkek Bisiklet Yaka T-SHIRT
                    <div className="badge badge-secondary">YENI</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Upperwear</div>
                </div>
            </div>
        </div>
    )
}

export default Card