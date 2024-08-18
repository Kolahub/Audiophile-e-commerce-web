// import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/assets/shared/desktop/logo.svg'
import cart from '/assets/shared/desktop/icon-cart.svg'
import hamburger from '/assets/shared/tablet/icon-hamburger.svg'
import Cart from './Cart'

const LINKDATA = [
    {
        id: 'guej',
        title: 'home',
        path: '/'
    },
    {
        id: 'ejgdbd',
        title: 'headphones',
        path: '/headphones'
    },
    {
        id: 'hdbjnqkiu',
        title: 'speakers',
        path: '/speakers'
    },
    {
        id: 'yeueis',
        title: 'earphones',
        path: '/earphones'
    }
]

function Header() {
  return (
    <header className="bg-[#191919] font-custom">
        <div className="container flex items-center justify-between gap-4 py-9 border-b-[0.5px] border-b-gray-500">
        <button className="lg:hidden">
                <img src={hamburger} alt="" />
            </button>

            <img src={logo} alt="" />
            
            <nav className='hidden lg:block'>
                <ul className='flex uppercase font-semibold gap-5'>
                    {
                        LINKDATA.map(el => (
                            <li key={el.id} className=""><NavLink to={el.path} className={({isActive}) => isActive ? 'text-orangePrimary' : 'text-whitePrimary hover:text-orangePrimary'}>{el.title}</NavLink></li>
                        ))
                    }
                </ul>
            </nav>

            <button>
            <img src={cart} alt="" />
            </button>
        </div>

        <div className="">
            <Cart />
        </div>
    </header>
  )
}

export default Header