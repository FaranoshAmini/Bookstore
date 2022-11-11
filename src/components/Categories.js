import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

// eslint-disable-next-line react/function-component-definition
const Categories = () => {
  const categoriesStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={handleStatus}>
        Check Status
      </button>
      <p>{categoriesStatus}</p>
    </div>
  );
};
export default Categories;
