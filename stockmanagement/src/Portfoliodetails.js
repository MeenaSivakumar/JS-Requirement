import { Card } from "react-bootstrap";
export const PortfolioDetails = ()=>{
    return (<div>
        <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Portfolio Details</Card.Title>
          
          <div>Stock symbol: AAPL</div>
          <div>Quantity:</div>
          <div>Currnt Value:</div>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>)
}