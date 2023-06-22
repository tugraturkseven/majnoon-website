import React from 'react'

function ShippingLogin() {
    return (
        <div className='grid grid-cols-5 grid-flow-row'>
            <div className='col-span-2 my-28'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <h1 className='text-3xl font-semibold'>🚀 Uyelik Giris 🚀</h1>
                    <input type="text" placeholder="E mail" className="input input-bordered input-warning w-full max-w-xs" />
                    <input type="password" placeholder="Password" className="input input-bordered input-warning w-full max-w-xs" />
                    <div className="form-control w-80">
                        <button className=' btn-xs bg-transparent'>Sifreni mi unuttun?</button>
                    </div>
                    <button className="btn btn-accent w-80">Giris Yap</button>
                    <button className="btn btn-outline btn-error w-80">Misafir Olarak Devam ET</button>
                </div>
            </div>
            <div className="col-span-1 flex w-full">
                <div className="divider divider-horizontal w-full"></div>
            </div>


            <div className='col-span-2 my-28'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <h1 className='text-3xl font-semibold'>🎉 Uye Ol 🎉</h1>
                    <input type="text" placeholder="Isim Soyisim" className="input input-bordered input-error w-full max-w-xs" />
                    <input type="text" placeholder="E Mail" className="input input-bordered input-error w-full max-w-xs" />
                    <input type="password" placeholder="Sifre" className="input input-bordered input-error w-full max-w-xs" />
                    <button className="btn btn-primary w-80">DEVAM</button>
                </div>
            </div>
        </div>
    )
}

export default ShippingLogin