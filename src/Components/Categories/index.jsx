import { Button, ButtonGroup } from '@mui/material';
import { connect } from 'react-redux';
// step 1: import the action
import { set } from '../../store/reducer';

const Categories = ({ categories, set }) => {
 
  return (
    <>
      <h2>Browse Our Categories</h2>
      {
        <ButtonGroup variant="text" aria-label="category text button group">
          {
            categories.map((category, idx) => (
              <Button
                key={`categories-${idx}`}
                color="primary"
                variant="contained"
                onClick={() => set(category)}
              >
                {category.displayName}
              </Button>
            ))
          }
        </ButtonGroup>
      }
    </>
  )
};

//manage redux state and inject into props
//the object is the entire store

const mapStateToProps = ({ store }) => {
  return {
    categories: store.categories,
  }
}

//dispatch is the function that sends the action to the reducer
//inject the imported actions into the proper chain
const mapDispatchToProps = {
  set,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
