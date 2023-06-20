import React from 'react'

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    let imagesArr = [];

    Object.keys(images).map((imageName) => (
        imagesArr.push(images[imageName])
    ))
    return imagesArr;
};

const images = importAll(require.context('../assets/tshirts/', false, /\.(jpg)$/));

function Carousel() {

    return (
        <div className='ml-3 col-span-2 row-span-2 w-96'>
            <div className="carousel">
                <div id="item1" className="carousel-item w-full">
                    <img src={images[0]} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={images[1]} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={images[2]} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={images[3]} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-96 py-2 gap-2">
                <a href="#item1" className="btn btn-xs font-bold">•</a>
                <a href="#item2" className="btn btn-xs font-bold">•</a>
                <a href="#item3" className="btn btn-xs font-bold">•</a>
                <a href="#item4" className="btn btn-xs font-bold">•</a>
            </div>
        </div>
    )
}

export default Carousel