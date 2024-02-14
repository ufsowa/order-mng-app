//selectors
export const getAllItems = ({tables}) => tables;
export const getItemById = ({tables}, id) => tables.find((table) => table.id === id);
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE = createActionName('UPDATE');
// action creators

export const updateItem = payload => ({type: UPDATE, payload});

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE:
      return statePart.map((table) => table.id === action.payload.id ? action.payload : table)
    default:
      return statePart;
  };
};
export default tablesReducer;