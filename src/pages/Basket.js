import React from 'react'
import Table from '../components/Table'
import Footer from '../components/Footer'

function Basket() {

    return (
        <div className='grid grid-flow-row grid-cols-3'>
            <Table />
            <div className='col-span-1 flex-col px-10'>
                <a href='/basketlogin' className="btn btn-warning w-full mb-5">SIPARISI TAMAMLA</a>
                <div className='bg-neutral-content'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td className='font-semibold text-large text-neutral'>👕 Urunun Toplami</td>
                                <td className='text-neutral' >679.00 TL</td>
                            </tr>
                            <tr>
                                <td className='font-semibold text-large text-neutral'>📦 Kargo Toplami</td>
                                <td className='text-neutral'>19.00 TL</td>
                            </tr>
                            <tr>
                                <td className='font-semibold text-large'></td>
                                <td className='text-neutral font-bold text-large'>698.00 TL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='w-full mt-3'>
                    <input type="text" placeholder="Indirim kodu" className="input input-bordered w-full max-w-xs shadow-md" />
                    <button className="btn btn-outline btn-error ml-3 px-7">EKLE</button>
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="font-thin px-5"> <span className='font-semibold'>Mesafeli satis</span> sozlesmesini okudum, anladim ve kabul ediyorum.</span>
                    </label>
                </div>

                <a href='/basketlogin' className="btn btn-warning w-full mt-5">SIPARISI TAMAMLA</a>
            </div>

        </div>

    )
}

export default Basket