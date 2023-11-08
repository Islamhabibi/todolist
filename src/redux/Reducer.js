import { Add, Delete, Update } from "./ActionType";

const initialState = {
  todo: [{id:1, task:"modif", time:"02/08/2023", iscomplet:false}],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Add:
      return { ...state, todo: [...state.todo, payload] };
    case Delete:
      return { ...state, todo: state.todo
        
        .map((e)=>e.id === payload ?{...e,iscomplet:true} : e )
         };
    case Update:
      return {
        ...state,
        todo: state.todo.map((e) =>
          e.id === payload.id ? (e = payload.data) : e
        ),
      };

    default:
      return state;
  }
};
export default reducer;
