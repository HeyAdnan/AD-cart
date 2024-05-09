import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = 'https://www.course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk("cart/getCartItems", async(anyprop_to_bePassed,thunkAPI) => {
  // console.log(thunkAPI);
  console.log(thunkAPI.getState());//get all states in the app and can manipulate them , so we can acess all state like cart,modal etc
  return await fetch(url)
    .then((response) => {
     
        return response.json();
      
    })
    .catch((error) => {
      console.log(error);
    })
});
const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      /* we can also return a state , but that state will become the new state so if we
      lets say return state = {cartItems:[]} then the state will be {cartItems:[]} and
      the initial state will be lost and all other properties will be lost like amount and total
       */
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount = amount + item.amount;
        total = total + item.price * item.amount;
      });

      state.total = total;
      state.amount = amount;
    },
  },
  extraReducers:(builder)=> {
   builder.addCase( getCartItems.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getCartItems.fulfilled, (state, action) => {
      console.log(action);
      state.cartItems = action.payload;
      state.isLoading = false;
    })
    .addCase(getCartItems.rejected, (state) => {
      state.isLoading = false; // we can also set a error message here
    })
  },
});
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
