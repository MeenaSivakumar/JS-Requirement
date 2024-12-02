import { useEffect, useState } from "react";
import { Card,Button} from "react-bootstrap";

export const StockList = () => {
  const [stockLists, setStock] = useState([]);

  const fetchStockList = async () => {
    setStock([
      {
        id: 1,
        symbol: "TSLA",
        companyName: "IBM",
        currentPrice: 500000,
      },
      {
        id: 2,
        symbol: "AAPL",
        companyName: "HDLC",
        currentPrice: 400000,
      },
      {
        id: 3,
        symbol: "TSLA",
        companyName: "TCS",
        currentPrice: 5000000,
      },
    ]);
  };

  useEffect(() => {
    fetchStockList();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Stock List</Card.Title>
          
      
          <Card.Text>
            {stockLists.map((stockList) => (
              <div key={stockList.id}>
                <div className="d-flex justify-content-between">
                  <div> { stockList.symbol}</div>
                  <div>{stockList.companyName}</div>
                  <div>{stockList.currentPrice}</div>
                 <div><Button size="sm" variant="outline-primary">Trade</Button></div> 
                 <div> <Button size="sm" variant="outline-primary">  Details</Button>
                 <br></br>
                 <br></br>
                 </div>
                </div>
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
