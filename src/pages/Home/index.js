import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import './style.css';
import { Table } from 'reactstrap';
import Modal from '../../components/Modal';

import api from '../../service/api';
import {AiOutlineFileSearch} from 'react-icons/ai';
import {FiEdit2, FiTrash2} from 'react-icons/fi';

export default function Home() {

  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);

  useState(() => {

      async function loadDados(){
        const response = await api.get('/allProducts');
        setList(response.data);
      }

      loadDados();
  
  }, []);

  //Modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setModal(!modal);
      }
    
      function closeModal() {
        setIsOpen(false);
      }

 return (
   <div>
     <Header/>
      <div className="container_table">
        <Table bordered>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Produto</th>
            <th>Estoque</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
              <tr key={index}>
                <th scope="row"> {item.code} </th>
                <td> {item.product} </td>
                <td>Otto</td>
                <td className="icons_table">
                   <AiOutlineFileSearch onClick={openModal} color="#000" size={20} />
                   <FiEdit2 color="#000" size={20} />
                   <FiTrash2 color="#000" size={20} />
                </td> 
              </tr>
          ))}
        </tbody>
      </Table>
      </div>
      {modal ? (
        <Modal />
      ): <></>}
    </div>
 );
}