import React from 'react'
import {Container,Col,Row} from 'reactstrap';
import prod from "assets/img/12.png";

export default function Presentation() {
    return (
        <div style={{paddingTop:120, fontSize:35}} id="presentation">
 <Container>
  <Row>
  <Col sm={4}>
    <img src={prod} width="90%" />
    </Col>
    <Col sm={8} style={{textAlign:"right"}}> 
     <b style={{fontSize:50,color:"#FAA918", paddingBottom:"30 px"}}> من نحن ؟  </b> <br></br>
       <p style={{fontSize:30}}> نحن شركة.  <b>عربية </b>   للإنتاج السمعي البصري لسنا وحدنا في المجال ولكن نعمل على تقديم الإضافة وتحقيق التميز</p> 
    
    </Col>
       
  
  </Row>
  </Container>
       

        </div>
    )
}
