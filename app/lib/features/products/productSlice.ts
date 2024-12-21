import { IProducts } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProductsInitialState {
  cartItems: IProducts[];
  isShowCart: boolean;
}

const initialState: IProductsInitialState = {
  cartItems: [],
  isShowCart: false,
};

interface IUpdateCartItemSinglePayload {
  type: "single";
  productId: number;
  cartItem: IProducts;
}

interface IUpdateCartItemMultiplePayload {
  type: "multiple";
  cartItems: IProducts[];
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateCartItem(
      state,
      {
        payload,
      }: PayloadAction<
        IUpdateCartItemSinglePayload | IUpdateCartItemMultiplePayload
      >
    ) {
      if (payload.type == "single") {
        const productIndex = state.cartItems.findIndex((cartObj) => {
          return cartObj.productId == payload.productId;
        });
        if (productIndex >= 0) {
          state.cartItems[productIndex] = {
            ...state.cartItems[productIndex],
            cartQty: state.cartItems[productIndex].cartQty + 1,
          };
        } else {
          state.cartItems.push({ ...payload.cartItem, cartQty: 1 });
        }
      } else {
        state.cartItems.push(...payload.cartItems);
      }
    },
    setShowCart(
      state,
      { payload }: PayloadAction<IProductsInitialState["isShowCart"]>
    ) {
      state.isShowCart = payload;
    },
  },
});

export const { updateCartItem } = productSlice.actions;

export default productSlice.reducer;
