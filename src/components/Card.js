import React from 'react'

function Card(props) {
    console.log(props)
    return (
        <div className="card  bg-base-100 shadow-xl m-5 z-0">
            <a href="/details">
                <figure><img src={props.imgSrc} alt="Shoes" className='object-cover' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Erkek Bisiklet Yaka T-SHIRT
                        <div className="badge badge-success">YENI</div>
                    </h2>
                    <div>
                        <p className='line-through text-lg inline-flex text-error font-semibold'>
                            79.99 TL
                        </p>
                        <p className='ml-3 text-md inline-flex font-bold'>
                            39.99 TL
                        </p>
                    </div>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Upperwear</div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card