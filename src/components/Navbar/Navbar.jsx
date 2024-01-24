import { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [bars, setBars] = useState()
  let input = document.getElementById("menu-bar")
  const checkbtn = () => {
    if (input.checked == true) {
      setBars(0)
     input.checked = false
    }
  }
  const hideBars = () => {
    let input = document.getElementById("menu-bar")
 
    if (input.checked) {
      console.log("hello")
      setBars(0)
      console.log(bars)
      input.checked = false
    }
     else if(input.checked == false)  {
    
    console.log(bars + "this is for the else")
    }

  }
  return (
    <div className='navbar'>
      <div className="logo-header">
        <h1>Portfolio</h1>
      </div>
      
        <input type="checkbox" id='menu-bar' onClick={() => (checkbtn())} />
        <div>
        <label htmlFor="menu-bar" className='menu-icon'>
          <FaBars />
        </label>
        </div>
    
      <div className="list">
        <ul style={{left: bars}} > 
          
        <li> <a href='#home' onClick={()=> (hideBars(), setBars(`${-100}%`))} style={{textDecoration: "none", color: "white" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}}>Home</a> </li>
        <li> <a href='#about' onClick={()=> (hideBars(), setBars(`${-100}%`))} style={{textDecoration: "none", color: "white" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} >About</a> </li>
        <li> <a href='#service' onClick={()=> (hideBars(), setBars(`${-100}%`))} style={{textDecoration: "none", color: "white" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} >Service</a> </li>
        <li> <a href='#skills' onClick={()=> (hideBars(), setBars(`${-100}%`))} style={{textDecoration: "none", color: "white" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} >Skills</a> </li>
        <li> <a href='#project'  onClick={()=> (hideBars(), setBars(`${-100}%`))} style={{textDecoration: "none", color: "white" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} >Projects</a> </li>
        <li> <a href='#contact'  onClick={()=> (hideBars(), setBars(`${-100}%`))} style={{textDecoration: "none", color: "white" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} >Contact</a> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
