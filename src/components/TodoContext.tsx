import React, { useReducer, useContext, createContext, Dispatch } from "react";

// Todo type
export interface Todos {
  id: string;
  todo: string;
  done: boolean;
}

// action type
type Action =
  | { type: "ADD_TODO"; id: string; todo: string; done: boolean }
  | { type: "TOGGLE_TODO"; id: string; done: boolean }
  | { type: "DELETE_TODO"; id: string };

// dispatch type
type TodoDispatch = Dispatch<Action>;

// Context
const TodoStateContext = createContext<Todos[] | null>([]);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);

// reducer
function reducer(state: Todos[], action: Action): Todos[] {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({
        id: action.id,
        todo: action.todo,
        done: action.done,
      });
    case "TOGGLE_TODO":
      return state.map((todo: Todos) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo: Todos) => todo.id !== action.id);
    default:
      throw new Error("Unhandled action");
  }
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// state와 dispatch를 쉽게 사용하기 위한 커스텀 Hooks
export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
