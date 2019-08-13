// 此接口有问题
interface Action {
  type: string;
  payload?: any;
}

interface Handlers<S> {
  [index: string]: (state: S, action: any) => S;
}

/**
 * createReducer
 * @param initialState initialState
 * @param handlers handlers
 *
 */
export function createReducer<S, A extends Action>(
  initialState: S,
  handlers: Handlers<S>
) {
  if (!initialState || !handlers) {
    throw new Error(
      'must pass args of "initialState" and "handlers" to createReducer!'
    );
  }
  return (state: S = initialState, action: A): S => {
    if (action && action.type) {
      const { type } = action;

      if (!handlers[type]) {
        return state;
      }

      return handlers[type](state, action);
    }
    return state;
  };
}
