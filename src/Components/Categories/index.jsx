import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get, select } from '../../store/actions.js'


const Categories = () => {

  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(get('categories'))
    dispatch(get('products'))
  });

  return (
    <>
      <h2>Browse Our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`categories-${idx}`}
              onClick={() => dispatch(select(category))}
            >
              {category.name}
            </Button>
          ))
        }
      </ButtonGroup>
    </>
  )
};

export default Categories;


