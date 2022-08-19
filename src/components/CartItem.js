import React from 'react'
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/actions';

const CartItem = ({itemData, increment, decrement, products}) => {
  return (
    <div class="bg-white  px-4 shadow-md rounded-lg mx-4">
        <div class="flex justify-between border-b-2 ">
                            <div class="text-lg py-2">
                                <p>{itemData.name}</p>
                            </div>
                            <div class="text-lg py-2">
                                <div
                                    class="flex flex-row space-x-2 w-full items-center rounded-lg"
                                >
                                    <button onClick={()=>decrement(itemData.id)}
                                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M18 12H6"
                                            />
                                        </svg>
                                    </button>
                                    <p>{itemData.qty}</p>
                                    
                                    <button
                                    onClick={()=>increment(itemData.id)}
                                        class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
      increment: (id) => dispatch(increment(id)),
      decrement: (id) => dispatch(decrement(id)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(CartItem);