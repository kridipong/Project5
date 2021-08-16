import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import React, { useState,Fragment,useEffect, useContext} from 'react';
import Cart from './components/Cart/Cart';
import StatusContext from '../src/components/status-context';

function App() {

  const statusCtx = useContext(StatusContext);

  return (
    <Fragment>
      {statusCtx.showCart&&<Cart></Cart>}
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
