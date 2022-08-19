import React from 'react'
import Product  from './Product'
import { connect } from 'react-redux'

const Products = ({products}) => {
  return (
    <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
     
      {
        products.map(prod=><Product key={prod.id} productData={prod}/>)
      }

    </div>
  )
}

const mapStateToProps = state =>{
  return {
    products:state.products
  }
}


export default connect(mapStateToProps)(Products)