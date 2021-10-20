import './DashboardCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Card} from "react-bootstrap";
import {React, useState} from 'react';

function DashboardCard(props) {
  return (
    <div className="DashboardCard">
       <Card style={{ width: '18rem', margin:"10px", borderRadius: "10px"}}>
            <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                {props.Text}
                </Card.Text>
                <Card.Text style={{color:"cyan", fontSize:"40px"}}>
                {props.TextSecond}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}

export default DashboardCard;

