// import React from 'react'
import { Form } from "react-router-dom";
import Footer from "./Footer";
import GoBack from "./GoBack";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import COD from '/assets/checkout/icon-cash-on-delivery.svg'
import CheckoutMsg from "./CheckoutMsg";
import { productsAction } from "../store";

function Checkout() {
  const [error, setError] = useState({
    name: false,
    email: false,
  });
  const cartItems = useSelector((state) => state.cart);
  const payed = useSelector((state) => state.payed)
  const dispatch = useDispatch()
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  const calc = (fn) => formatCurrency(cartItems.reduce(fn, 0));

  const totalPrice = calc((acc, el) => acc + el.price * el.quantity);
  const shippingFees = calc((acc, el) => acc + el.price * 0.01);
  const vat = calc((acc, el) => acc + el.price * 0.095);

  const grandTotal = formatCurrency(
    cartItems.reduce((acc, el) => acc + el.price * (el.quantity + 0.105), 0)
  );

  function handleChange(e) {
    const value = e.target.value;
    console.log(value, e.target.type === "email" && !value.includes("@"));

    if (e.target.type === "email" && !value.includes("@")) {
      setError((prev) => {
        return { ...prev, email: true };
      });
    } 
     if(value === '' || value.includes("@")) {
      setError((prev) => {
        return { ...prev, email: false };
      });
    }
  }

  function continueAndPay () {
    dispatch(productsAction.pay())
  }

  return (
    <div className="font-custom pt-24 bg-whitePrimary">
      <div className="px-6 pt-12 lg:container">
        <GoBack />
      </div>

    {payed ? <CheckoutMsg grandTotal={grandTotal} /> : ''}

      <section className="px-6 py-16 lg:container">
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="bg-white p-5 lg:p-8 rounded-md flex-grow">
            <h1 className="uppercase text-3xl font-bold tracking-wider">
              checkout
            </h1>
            <Form>
              <div className="mt-10 mb-6 uppercase text-sm text-orangePrimary font-bold tracking-wider">
                <h1>billing details</h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="capitalize font-semibold ">
                    name
                  </label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="email"
                      className={`capitalize font-semibold ${
                        error.email ? "text-red-500" : "text-black"
                      }`}
                    >
                      email
                    </label>
                    {error.email && (
                      <p className="text-sm font-medium text-red-500">
                        Wrong format
                      </p>
                    )}
                  </div>
                  <input
                    type="email"
                    placeholder="alexei@mail.com"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="capitalize font-semibold ">
                    phone number
                  </label>
                  <input
                    type="number"
                    placeholder="+1 (202) 555-0136"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                  />
                </div>
              </div>

              <div className="mt-20 mb-6 uppercase text-sm text-orangePrimary font-bold tracking-wider">
                <h1>shopping info</h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label htmlFor="name" className="capitalize font-semibold ">
                    address
                  </label>
                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="capitalize font-semibold ">
                    ZIP code
                  </label>
                  <input
                    type="number"
                    placeholder="10001"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="capitalize font-semibold ">
                    city
                  </label>
                  <input
                    type="text"
                    placeholder="New York"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="capitalize font-semibold ">
                    country
                  </label>
                  <input
                    type="text"
                    placeholder="United States"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                  />
                </div>
              </div>

              <div className="mt-20 mb-6 uppercase text-sm text-orangePrimary font-bold tracking-wider">
                <h1>payment details</h1>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <h1 className="font-semibold">payment method</h1>

                <div className="">
                  <div className="flex gap-3 border-2 rounded-md p-4 hover:border-orangePrimary cursor-pointer">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="eMoney"
                      >
                        <input
                          name="paymentM"
                          type="radio"
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                          id="eMoney"
                        />
                        <span className="absolute bg-orangePrimary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transhtmlForm -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 font-semibold cursor-pointer text-sm"
                        htmlFor="eMoney"
                      >
                        e-Money
                      </label>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-3 border-2 rounded-md p-4 hover:border-orangePrimary cursor-pointer">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="cod"
                      >
                        <input
                          name="paymentM"
                          type="radio"
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                          id="cod"
                        />
                        <span className="absolute bg-orangePrimary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transhtmlForm -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 font-semibold cursor-pointer text-sm"
                        htmlFor="cod"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="eMNo" className=" font-semibold ">
                  e-Money Number
                  </label>
                  <input
                  id="eMNo"
                    type="text"
                    placeholder="238521993"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="eMNo" className=" font-semibold ">
                  e-Money PIN
                  </label>
                  <input
                  id="eMNo"
                    type="text"
                    placeholder="6891"
                    className="font-semibold border-2 border-gray-300 caret-orangePrimary focus:border-orangePrimary rounded-md focus:outline-none p-4"
                  />
                </div>
              </div>
            </Form>

            <div className="hidden mt-8 lg:flex gap-6">
              <div className="w-36">
                <img src={COD} alt="" className="w-full"/>
              </div>
              <div className="">
                <p className="text-gray-400">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-md w-full lg:w-[700px]">
            <h1 className="uppercase font-bold text-xl tracking-wider">
              summary
            </h1>
            <div className="my-6 flex flex-col gap-4">
              {cartItems.map((el) => {
                const price = new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "USD",
                }).format(el.price);
                const shtName = el.name.split(" ");
                const mk = shtName.includes("Mark");
                return (
                  <div
                    key={el.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-3">
                      <img
                        src={el.image.mobile}
                        alt=""
                        className="w-16 object-cover rounded-md"
                      />
                      <div className="">
                        <h1 className="uppercase font-bold">{`${shtName[0]} ${
                          mk ? `${shtName[1]} ${shtName[2]}` : ""
                        }`}</h1>
                        <h1 className="font-bold text-gray-400">{price}</h1>
                      </div>
                    </div>
                    <div className="">
                      <p className="font-bold text-gray-400">{`x${el.quantity}`}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="">
              <div className="flex justify-between items-center">
                <h1 className="uppercase text-gray-500">total</h1>
                <h1 className="font-bold">{totalPrice}</h1>
              </div>
              <div className="flex justify-between items-center mt-1">
                <h1 className="uppercase text-gray-500">shipping</h1>
                <h1 className="font-bold">{shippingFees}</h1>
              </div>
              <div className="flex justify-between items-center mt-1">
                <h1 className="uppercase text-gray-500">vat (included)</h1>
                <h1 className="font-bold">{vat}</h1>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h1 className="uppercase text-gray-500">grand total</h1>
                <h1 className="font-bold text-orangePrimary">{grandTotal}</h1>
              </div>
            </div>

            <button className="mt-6 font-bold py-3 px-2 text-whitePrimary text-sm tracking-wider uppercase bg-orangePrimary hover:bg-orangeSecondary active:scale-95 w-full" onClick={continueAndPay}>
              continue & pay
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-blackSecondary">
        <Footer />
      </footer>
    </div>
  );
}

export default Checkout;
