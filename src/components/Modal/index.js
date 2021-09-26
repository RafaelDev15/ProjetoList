import React from 'react';
import './modal.css';
import {FiX} from 'react-icons/fi';

export default function Modal() {
 return (
   <div className="container_bg">

       <div className="sub_container">
            <div className="icon_close">
                <button className="button">
                    <FiX color="#FFF" size={25} />
                </button>
            </div>
       </div>

   </div>
 );
}