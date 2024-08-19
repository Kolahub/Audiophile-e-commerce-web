// import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/assets/shared/desktop/logo.svg'
import cart from '/assets/shared/desktop/icon-cart.svg'
import hamburger from '/assets/shared/tablet/icon-hamburger.svg'
import { productsAction } from '../store'
import { useDispatch, useSelector } from 'react-redux'

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
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()

    function handleToggleOpen() {
        dispatch(productsAction.toggleOpenCart())
       }
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#191919] font-custom">
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

            <button onClick={handleToggleOpen} className='relative'>
            <img src={cart} alt="" />
            {
                cartItems.length > 0 && <div className="absolute bg-orangePrimary text-white text-xs font-bold w-5 h-5 leading-5 rounded-full -top-3 -right-3">{cartItems.length}</div>
            }
            </button>
        </div>
    </header>
  )
}

export default Header