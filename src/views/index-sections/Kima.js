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
  import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
  import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
export default function Kima() {
    return (
        <div style={{paddingTop:100}}>
            <Container>
            <Row style={{fontSize:50,color:"#FAA918"}} >
               <Col className="text-right" >   قيمنا  </Col>
                   
             </Row>

             <Row style={{fontSize:30,marginTop:29, textAlign:"right"}}>
                     <Col> الحرفية  والامتياز  <AssignmentTurnedInIcon sx={{ fontSize: 50 , fontFamily:"Samir"}}/></Col>
                     <Col> &nbsp; السرعة في الإنجاز مع احترام الاجال &nbsp;<AccessTimeFilledIcon sx={{ fontSize: 50 }}/> </Col> 
                  

                   </Row> 
         </Container>
        </div>
    )
}
