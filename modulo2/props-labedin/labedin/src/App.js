import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/46974068?v=4" 
          nome="Pedro Acciainli" 
          descricao="Hi, I'm Pedro Acciainoli! :)"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
          label="E-mail:"
          alt="imagem de e-mail" 
          descricao="SUPORTE: Especialização em correção de problemas de infraestrutura, dentre eles configurações de estações de trabalho e servidores." 
        />
        
        <CardPequeno 
          imagem="https://i.pinimg.com/474x/cf/00/e9/cf00e9dbd04b0619b8a3b0a8bf9f7051.jpg" 
          label="Endereço:"
          alt="imagem de icone endereço"
          descricao="Responsável pela implantação do ERP (DeltaSi) da empresa, implantação de novos módulos, treinamento e suporte." 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://www.mcpbrasil.com.br/wp-content/uploads/2020/08/Suporte-tecnico-em-TI.jpg" 
          nome="Serviços de TI" 
          descricao="SUPORTE: Especialização em correção de problemas de infraestrutura, dentre eles configurações de estações de trabalho e servidores." 
        />
        
        <CardGrande 
          imagem="https://icon-library.com/images/erp-system-icon/erp-system-icon-7.jpg" 
          nome="ERP" 
          descricao="Responsável pela implantação do ERP (DeltaSi) da empresa, implantação de novos módulos, treinamento e suporte." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
