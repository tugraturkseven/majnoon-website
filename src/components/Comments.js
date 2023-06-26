import React from 'react'

function Comments(props) {

    return (
        <div className="card w-full shadow-md">
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <div className="rating w-20">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={props.rate === 1} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={props.rate === 2} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={props.rate === 3} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={props.rate === 4} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={props.rate === 5} />
                </div>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}

export default Comments