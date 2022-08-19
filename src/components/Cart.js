import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

const Cart = ({cart, products}) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach( item => {
      items += item.qty;
      price += item.price * item.qty

    });

    setTotalPrice(price)
    setTotalItems(items)

  },[cart, totalPrice, setTotalPrice, totalItems, setTotalItems])



  return (
    <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      
        {
          cart.map(item=> <CartItem key={item.id} itemData={item} prod={products}/>)
        }
        
        <div
                        class="bg-white py-4 px-4 shadow-md rounded-lg my-2 mx-4"
                        >  
                        <div
                            class="flex justify-center items-center text-center"
                        >
                            <div class="text-xl font-semibold">
                                <p>Total Item</p>
                                <p class="text-5xl">{totalItems}</p>
                            </div>
                        </div>
                      </div>
                        <div
                        class="bg-white py-4 px-4 shadow-md rounded-lg  mx-4"
                        >
                        <div
                            class="flex justify-center items-center text-center"
                        >
                            <div class="text-xl font-semibold">
                                <p>Total Price</p>
                                <p class="text-5xl">Tk {totalPrice}</p>
                            </div>
                        </div>
                    </div>
   

    </div>
  )
}

const mapStateToProps=state=>{
  return {
    cart:state.cart,
    products:state.products
  }
}

export default connect(mapStateToProps)(Cart)