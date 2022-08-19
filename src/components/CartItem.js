import React from 'react'

const CartItem = ({itemData}) => {
  return (
    <div class="bg-white  px-4 shadow-md rounded-lg mx-4">
        <div class="flex justify-between border-b-2 mb-2">
                            <div class="text-lg py-2">
                                <p>{itemData.name}</p>
                            </div>
                            <div class="text-lg py-2">
                                <div
                                    class="flex flex-row space-x-2 w-full items-center rounded-lg"
                                >
                                    <button
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

export default CartItem