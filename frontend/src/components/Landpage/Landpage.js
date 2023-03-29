import React from 'react'
import {Link} from 'react-router-dom'
import './landpage.css'

function Landpage() {
  return (
    <div className="landpage">
      <img className='landimg' src={require("../../Images/lens.png")} alt="" />
      <div className="text">
        <h3 >10X Academy</h3>
        <Link to="/postview">
          <button className='landbtn'>Enter</button>
        </Link>
      </div>
    </div>
  );
}

export default Landpage
