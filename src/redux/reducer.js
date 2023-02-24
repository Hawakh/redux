import { ADD_TODO, DELETE_TODO, FILTER_DONE, UPDATE_TODO } from "./action";

const initstate = {
  todos: [
    {
      id: 1,
      description:"moyenne",
      name: "element 1",
      isDone:false,
    },
    {
      id: 2,
      description:"bizarre",
      name: "element 2",
      isDone:false
    },
    {
      id: 3,
      description:"grand",
      name: "element 3",
      isDone:false
    }
  ]
};

export const todoReducer = (state = initstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload)
      };
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                name: action.payload.name,
                description: action.payload.description
              };
            } else {
              return todo;
            }
          })
        };
        case FILTER_DONE:
          return {
            ...state,
            todos: state.todos.map((todo) => {
              if (todo.id === action.payload.id) {
                return {
                  ...todo,
                  ...action.payload,
                };
              }
              return todo;
            }),
          };
      
    default:
      return state;
  }
};
