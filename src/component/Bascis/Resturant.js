import React,{useState} from 'react'
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import { Category } from '@material-ui/icons';
import Navbar from './Navbar';

const uniqueList=["All",...new Set(Menu.map((curElem)=>{
   return curElem.category;
}))]


const Resturant = () => {
     
    
    const[menuData,setMenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);
    const filterItem=(category)=>{

        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((curElement)=>{
            return curElement.category==category;
        });
        setMenuData( updatedList);
    };
   
   

  return (
    <div>
       <Navbar filterItem={filterItem}  menuList={menuList}/>
        <MenuCard  menuData={menuData}/>
    </div>
  )
}

export default Resturant;