// import React from 'react'
import Footer from "./Footer";
import GoBack from "./GoBack";
import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector((state) => state.cart);
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

  return (
    <div className="font-custom pt-24 bg-whitePrimary">
      <div className="px-6 pt-12 lg:container">
        <GoBack />
      </div>

      <section className="px-6 py-16 lg:container">
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="bg-white p-5 lg:p-8 rounded-md flex-grow">
            <h1 className="uppercase text-3xl font-bold tracking-wider">
              checkout
            </h1>
            <div className="mt-10 uppercase text-sm text-orangePrimary font-bold tracking-wider">
              <h1>billing details</h1>
            </div>
          </div>

          <div className="bg-white p-5 rounded-md w-full lg:w-[350px]">
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

            <button className="mt-6 font-bold py-3 px-2 text-whitePrimary text-sm tracking-wider uppercase bg-orangePrimary hover:bg-orangeSecondary active:scale-95 w-full">
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
