//selectors
export const getAllItems = ({tables}) => tables;
export const getItemById = ({tables}, id) => tables.find((table) => table.id === id);
export const dataLoaded = ({loading}) => loading;
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE = createActionName('UPDATE');
const LOAD = createActionName('LOAD');
const TOGGLE_STATUS = createActionName('TOGGLE_STATUS');

// action creators
export const updateItem = payload => ({type: UPDATE, payload});
export const loadItems = payload => ({type: LOAD, payload});
export const loadingStatus = payload => ({type: TOGGLE_STATUS, payload});

// action with effects
export   const fetchItems = () => {
  return (dispatch) => {
    dispatch(loadingStatus(false));
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(items => {
        dispatch(loadItems(items));
        dispatch(loadingStatus(true));
      })
    }
  };

export const updateItemRequest = (newTable) => {
    return (dispatch) => {
      const id = newTable.id;
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTable),
      };
      
      fetch('http://localhost:3131/tables/' + id, options)
      .then(res => res.json())
      .then(newTable => dispatch(updateItem(newTable)));    
    }
}

export const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD:
      return [...action.payload];
    case UPDATE:
      return statePart.map((table) => table.id === action.payload.id ? action.payload : table);
    default:
      return statePart;
  };
};

export const loadingReducer = (statePart = [], action) => {
  switch (action.type) {
    case TOGGLE_STATUS:
      return action.payload;
    default:
      return statePart;
  };
};
