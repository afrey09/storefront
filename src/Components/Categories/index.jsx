import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categories';

const Categories = ({ categories, changeCategory }) => {
  console.log ({categories}); 
  console.log({changeCategory });
  return (
    <>
    <h1>Categories</h1>
    {
      categories.map((category, idx) => (
        <Button key={idx}
        color="primary"
        variant="contained"
        onClick={() => changeCategory(category.name)}>{category.name}</Button>
      ))
    }
    </>
  )
};

//manage redux state and inject into props
//the object is the entire store
const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
  }
}

//dispatch is the function that sends the action to the reducer
//inject the imported actions into the proper chain
const mapDispatchToProps = { changeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);