import * as React from 'react'
import { FaReact, FaRegAddressBook } from "react-icons/fa";

const navigation = {
   brand: { name: "NavbarScroller", to: "/" },
   
 }
const SideNav = (props:any)=>{
    
return (
   <div className="nav-container">
   <ul>
   <li >
      <a href="/"><FaReact/>
      </a>
      </li>
   <li >
      <a href="/developer"><FaRegAddressBook/>
      </a>
      </li>
      
   </ul>
 </div>
 );
};
export default SideNav;