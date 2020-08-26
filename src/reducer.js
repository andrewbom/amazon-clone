export const initialState = {
  basket: [
    {
      id: "0007",
      title:
        "KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire RedKitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire Red",
      price: 889.89,
      rating: 1,
      image: "https://images-na.ssl-images-amazon.com/images/I/81EYgXB%2BGOL._AC_SX522_.jpg",
    },
    {
      id: "0007",
      title:
        "KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire RedKitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire Red",
      price: 889.89,
      rating: 1,
      image: "https://images-na.ssl-images-amazon.com/images/I/81EYgXB%2BGOL._AC_SX522_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove product (id: ${action.id})`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
