import React, { useState } from 'react';
import './Shoppingpost.css';
import { Link } from 'react-router-dom';

//import axios from 'axios'; // corrected import statement for Axios
//import Productdescription from './Productdescription';

export const Shoppingpost = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');

  
  


  

  return ( 
    <div className='adpost'>
      <h1>Create your advertisement</h1>
      <div className='shopbody'>
        <form className='shoppingform' method='post'  >
          <div className='restrict'>
            <p>This website or the company will not be responsible for the business users do using this website.
            Users are strictly advised not to publish any advertisements that are not convenient for this website.
            Users must only add advertisements related to electronic and IoT topics. After selling your goods be kind enough to 
            remove the advertisements.</p>
            <input type='checkbox' name='agree' id='' className='agree'/> I agree
          </div>
          <table className='shoptable'>
            <tbody>
              <tr className='shoprow'>
                <th>Component Name</th>
                <td><input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder=' Enter the component name with correct spellings' /></td>
              </tr>
              <tr className='shoprow'>
                <th>Description</th>
                <td><textarea name='description' value={description} onChange={(e) => setDescription(e.target.value)} cols={50} rows={18} placeholder='  Write a description about the component you wish to sell.Include all the necessary details including any constraints'  /></td>
              </tr>
              <tr className='shoprow'>
                <th>Price</th>
                <td><input type='text' name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder=' Enter the price in Sri Lankan currency' /></td>
              </tr>
              <tr className='shoprow'>
                <th>Contact Number</th>
                <td><input type='text' name='contact' value={contact} onChange={(e) => setContact(e.target.value)} placeholder=' Enter a contact number containing 10 digits' /></td>
              </tr>
              <tr className='shoprow'>
                <th>Add a photo</th>
                <td><input type='file' /></td>
              </tr>
            </tbody>
          </table>
          <Link to={'/shopping'}><button className='shopbutton' type='submit'>Add</button></Link>
        </form>
        <div className='shopadver'>
          <h3>See your Post</h3>
          <p>Component Name: {name}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Contact: {contact}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Shoppingpost;
