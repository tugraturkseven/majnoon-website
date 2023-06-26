import React from 'react'

function Comments(props) {

    return (
        <div className="card w-96 border-amber-600 border-2 m-5 col-span-1">
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <div className="rating rating-sm ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 hover:cursor-default" checked={props.rate === 4 ? true : false} disabled />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 hover:cursor-default" disabled />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 hover:cursor-default" disabled />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 hover:cursor-default" disabled />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 hover:cursor-default" disabled />
                </div>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}

export default Comments