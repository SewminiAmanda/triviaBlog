import React from 'react'
import './Search.css'
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";


export const Search = () => {
  return (
    <div className="search">
      <input type="text" className="searchBar" placeholder="Search for more.." />   
      <CIcon
            icon={icon.cilSearch}
            size=""
            style={{ "--ci-primary-color": "black" }}
            className="searchIcon"
          />     
    </div>
  )
}
