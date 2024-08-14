import { productsAction } from ".";

export function getAllProducts() {
  return async (dispatch) => {
    async function fetchAllProduct() {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        dispatch(productsAction.allProducts(data));
      } catch (err) {
        console.log(err.message);
      }
    }

    try {
      fetchAllProduct();
    } catch (err) {
      console.log(err.message);
    }
  };
}
