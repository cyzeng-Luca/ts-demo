import { createReducer } from "../../utils/constructMethods";
import produce from "immer";
import actionEnums from "../consts/actionEnums";
import { ActionTypes } from "../actions";

export interface Product {
  id: string;
  title: string;
  price: number;
  amount: number;
}
export interface InitialState {
  visible: boolean;
  // 增加或减少数量的时候，使用索引方便查询
  // 真实服务器返回情况可能为数组 查询时间复杂度O(n),使用对象，则时间复杂度O(1)
  productMap: {
    [config: string]: Product;
  };
}

const initialState: InitialState = {
  // productList: [
  //   { id: 1, title: "Jack", price: 100, amount: 2 },
  //   { id: 2, title: "T-shirt Mark", price: 100, amount: 1 }
  // ]
  visible: false,
  productMap: {
    1: {
      id: "1",
      title: "product-1",
      price: 100,
      amount: 2
    },
    2: {
      id: "2",
      title: "product-2",
      price: 100,
      amount: 1
    }
  }
};

const handlers = {
  [actionEnums.Plus](state: InitialState, { payload }: ActionTypes) {
    return produce(state, draft => {
      draft.productMap[payload.id].amount += 1;
    });
  },
  [actionEnums.Minus](state: InitialState, { payload }: ActionTypes) {
    return produce(state, draft => {
      let amount = draft.productMap[payload.id].amount;
      if (amount > 1) {
        draft.productMap[payload.id].amount -= 1;
      }
    });
  },
  [actionEnums.AddProduct](state: InitialState, { payload }: ActionTypes) {
    return produce(state, draft => {
      let product = draft.productMap[payload.id];
      if (product) {
        product.amount += 1;
      } else {
        draft.productMap[payload.id] = {
          id: payload.id,
          title: `product-${payload.id}`,
          price: 100,
          amount: 1
        };
      }
    });
  }
};

export default createReducer<InitialState, ActionTypes>(initialState, handlers);
