//selectors
export const getAllItems = ({tables}) => tables;
export const getItemById = ({tables}, id) => tables.find((table) => table.id === id);
// actions
const createActionName = actionName => `app/tables/${actionName}`;

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};
export default tablesReducer;