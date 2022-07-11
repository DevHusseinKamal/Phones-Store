import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendData = (data, type) => {
  return async () => {
    const send = async () => {
      const response = await fetch(
        `https://phones-store-ed836-default-rtdb.firebaseio.com/${type}.json`,
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error!");
      }
    };

    try {
      send();
    } catch (err) {
      console.log(err.message);
    }
  };
};

const APIS = [
  "https://phones-store-ed836-default-rtdb.firebaseio.com/phones.json",
  "https://phones-store-ed836-default-rtdb.firebaseio.com/cart.json",
];

export const getData = () => {
  return async (dispatch) => {
    dispatch(uiActions.show({ value: true, title: "Loading" }));
    const get = async () => {
      const response = await Promise.all(APIS.map((api) => fetch(api)));

      const data = await Promise.all(
        response.map((res) => {
          if (!res.ok) {
            throw new Error("Fetch failed!");
          }

          return res.json();
        })
      );

      const phonesData = data[0];
      const products = [];
      for (const i in phonesData) {
        products.push(phonesData[i]);
      }

      return [phonesData, data[1]];
    };

    try {
      const receivedData = await get();

      dispatch(cartActions.setData(receivedData[0]));
      dispatch(cartActions.replaceCart(receivedData[1] || []));
      dispatch(uiActions.show({ value: false, title: "success" }));
    } catch (error) {
      dispatch(uiActions.show({ value: false, title: error.message }));
    }
  };
};
