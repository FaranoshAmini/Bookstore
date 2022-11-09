// ACTIONS
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// REDUCER
// eslint-disable-next-line default-param-last
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

// ACTIONS CREATOR
export const checkStatus = () => ({
  type: CHECK_STATUS,
});
