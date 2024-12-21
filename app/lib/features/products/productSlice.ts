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

interface IRemoveCartItemPayload {
  type: "remove" | "minus";
  productId: IProducts["productId"];
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
    decreaseRemoveCartItem(
      state,
      { payload }: PayloadAction<IRemoveCartItemPayload>
    ) {
      const productIndex = state.cartItems.findIndex((cartObj) => {
        return cartObj.productId == payload.productId;
      });
      console.log(state.cartItems[productIndex].cartQty);
      if (
        productIndex >= 0 &&
        (payload.type == "remove" || state.cartItems[productIndex].cartQty == 1) // handled if current cart qty is 1 then item needs to be removed on the current click
      ) {
        console.log("product removed");
        state.cartItems = state.cartItems.toSpliced(productIndex, 1);
      } else if (productIndex >= 0 && payload.type == "minus") {
        state.cartItems[productIndex] = {
          ...state.cartItems[productIndex],
          cartQty: state.cartItems[productIndex].cartQty - 1,
        };
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

export const { updateCartItem, decreaseRemoveCartItem } = productSlice.actions;

export default productSlice.reducer;
