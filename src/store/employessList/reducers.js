const initialState = {
  data: [],
  loading: false,
  error: false,
  sort: '-name'
};

// eslint-disable-next-line default-param-last
const employeesList = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES':
      return {
        ...state,
        data: action.payload,
      };
    case 'DATA_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'DATA_LOADED':
      return {
        ...state,
        loading: false
      };
    case 'DATA_ERROR':
      return {
        ...state,
        error: true
      };
    case 'SORT_BY':
      return {
        ...state,
        sort: action.payload
      };
    default: return state;
  }
};

export default employeesList;
