import React from 'react'
import { connect, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions'

const Product = ({productData, addToCart}) => {
    const items = useSelector((state)=>state.cart)
    const item = items?.find(item=>item?.id===productData.id)
    const count  = item? productData.qty-item.qty : productData.qty
    console.log(count);
  return (
    <div
                        class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div class="flex justify-between px-4 items-center">
                            <div class="text-lg font-semibold">
                                <p>{productData.name} ({count})</p>
                                <p class="text-gray-400 text-base">Tk {productData.price}</p>
                            </div>
                            <div class="text-lg font-semibold">
                                <button disabled={count===0 ? true: false}  onClick={()=>addToCart(productData.id)}
                                    class="disable focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addToCart: (id)=> dispatch(addToCart(id))
  }
}

export default connect(null, mapDispatchToProps)(Product)
