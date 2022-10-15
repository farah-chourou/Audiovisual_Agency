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

 import { Markup } from 'interweave';

 import parse from 'html-react-parser';
 import fond from "assets/img/fond.jpg";

export default function Realisation() {
 const [state, setstate] = React.useState(null);
 const data ='<iframe width="560" height="315" src="https://www.youtube.com/embed/73CgtyVZAo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';


    return (
        <div style={{paddingTop:120,paddingLeft:100,paddingRight:100}} id="realisation" >
           <Container> 
            <Row style={{fontSize:50,color:"#FAA918"}} >
               <Col className="text-right" >    اعمالنا</Col>
 </Row>
              {/*<div class="elfsight-app-4c15825a-9a4b-4640-a411-7a031c6607d5"></div> 

             
<div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
             */}


<div class="d-flex justify-content-center">
  <div class="">
      <img src={fond} width="550" height="30" style={{ position:"relative", left:"",top:"31px", zIndex:"500"}}></img>
</div>
</div>
              
<> 
        
       <ul class="juicer-feed" data-feed-id="uciam8no808hgbid5nwhjv-q"><h1 class="referral"><a href="https://www.juicer.io">Powered by Juicer.io</a></h1></ul> 
                
                
              {/*parse("<iframe width='560' height='315' src='https://www.youtube.com/embed/IB9mBu-1Z1I' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")*/ } 

                     
                      </>
                 </Container>
{/*<div class="elfsight-app-aa2893d6-5e16-4cfb-bb2f-1764b9f89678"></div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLHmWy6ypSaUP7kfscMEFOcrDzFljtNbSS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    */}


</div>    )
}
