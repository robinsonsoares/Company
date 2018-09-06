import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom'

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Portfolio from './componentes/Portfolio'
import Precos from './componentes/Precos'
import Contatos from './componentes/Contatos'

//Area Administrativa
import Admin from './admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Cabecalho />

        <Route path='/' exact component={Inicio}/>
        <Route path='/servicos' component={Servicos}/>
        <Route path='/Portfolio' component={Portfolio}/>
        <Route path='/Precos' component={Precos}/>
        <Route path='/Contatos' component={Contatos}/>
        
        <Route path='/admin' component={Admin}/>
        <Rodape/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
