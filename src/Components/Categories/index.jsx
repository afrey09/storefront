import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../store/categories.js';
// step 1: import the action


const Categories = ({ categories, set }) => {
 
  const { store } = useSelector((state) => state);
  const dispatchEvent = useDispatch();


  const handleChange = (category) => {
    dispatchEvent(set(category));
  }
  return (
    <>
      <h2>Browse Our Categories</h2>
      
          {
            categories.map((category, idx) => (
              <article key={`categories-${idx}`}>
                <h5>{category.displayName} has {category.description}</h5>
              <Button
                color="primary"
                variant="contained"
                onClick={() => handleChange(category)}
              > 
              </Button>
          
              </article>
            ))
          }
    </>
  )
};

export default Categories;
