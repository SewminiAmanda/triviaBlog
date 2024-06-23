import React from 'react'
import './Sensors.css'

import Sidebar from '../Sidebar';
import Resourcepost from './Resourcepost';
 

export const Sensors = () => {
  return (
    <div className='sensorsCollect'>
        <Sidebar/>
      <div className="content-container">
        <h1 className = "resoTitle">SENSORS</h1>
        <div className="res-posts-container">
                <Resourcepost/>
                <Resourcepost/>
                <Resourcepost/>
                <Resourcepost/>
                <Resourcepost/>
                <Resourcepost/>
                <Resourcepost/>
        </div>
          
      </div>
   </div>
  
  )
}