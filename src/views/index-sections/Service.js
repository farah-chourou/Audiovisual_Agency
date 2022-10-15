
import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";
  

  import VideocamIcon from '@mui/icons-material/Videocam';
  import TvIcon from '@mui/icons-material/Tv';
  import MovieIcon from '@mui/icons-material/Movie';
  import RadioIcon from '@mui/icons-material/Radio';
  import AssignmentIcon from '@mui/icons-material/Assignment';
function Service() {
    return (
        <div style={{paddingTop:150 ,color:"rgb(45, 45, 45)"}} id="service">
            <Container>
                 <Row style={{fontSize:50,color:"#FAA918"}} >
               <Col className="text-right" >   بعض الخدمات التي نقدمها لكم </Col>
                   
                 </Row>
                  <Row style={{fontSize:30,marginTop:29, textAlign:"right"}}>
                     <Col> أشرطة وثائقية  <VideocamIcon sx={{ fontSize: 50 , fontFamily:"Samir"}}/></Col>
                     <Col> &nbsp;   برامج تلفزيونية <TvIcon sx={{ fontSize: 50 }}/> </Col> 
                     <Col>   برامج إذاعية <RadioIcon sx={{ fontSize: 50 }} /></Col>
                   
                     <Col>  تقارير اخبارية <AssignmentIcon sx={{ fontSize: 50 }} /></Col>
                     
                   </Row> 
            </Container>
        </div>
    )
}

export default Service
