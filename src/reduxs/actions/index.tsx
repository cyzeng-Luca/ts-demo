import actionEnums from "../consts/actionEnums";

/************************ Type *****************************/

interface Plus {
  type: typeof actionEnums.Plus;
  payload: {
    id: string;
  };
}
interface Minus {
  type: typeof actionEnums.Minus;
  payload: {
    id: string;
  };
}
interface AddProduct {
  type: typeof actionEnums.AddProduct;
  payload: {
    id: string;
  };
}
export type ActionTypes = Plus | Minus | AddProduct;

/************************ Implement *****************************/

export function plus(id: string): ActionTypes {
  return {
    type: actionEnums.Plus,
    payload: {
      id: id
    }
  };
}

export function minus(id: string): ActionTypes {
  return {
    type: actionEnums.Minus,
    payload: {
      id: id
    }
  };
}
export function addProduct(id: string): ActionTypes {
  return {
    type: actionEnums.AddProduct,
    payload: {
      id: id
    }
  };
}
