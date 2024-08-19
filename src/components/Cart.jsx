// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../store';
import { Link } from 'react-router-dom';

function Cart() {
  // let mainCartStyle = ''
    const cart = useSelector(state => state.cart)
    const isCartOpen = useSelector(state => state.isCartOpen)
    const dispatch = useDispatch()

    // console.log(cart, isCartOpen, '😍😍😍');
    const summationPrices = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)
    const totalPrice = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
    }).format(summationPrices);

    function increaseItemQuantity(id) {
      dispatch(productsAction.increaseProductQuantity(id))
    }
  
    function decreaseItemQuantity(id) {
      dispatch(productsAction.decreaseProductQuantity(id))
    }

    function handleToggleOpen() {
      dispatch(productsAction.toggleOpenCart())
     }

  return (
    <div className={`fixed bg-opacity-35 bg-black top-0 bottom-0 left-0 right-0 z-20 ${!isCartOpen ? 'hidden' : ''}`}>
      <div className="absolute right-6 left-6 md:left-auto md:right-28 lg:right-40  top-28 md:w-96 p-4 bg-white">
        <div className="flex justify-between">
        <h1 className='text-2xl font-bold tracking-wider uppercase'>{`cart (${cart.length})`}</h1>
        <button className='text-lg capitalize hover:text-orangePrimary'>remove all</button>
        </div>
        <div className="my-6 flex flex-col gap-4">
          {
            cart.map(el => {
              const price = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'USD',
              }).format(el.price);
              const shtName = el.name.split(' ')
              const mk = shtName.includes('Mark')
              return (
                <div key={el.id} className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <img src={el.image.mobile} alt="" className='w-16 object-cover rounded-md' />
                    <div className="">
                    <h1 className="uppercase font-bold">{`${shtName[0]} ${mk ? `${shtName[1]} ${shtName[2]}` : ''}`}</h1>
                      <h1 className="font-bold text-gray-400">{price}</h1>
                    </div>
                  </div>

                  <div className="">
                  <div className="w-32 font-bold bg-gray-100 p-3 flex items-center justify-around">
                    <button onClick={() => decreaseItemQuantity(el.id)} className="text-gray-400 hover:text-orangePrimary active:scale-125">-</button>
                    <span className="">{el.quantity}</span>
                    <button onClick={() => increaseItemQuantity(el.id)} className="text-gray-400 hover:text-orangePrimary active:scale-125">+</button>
          </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="flex justify-between text-xl">
          <h1 className='uppercase text-gray-500 font-semibold'>total</h1>
          <h1 className='font-bold'>{totalPrice}</h1>
        </div>

        <Link onClick={handleToggleOpen} to={'/checkout'} className="inline-block text-center mt-6 font-semibold py-3 px-2 text-whitePrimary text-sm uppercase bg-orangePrimary hover:bg-orangeSecondary active:scale-95 w-full">
          checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart