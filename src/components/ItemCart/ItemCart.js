import React from 'react'
import { useCartContext } from '../Context/CartContext'
import './ItemCart.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCart=({product})=>{
    const { removeProduct }= useCartContext();
    return(
        <div className="tarjet">
          <Card style={{ width: '28rem' }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            Cantidad: {product.quantity}
            </Card.Text>
            <Card.Text>
            Precio: ${product.price}
            </Card.Text>
            <Card.Text>
            Subtotal: ${product.quantity * product.price}
            </Card.Text>
            <Button onClick={()=> removeProduct(product.id)}>Eliminar</Button>
          </Card.Body>
        </Card></div>
    )
}
export default ItemCart;