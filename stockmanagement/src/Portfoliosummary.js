import { Card } from "react-bootstrap";

export const PortfolioSummary = (props) => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <Card style={{ width: "18rem " }}>
        <Card.Header>Portfolio Summary</Card.Header>
        <Card.Body>
          <Card.Text>
            <h6>
              Total Portfolio Value:
              <strong>{props.summary.totalPortfolioValue}</strong>
            </h6>
            <h6>
              Stock Owned: <strong>{props.summary.noOfStockOwned}</strong>
            </h6>
            <h6>
              Cash Balance: <strong>{props.summary.cashBalance}</strong>
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
