import { Button, ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../store/categories.js';
// step 1: import the action


const Categories = () => {

  const { categories } = useSelector((state) => state);
  const dispatchEvent = useDispatch();


  const handleChange = (category) => {
    dispatchEvent(set(category));
  }
  return (
    <>
      <h2>Browse Our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`categories-${idx}`}
              onClick={() => handleChange(category)}
             >
                {category.displayName}
              </Button>
              ))
          }
        </ButtonGroup>
    </>
  )
};

      export default Categories;


