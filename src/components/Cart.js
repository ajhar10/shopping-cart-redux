import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

const Cart = ({cart}) => {
  return (
    <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      
        {
          cart.map(item=> <CartItem key={item.id} itemData={item}/>)
        }
        
        <div
                        class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                        >  
                        <div
                            class="flex justify-center items-center text-center"
                        >
                            <div class="text-xl font-semibold">
                                <p>Total Item</p>
                                <p class="text-5xl">0</p>
                            </div>
                        </div>
                      </div>
                        <div
                        class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                        >
                        <div
                            class="flex justify-center items-center text-center"
                        >
                            <div class="text-xl font-semibold">
                                <p>Total Price</p>
                                <p class="text-5xl">0</p>
                            </div>
                        </div>
                    </div>
   

    </div>
  )
}

const mapStateToProps=state=>{
  return {
    cart:state.cart
  }
}

export default connect(mapStateToProps)(Cart)