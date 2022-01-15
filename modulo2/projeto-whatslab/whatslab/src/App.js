import React, {useState} from 'react';
import './App.css';
import ChatListaItem from './components/ChatListaItem';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {


  const [chatLista, setChatLista] = useState([{},{},{}]);


  return (
    <div className='appJanela'>
      <div className='sidebar'>
        
        <header>
          <img className='avatarTopo'src='https://i.pravatar.cc/300' alt='imagem avatar'></img>
          <h1>Whatslab</h1>
          <div className='botoes-topo'>

            <div className='btn-topo'>
              <DonutLargeIcon style={{color: '#F27405'}} />
            </div>
            <div className='btn-topo'>
              <ChatIcon style={{color: '#F27405'}} />
            </div>
            <div className='btn-topo'>
              <MoreVertIcon style={{color: '#F27405'}} />
            </div>

          </div>
        </header>


        <div className='buscar'>
          <div className='buscar-input'>
            <SearchIcon style={{color: '#F27405'}} fontSize='small' />
            <input type="search" placeholder="Pesquisar ou começar uma nova conversa"></input>
          </div>
        </div>

        <div className='chatLista'>  
          {/* Chamar os componentes de chat */}
          {chatLista.map((item, key) =>
            <ChatListaItem
             key={key}
            />
          ))}
        </div>
      </div>
      <div className='conteudo'>
        conteudo
      </div>
    </div>
  );
}