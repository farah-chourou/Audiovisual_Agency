
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import logo from "assets/img/2.png";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { HashLink } from 'react-router-hash-link';


function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
      const ref = React.useRef(null);
  



  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (       
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
         

      <Container>
        <div className="navbar-translate">
          
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
           <img src={logo} width="47%"/>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
           {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
           </NavItem>*/}
        
            <NavItem>
              <HashLink smooth to ='#presentation'> 
              <NavLink target="_blank" >
                Notre agence
              </NavLink>
              </HashLink>
            </NavItem> <NavItem>

            <HashLink smooth to="#service">
              <NavLink target="_blank" >
                Nos services
              </NavLink>
               </HashLink>

            </NavItem>
            <NavItem>
              <HashLink smooth to="#realisation"> 
              <NavLink
                target="_blank"
              >
                Nos réalisaions
              </NavLink>
              </HashLink>
            </NavItem>
            <NavItem>
              <HashLink smooth to ="#contact">
              <Button
                className="btn-round"
                color="#FAA918"
                style={{backgroundColor:"#FAA918",borderColor:"#FAA918"}}
                target="_blank"
              >
               Contacter-nous
              </Button>
              </HashLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
