import React from 'react'
import profile from '../assets/tshirts/profile.png'
function Navbar() {
    return (
        <div className="navbar bg-base-100 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20">
                        <li><a>Ana Sayfa</a></li>
                        <li><a>Kampanyalar</a></li>
                        <li><a>3 AL 2 ODE</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl" href='/'>MAJNOON</a>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">3</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-20">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Urun</span>
                            <span className="text-info">Toplam: 999 TL</span>
                            <div className="card-actions">
                                <a href='/basket' className="btn btn-primary btn-block">Sepeti Gor</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end z-20">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profile} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profil
                                <span className="badge">Yeni</span>
                            </a>
                        </li>
                        <li><a>Ayarlar</a></li>
                        <li><a>Cikis</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar