// import React from 'react'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import OC from '/assets/checkout/icon-order-confirmation.svg'
import { useNavigate } from "react-router-dom"
import { productsAction } from "../store"


function CheckoutMsg({grandTotal}) {
    const [allItems, setAllItems] = useState(false)
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function showAllOrderItems () {
        setAllItems(prev => !prev)
    }

    function afterPaymentBackBtn () {
        navigate("/");
        dispatch(productsAction.clearCart())
    }
  return (
    <div className={`fixed bg-opacity-35 bg-black top-0 bottom-0 left-0 right-0 z-40`}>
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-2/3 w-[350px] md:w-[500px] lg:w-[600px] bg-white p-7">
      <div className="w-fullw-[70%]">
      <img src={OC} alt="" className="mb-5"/>
      <h1 className="uppercase font-bold text-[2.5rem] text-5 leading-none mb-5">thank you for your order</h1>
      <p className="mb-5">You will receive an email confirmation shortly.</p>
      </div>
      <div className="rounded-md">
      <div className="flex flex-col md:flex-row rounded-md">
        <div className="bg-gray-200 rounded-tl-md rounded-bl-md p-5 md:w-[60%] w-full">
        <div className="my-6 flex flex-col gap-4">
  {(allItems ? cart : cart[0] ? [cart[0]] : []).map(el => {
    const price = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
    }).format(el.price);
    
    const [firstName, secondName, thirdName] = el.name.split(' ');
    
    return (
      <div key={el.id} className="flex justify-between items-center">
        <div className="flex justify-between w-full">
            <div className="flex gap-3">
            <img src={el.image.mobile} alt={el.name} className="w-16 object-cover rounded-md" />
          <div>
            <h1 className="uppercase font-bold">
              {firstName} {secondName === 'Mark' ? `${secondName} ${thirdName}` : ''}
            </h1>
            <h1 className="font-bold text-gray-400">{price}</h1>
          </div>
            </div>
          <div className="">
                      <p className="font-bold text-gray-400">{`x${el.quantity}`}</p>
                    </div>
        </div>
      </div>
    );
  })}
</div>
            <div className="border-t border-gray-400">
                <button onClick={showAllOrderItems} className="text-gray-600 font-semibold text-center w-full pt-3">
                    {!allItems ? `and ${cart.length - 1} other item(s)` : 'view less'}
                </button>
            </div>
        </div>

        <div className="flex flex-col justify-end bg-black p-10 rounded-tr-md rounded-br-md md:w-[40%] w-full">
            <h1 className="uppercase text-gray-400">grand total</h1>
            <h1 className="text-white font-bold text-xl mt-2">{grandTotal}</h1>
        </div>
      </div>
      </div>

      <button className="mt-6 font-bold py-3 px-2 text-whitePrimary text-sm tracking-wider uppercase bg-orangePrimary hover:bg-orangeSecondary active:scale-95 w-full" onClick={afterPaymentBackBtn}>
             back to home
       </button>
      </div>
    </div>
  )
}

export default CheckoutMsg