import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Top from './pages/Top';
import Bottom from './pages/Bottom';
import NewArrival from './pages/NewArrival';
import Produk from './pages/Produk';
import CaraOrder from './pages/CaraOrder';
import ResiPengiriman from './pages/ResiPengiriman';
import Kontak from './pages/Kontak';
import KonfirmasiPembayaran from './pages/KonfirmasiPembayaran';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Bonta.com sample website</h1> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/top" component={Top}/>
            <Route path="/bottom" component={Bottom}/>
            <Route path="/new-arrival" component={NewArrival}/>
            <Route path="/produk" component={Produk}/>
            <Route path="/cara-order" component={CaraOrder}/>
            <Route path="/resi-pengiriman" component={ResiPengiriman}/>
            <Route path="/kontak" component={Kontak}/>
            <Route path="/konfirmasi-pembayaran" component={KonfirmasiPembayaran}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
