import React, {useState} from 'react';
import {Container, Logo, MenuMobile} from './style';
import './estilo.css';

import {Link} from 'react-router-dom';
import {FiMenu, FiAlignRight} from 'react-icons/fi';

export default function Header() {

        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);

        function handleCollapse(event){

          if(isOpen === false){
            document.getElementById("show").style.height = "80px";
            document.getElementById("list").style.display = "block";
            setIsOpen(true);
          }
          if(isOpen === true){
            document.getElementById("show").style.height = "0px";
            document.getElementById("list").style.display = "none";
            setIsOpen(false);
          }

        }

 return (
   <div>

      <header className="content">

        <div className="logo">
          <strong>Logo</strong>
        </div>

        <div onClick={handleCollapse} className="icon">
            {isOpen ? <FiAlignRight color="#FFF" size={30} /> : <FiMenu color="#FFF" size={30} /> }
        </div>
          
      </header>

      <div id="show" className="collapse_bar">

        <ul id="list" >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Novo registro</a>
          </li>
        </ul>

      </div>

    </div>
 );
}

