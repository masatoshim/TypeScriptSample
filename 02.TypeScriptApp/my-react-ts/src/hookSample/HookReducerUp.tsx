import { useReducer } from "react";

// Propsの型定義
type HookReducerUpProps = {
  init: number
};

// Stateの型定義
type StateType = {
  count: number
};

// Actionの型定義
type ActionType = {
  type: 'update',
  step: number,
} | {
  type: 'reset',
  init: number,
};

// Reducerの型定義
// type CountReducerType = (state: StateType, action: ActionType) => StateType;

export default function HookReducerUp({ init }: HookReducerUpProps) {
  const [state, dispatch] = useReducer<StateType, [ActionType]>(
    (state: StateType, action: ActionType) => {
      switch (action.type) {
        // カウントの増減
        case 'update':
          return { count: state.count + action.step };
        case 'reset' :
          return { count: action.init };
        // 既定の挙動（Stateをそのまま返す）
        default:
          return state;
      }
    },
    {
      count: init
    }
  );

  // それぞれのボタンに対応したハンドラー
  const handleUp = () => dispatch({ type: 'update', step: 1});
  const handleDown = () => dispatch({ type: 'update', step: -1});
  const handleReset = () => dispatch({ type: 'reset', init: 0});

  return (
    <>
      <button onClick={handleUp}>Up</button>
      <button onClick={handleDown}>Down</button>
      <button onClick={handleReset}>Reset</button>
      <p>{state.count}</p>
    </>
  )
}