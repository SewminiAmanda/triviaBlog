import React, { useEffect, useState } from 'react'
import './Shopping.css'
import { Link } from 'react-router-dom'
import { Search } from '../../Component/Search/Search'
import Shopcard from './Shopcard'

export const Shopping = () => {

  



  return (
    <div className='shopmain'>
      
      <div className='shopup'>
      <div className='shopsearch'>
      <Search/>
      </div>
      
      
      <div className='postbutton'>
        <Link to={'/Shoppingpost'}><button>Create Ad</button></Link>
      </div>
      </div>
      <div className='postsection'>
       <Link to={'/productdescription'}> <Shopcard/></Link>
       <Link to={'/productdescription'}> <Shopcard/></Link>
       <Link to={'/productdescription'}> <Shopcard/></Link>
       <Link to={'/productdescription'}> <Shopcard/></Link>

       <Link to={'/productdescription'}> <Shopcard/></Link>

       <Link to={'/productdescription'}> <Shopcard/></Link>

        
      </div>
      
</div>
  )
}
