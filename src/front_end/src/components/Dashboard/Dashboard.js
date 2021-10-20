import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fernet from 'fernet';
import {Button, CardGroup, Row, Col} from "react-bootstrap";
import {React, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import DashboardCard from "./DashboardCard/DashboardCard";

function Dashboard(props) {
  const history = useHistory();
  const [name, setName] = useState(null);
  useEffect(() => {
    if (props.DataToken) {
      console.log(props.DataToken)
      var secret = new fernet.Secret(props.Token);
      var tokenss = new fernet.Token({
        secret: secret,
        token: props.DataToken,
        ttl: 0
        })
      const data = JSON.parse(tokenss.decode());
      console.log(data.name);
      setName(String(data.name));
    }
   }, []);
  if(props.Token){
    return (
      <div className="Dashboard">
          {name != null &&
          name}
          <Row xs={1} md={2} className="g-4">
              <Col>
              <DashboardCard Title="Your Balance" Text="Your Balance is:" TextSecond="1000SGD"/>
              <DashboardCard Title="Your Balance" Text="Your Balance is:" TextSecond="1000SGD"/>
              <DashboardCard Title="Your Balance" Text="Your Balance is:" TextSecond="1000SGD"/>
              </Col>
  
              <Col>
              <DashboardCard Title="Your Balance" Text="Your Balance is:" TextSecond="1000SGD"/>
              <DashboardCard Title="Your Balance" Text="Your Balance is:" TextSecond="1000SGD"/>
              <DashboardCard Title="Your Balance" Text="Your Balance is:" TextSecond="1000SGD"/>
              </Col>
          </Row>
      </div>
    );
  }
  else{
    history.push('/');
    window.location.reload();
  }
}

export default Dashboard;
