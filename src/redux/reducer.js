const ADD_TASK = 'tasks/add';
const EDIT_TASK = 'tasks/edit';
const TOGGLE_IMPORTANT = 'tasks/toggleImportant';
const TOGGLE_COMPLETED = 'tasks/toggleCompleted';
const TOGGLE_TRASH = 'tasks/toggleTrash';
const SET_FILTER = 'filter/set';
const DELETE_TASK = 'tasks/delete';

export const addTask = (text) => ({ type: ADD_TASK, text });
export const editTask = (index, newText) => ({ type: EDIT_TASK, index, newText });
export const toggleImportant = (index) => ({ type: TOGGLE_IMPORTANT, index });
export const toggleCompleted = (index) => ({ type: TOGGLE_COMPLETED, index });
export const toggleTrash = (index) => ({ type: TOGGLE_TRASH, index });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });
export const deleteTask = (index) => ({ type: DELETE_TASK, index });

const initialState = {
  tasks: [],
  filter: 'All'
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, { text: action.text, important: false, completed: false, deleted: false }] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, deleted: true } : task
        )
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, text: action.newText } : task
        )
      };
    case TOGGLE_IMPORTANT:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, important: !task.important } : task
        )
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, completed: !task.completed } : task
        )
      };
    case TOGGLE_TRASH:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, deleted: !task.deleted } : task
        )
      };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
