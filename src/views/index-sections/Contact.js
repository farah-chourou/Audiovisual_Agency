import React,{useState} from 'react'
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
  import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
  import EmailIcon from '@mui/icons-material/Email';
  import fb from "assets/img/fb.png";
  import youtube from "assets/img/youtube.png";
  import Avatar from '@mui/material/Avatar';
  import RoomIcon from '@mui/icons-material/Room';
  import emailjs from 'emailjs-com';
  import NotificationAlert from "react-notification-alert";

function Contact() {

const [name, setname] = useState("");
const [prenom, setprenom] = useState("");
const [tel,settel]=useState("");
const [mail,setmail]=useState("");
const [message,setmessage]=useState("");

const notificationAlert = React.createRef();
const notify =(place) => {

  var options = {};
  options = {
    place: place,
    message: (
      <div className="text-left " style={{color:"white" , fontSize:17}}>
       
        <b> &nbsp; &nbsp;&nbsp;   Votre message a été envoyé avec succès  </b> <br></br>
        
      </div>
    ),
    type:  "warning",
    icon: "nc-icon nc-check-2",
    autoDismiss: 7,
  };
 notificationAlert.current.notificationAlert(options);

}




const sendMail = (e) =>{
e.preventDefault();
emailjs.sendForm('service_rvd8ccu','template_tl14had',e.target,'user_IrCwkshFmd9tbcvxmp0bW').then(res=>{
  console.log(res)
  if(res.text == "OK"){
    notify("br");
    setname("");
    setprenom("");
  setmail("");
settel("");
setmessage(""); 
 }

}).catch(err =>{ console.log(err)})
}

    return (
        <div id="contact" style={{paddingTop:30}}>
             <NotificationAlert ref={notificationAlert} />

             <div className="section landing-section" >
          <Container>
            <Row>
              <Col className="text-right pr-4">   
              <h2 className="text-right  pb-2">تابعنا على صفحاتنا</h2>
             <div >
               <img src={fb} width="13%"/>
             <a href="https://www.youtube.com/channel/UCXCTo2VPFYTzX1latNBetNQ">  <img src={youtube} width="10%"/></a> 
             </div><br></br>
             <br></br>
             <div className="text-right pb-2" style={{float:"right",fontSize:21}}>
             +216 98 252 965 :الهاتف الجوال
            <span style={{display:"inline-block"}} className="pl-2">   <Avatar style={{backgroundColor:"#FAA918" , height:45 , width:45,}} > <PhoneEnabledIcon/>  </Avatar> </span>  
             </div>

             <div className="text-right pb-2" style={{float:"right",fontSize:21}}>
             abderrazak.benali@outlook.com:البريد الالكتروني 
            <span style={{display:"inline-block"}} className="pl-2">   <Avatar style={{backgroundColor:"#FAA918" , height:45 , width:45,}} >  <EmailIcon/>  </Avatar> </span>  
             </div>
<br></br>
           

              </Col>
              <Col className="ml-auto" md="6">
                <h2 className="text-right">تواصل معنا عبر البريد الالكتروني</h2>
        
                <Form className="contact-form" style={{textAlign:"right"}} onSubmit={sendMail}>
                
                  <Row>

                    <Col md="6">
                      <label>Prénom (الاسم)</label>
                      <InputGroup>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <i className="nc-icon nc-single-02" />
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Nom" type="text" name="from_name" value={name} required onChange={e => setname(e.target.value)}/>
                 </InputGroup>
               </Col>
                   
                    <Col md="6">
                      <label> Nom(اللقب)</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                       <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Prénom" type="text" name="prenom" required value={prenom} required onChange={e => setprenom(e.target.value)} />
                      </InputGroup>
                    </Col>
                  </Row>


                                 <Row>
               
              
               <Col md="6">
                 <label>Email (البريد الالكتروني)</label>
                 <InputGroup>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <i className="nc-icon nc-email-85" />
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Email" type="email" name="user_email" required value={mail}  onChange={e => setmail(e.target.value)} />
                 </InputGroup>
               </Col>
               <Col md="6">
                 <label>Numéro téléphone (رقم الهاتف)</label>
                 <InputGroup>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText>
               <PhoneEnabledIcon/>
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Tel°" type="number" name="tel"  value={tel} required onChange={e => settel(e.target.value)}/>
                 </InputGroup>
               </Col>
               </Row>

                  <label>Message (رسالة)</label>
                  <Input
                    placeholder="Entrer votre message ici..."
                    type="textarea"
                    rows="4"
                    name="message"
                    value={message} required onChange={e => setmessage(e.target.value)}
                  />
                  <Row>
                    <Col className=" ml-auto" md="5">
                      <Button className="btn-fill" style={{backgroundColor:'#FAA918', borderColor:'#FAA918'}} size="lg">
                        Envoyer (إرسال)
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
    )
}

export default Contact
