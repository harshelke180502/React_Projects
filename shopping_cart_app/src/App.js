import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import './App.css'
import Cart from './components/Cart'

const App = () => {

  const[cart,setCart]=useState([]);
  const[warning,setwarning]=useState(false);
  const[show,setShow]=useState(true);

  const handleClick=(item)=>{
    let isPresent=false;
    cart.forEach((product)=>{
      if(item.id===product.id)
        isPresent=true;
    })
    if(isPresent){
      setwarning(true);
      setTimeout(()=>{
        setwarning(false)
      },2000);
      return
    }

    setCart([...cart,item])
    
  }

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>{
        show?  <Shop handleClick={handleClick}/>: 
        <Cart cart={cart} setCart={setCart}/>
      }
     

      {
        warning && <div className='warning'>
          Item is already present in your cart.
          </div>
      }
    </div>
  )
}

export default App
