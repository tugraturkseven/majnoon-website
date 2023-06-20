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


function Table() {
    return (
        <div className="overflow-x-auto col-span-2">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>🏷️ Urun</th>
                        <th>💸 Fiyat</th>
                        <th>🧺 Adet</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={images[1]} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Erkek Bisiklet Yaka Beyaz T-shirt</div>
                                    <div className="text-sm opacity-50">M Beden</div>
                                </div>
                            </div>
                        </td>
                        <td className='font-semibold text-accent'>
                            89.99 TL
                        </td>
                        <td>2</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">Goruntule</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={images[0]} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Erkek Bisiklet Yaka Siyah T-shirt</div>
                                    <div className="text-sm opacity-50">XL Beden</div>
                                </div>
                            </div>
                        </td>
                        <td className='font-semibold text-accent'>
                            99.99 TL
                        </td>
                        <td>1</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">Goruntule</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={images[2]} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Erkek Bisiklet Yaka Beyaz T-shirt</div>
                                    <div className="text-sm opacity-50">M Beden</div>
                                </div>
                            </div>
                        </td>
                        <td className='font-semibold text-accent'>
                            199.99 TL
                        </td>
                        <td>3</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">Goruntule</button>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={images[4]} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Erkek Slim Fit Desenli Beyaz T-shirt</div>
                                    <div className="text-sm opacity-50">S Beden</div>
                                </div>
                            </div>
                        </td>
                        <td className='font-semibold text-accent'>
                            69.99 TL
                        </td>
                        <td>1</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">Goruntule</button>
                        </th>
                    </tr>
                </tbody>


            </table>
        </div>
    )
}

export default Table