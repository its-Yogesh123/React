import {Card,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItems } from '../redux/slices/cartSlice';

export const ProductCard= (props)=>{
  const dispatch = useDispatch();
  return (
    <Card style={{margin:"5px"}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Body>${props.price}</Card.Body>
        <Button onClick={(e)=>dispatch(addItems({name:props.name,price:props.price}))} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}