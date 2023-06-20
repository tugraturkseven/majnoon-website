import React from 'react'
import Carousel from '../components/Carousel'
import Stats from '../components/Stats'

function Detail() {
    return (

        <div className='grid grid-rows-2 grid-flow-col gap-28 mx-32 h-48 justify-center'>
            <Carousel />
            <div className='col-span-2 row-span-1 mt-4 '>
                <h2 className='font-semibold underline' >Erkek Bisiklet Yaka T-shirt</h2>
                <div className="badge badge-accent">Yeni</div>
                <div className="rating block mt-3">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="divider"></div>
            </div>


            <div className='row-span-1 col-span-2 w-96'>
                <ul className='list-disc'>
                    <li>15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayın.</li>
                    <li>Erkek Slim Fit T-Shirt</li>
                    <li>Urun %100 pamukludur.</li>
                    <li>Model boy 185 kilo 75 urun bedeni XL'dir.</li>
                </ul>
                <div className="divider"></div>

                <div className="join mt-5">
                    <input className="join-item btn" type="radio" name="options" aria-label="S" />
                    <input className="join-item btn" type="radio" name="options" aria-label="M" />
                    <input className="join-item btn" type="radio" name="options" aria-label="L" />
                    <input className="join-item btn" type="radio" name="options" aria-label="XL" />
                </div>
                <button className="btn btn-secondary ml-5">Sepete Ekle</button>
            </div>

            <div className='row-span-1 col-span-2 w-96'>
                <Stats></Stats>
            </div>
        </div>

    )
}

export default Detail