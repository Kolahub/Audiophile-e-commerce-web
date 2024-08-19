import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { productsAction } from "../store";

function AddToCart({ product }) {
  const dispatch = useDispatch();
  const price = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  function handleAddToCart() {
    dispatch(productsAction.addToCart(product));
  }

  function increaseItemQuantity(itemToAdd) {
    dispatch(productsAction.increaseProductQuantity(itemToAdd.id));
  }

  function decreaseItemQuantity(itemToAdd) {
    dispatch(productsAction.decreaseProductQuantity(itemToAdd.id));
  }

  return (
    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
      <div className="md:h-[480px] lg:h-[500px] md:w-[45%]">
        <img
          src={product.image.desktop}
          alt={product.name}
          className="h-full w-full object-cover hidden lg:block"
        />
        <img
          src={product.image.tablet}
          alt={product.name}
          className="h-full w-full object-cover hidden md:block lg:hidden"
        />
        <img
          src={product.image.mobile}
          alt={product.name}
          className="w-full object-cover md:hidden"
        />
      </div>
      <div className="md:w-[45%] h-auto flex flex-col justify-center">
        {product.new && (
          <p className="uppercase text-orangePrimary tracking-[8px] mb-4">
            New Product
          </p>
        )}
        <h1 className="font-bold text-4xl uppercase tracking-[4px] mb-8">
          {product.name}
        </h1>
        <p className="text-lg mb-6">{product.description}</p>
        <p className="font-bold">{price}</p>

        <div className="mt-8 flex gap-4">
          <div className="w-32 font-bold bg-gray-100 p-3 flex items-center justify-around">
            <button
              onClick={() => decreaseItemQuantity(product)}
              className="text-gray-400 hover:text-orangePrimary active:scale-125"
            >
              -
            </button>
            <span className="">1</span>
            <button
              onClick={() => increaseItemQuantity(product)}
              className="text-gray-400 hover:text-orangePrimary active:scale-125"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-40 bg-orangePrimary hover:bg-orangeSecondary active:scale-95 py-3 text-whitePrimary uppercase font-bold text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
    new: PropTypes.bool,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddToCart;
