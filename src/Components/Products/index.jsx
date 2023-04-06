import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/cart.js';

const Products = () => {
  const { products } = useSelector((state) => state);
  const { activeCategory } = useSelector((state) => state.categories)
  const dispatchEvent = useDispatch();

  return (
    <>
      {
        activeCategory && <h2>{activeCategory.displayName}</h2>
      }
      {
        activeCategory && <p>{activeCategory.description}</p>
      }

        {activeCategory && <Container maxWidth="md">
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.name} xs={12} sm={6} md={4}>
            <Card >
              <CardMedia
                component="img"
                image={`https://source.unsplash.com/random?${product.name}`}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography>
                  insert product.description
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => dispatchEvent(addProduct(product))}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>}
  </>
  )
};



export default Products;

