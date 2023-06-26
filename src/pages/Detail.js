import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import Stats from '../components/Stats'
import Comments from '../components/Comments'


function getComments() {
    const comArr = ['Tişörtü aldım ve gerçekten beğendim, tarzımı tam anlamıyla yansıtıyor.', 'Ürünün kalitesinden ve dikişlerin düzgünlüğünden çok memnun kaldım.', 'Teslimat süresi beklediğimden biraz daha uzun sürdü, biraz sabır gerektirdi.', 'Müşteri hizmetleri ekibi ile iletişim kurmak oldukça zor oldu, yanıtlar geç ve yetersizdi.', 'İndirimlerden faydalandım ve kaliteli bir ürünü uygun fiyata aldım.']
    const nameArr = ['Mehmet Turkseven', 'Ahmet Yılmaz', 'Ayşe Yılmaz', 'Fatma Yılmaz', 'Mehmet Yılmaz'];
    const rateArr = [4, 3, 3, 4, 5];
    const returnArr = comArr.map((item, index) => {
        return {
            comment: item,
            name: nameArr[index],
            rate: rateArr[index]
        }
    });
    return returnArr;
}

function Detail() {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        setComments(getComments());
    }, [comments]);

    return (
        <div className='grid grid-cols-10'>
            <div className='col-span-4 w-full pl-16'>
                <Carousel />
            </div>

            <div className='col-span-4 mt-4 '>
                <h2 className='font-semibold underline' >Erkek Bisiklet Yaka T-shirt</h2>
                <div className="badge badge-accent">Yeni</div>
                <div className="rating block mt-3">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div>
                <div className="divider w-96"></div>
                <ul className='list-disc px-5'>
                    <li>15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayın.</li>
                    <li>Erkek Slim Fit T-Shirt</li>
                    <li>Urun %100 pamukludur.</li>
                    <li>Model boy 185 kilo 75 urun bedeni XL'dir.</li>
                </ul>
                <div className="divider w-96"></div>
                <div className="join mt-5">
                    <input className="join-item btn" type="radio" name="options" aria-label="S" />
                    <input className="join-item btn" type="radio" name="options" aria-label="M" />
                    <input className="join-item btn" type="radio" name="options" aria-label="L" />
                    <input className="join-item btn" type="radio" name="options" aria-label="XL" />
                </div>
                <button className="btn btn-secondary ml-5">Sepete Ekle</button>
            </div>

            <div className='col-span-2'>
                <Stats></Stats>
            </div>
            <div className='col-span-10'>
                <h2 className='card-title justify-center items-center'>Yorumlar</h2>
                <div className='flex flex-row flex-wrap items-center justify-center'>
                    {comments.map((item, index) => {
                        return <Comments key={index} name={item.name} rate={item.rate} comment={item.comment} />
                    })}
                </div>

            </div>
        </div>

    )
}

export default Detail