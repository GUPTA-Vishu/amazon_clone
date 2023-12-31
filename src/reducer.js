export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) => 
  basket.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR Adding item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //LOGIC FROM RETERIEVING FROM THE BASKET
      const index=state.basket.findIndex(
        (basketItem)=>basketItem.id===action.id

      );
      let newBasket=[...state.basket];
      if(index>=0){
        newBasket.splice(index,1);

      }
      else{
        console.warn(
          `Cant remove product(id:${action.id} ) as its not in basket!`
        )
      }
      return {
         ...state,
        basket:newBasket
       }

    default:
      return state;
  }
}
export default reducer;
