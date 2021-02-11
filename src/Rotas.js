import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';

//importação comum
//import Produtos from './Pages/Produtos'
//import Pedidos from './Pages/Pedidos'
//import Home from './Pages/Home';

import Loading from './img/Loading.png'
// 3 imports com lazy
const Produtos = lazy(() => import('./Pages/Produtos'))
const Contatos = lazy(() => import('./Pages/Contatos'))
const Home = lazy(() => import('./Pages/Home'))

function Rotas() {
    return(
        <Suspense className="mx-auto" fallback={<img src={Loading} />}>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route  path="/produtos" component={ Produtos } />
                <Route  path="/contato" component={ Contatos } />              
            </Switch>
        </Suspense>
    )
}

export default Rotas;
