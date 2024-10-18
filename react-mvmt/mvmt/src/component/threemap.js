import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
function Threemap(props) {
  return (
          <Card style={{height:"15rem",width:"18rem",marginLeft:"2rem",backgroundColor:"rgba(242,235,229,1);"}}>
            <Card.Img variant="top" src={`${props.p1}`} />
            <Card.Body
              style={{ backgroundColor: "rgba(121,104,91,1)", color: "white" }}
            >
              <Card.Title style={{ fontSize: "medium" }}>{props.p2}</Card.Title>
              <Card.Text style={{ fontFamily: "monospace", fontSize: "small" }}>
                {props.p3}
              </Card.Text>
            </Card.Body>
          </Card>
  );
}

function ThreemapII(props) {
    return (
            <Card style={{height:"15rem",width:"18rem",marginLeft:"2rem",backgroundColor:"rgba(242,235,229,1);"}}>
              <Card.Img variant="top" src={`${props.p1}`} />
              <Card.Body
                style={{ backgroundColor: "rgba(121,104,91,1)", color: "white" }}
              >
                <Card.Title style={{ fontSize: "medium" }}>{props.p2}</Card.Title>
                <Card.Text style={{ fontFamily: "monospace", fontSize: "small" }}>
                  {props.p3}
                </Card.Text>
              </Card.Body>
            </Card>
    );
  }
export {Threemap,ThreemapII};
