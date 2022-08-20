import "./Cart.css"
import { useCartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
import ItemCart from "../ItemCart/ItemCart"

export default function Cart() {
  const {cart , totalPrice}= useCartContext();
    if (cart.length === 0){
      return(
        <>
        <div className="cart">
          <span className="carrito">No hay Productos en el Carrito!!!..</span>
          <Link to='/'><Button variant="info">Seleccionar Productos</Button></Link>
          </div>
        </>
      )
    }

    return(
       <>
       <div className="cart">
       <span className="carrito">Carrito</span>
       { cart.map(product=><ItemCart key={product.id} product={product}/>)
       }
       
       <span className="carrito"> TOTAL : ${totalPrice()} </span>
       <Link to='/'><Button variant="info">Seleccionar Productos</Button></Link>
       </div>
       </>
    )
    
}