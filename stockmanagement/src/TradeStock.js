import { Card,Button,Form } from "react-bootstrap";
import { useState } from "react";
export const TradeStock = (props)=>{
    
        const [amount, setBalance] = useState(0);
        const [tradeType, setType] = useState();
      
        const handleChange = (value) => {
          console.log(value);
          if (value > 0) {
            setBalance(value);
          }
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (tradeType === "Buy" && props.balance >= amount) {
            props.updateBalance(props.balance - amount);
          } else if (tradeType === "Sell") {
            props.updateBalance(props.balance + amount);
          } else {
            alert("Insufficient balance");
          }
        };
    
      
        return (
            <div className="d-flex justify-content-center p-5">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <Form.Label htmlFor="inputPassword5">Symbol</Form.Label>
                       
                      </div>
                      <div>
                        <Form.Label htmlFor="inputPassword5">Quantity</Form.Label>
                        <div>{props.stockCount}</div>
                      </div>
                     
                      <div>
                        <Form.Label htmlFor="inputPassword5">Type</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          value={tradeType}
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option>Please Select</option>
                          <option value="Buy">Buy</option>
                          <option value="Sell">Sell</option>
                        </Form.Select>
                      </div>
                      <div className="mt-4">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
    }