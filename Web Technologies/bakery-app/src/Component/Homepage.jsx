import React, { useState } from 'react'
import database from './database'
import meatfoodsdata from './meatfoodsdata';
import vegiefoodsdata from './vegiefoodsdata';
import HomeCover from "./HomeCover";
import Footer from './Footer';


function Homepage(props) {
  const {itemDetail, setItemDetail ,setCartDisplay} = props;
  const [data,setData] = useState(database)
  return (
    <>
      <HomeCover setCartDisplay={setCartDisplay}/>
    <div className='homepage'>
      <p className='title'>The Menu</p>
      <div className='home-btns'>
  
      <button className='btn' onClick={()=>setData(meatfoodsdata)}>Meat Foods</button>
      <button className='btn' onClick={()=>setData(database)}>Whole Menu</button>
      <button className='btn' onClick={()=>setData(vegiefoodsdata)}>Veggies Foods</button>
      </div>
    <div className='menupage'>
      {data.map((item)=>(
        <div key={item.id} className='card' onClick={()=>{setItemDetail(item); console.log(itemDetail)}}>
            <img src={item.picture} width={300} className='menuimage'/>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
        </div>
      ))}
    </div>
    <div className='feedback'>
      <h2>Feedback</h2>
      <form>
      <input type='radio' />
      <input type='radio'/>
      <input type='radio' />
      <input type='radio' />
      <input type='radio'/><br/>
      <input type='text' placeholder='Add Comment' style={{height:'80px', width:'300px', padding:'10px'}}/><br/>
      <input type='checkbox'/> Subscribe to News Letter<br/>
      <input type='submit'/>
      </form>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default React.memo(Homepage)
