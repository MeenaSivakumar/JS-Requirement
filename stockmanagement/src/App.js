
import { useState } from 'react';
import './App.css';
import { PortfolioDetails } from './Portfoliodetails';
import { PortfolioSummary } from './Portfoliosummary';
import { StockList } from './StockList';
import { TradeStock } from './TradeStock';
import {Navbar,Container} from 'react-bootstrap';

function App() {
  const[summaryDetails,setsummary] = useState({
    totalPortfolioValue: 4000000,
    noOfStockOwned:8,
    cashBalance:300000,

  });
  return (
    <div className="App">
    <Navbar style={{backgroundColor:'blue',color:'white'}} variant='dark' >
    <Container className='d-flex justify-content-center'>
      <Navbar.Brand href="#home">Stock Market Tracker</Navbar.Brand>
    </Container>
   </Navbar>

    <PortfolioSummary summary ={summaryDetails}/>
    <PortfolioDetails/>
    <StockList/>
    <TradeStock/>
    
    </div>
  );
}

export default App;
