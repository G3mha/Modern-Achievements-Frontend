import React, { Component } from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Navbar, NavbarBrand, Button, Form, FormGroup, Input, ButtonGroup } from 'reactstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import Logo from '../Images/Logo.png';


const LogoStyle = {
    height: "50px",
    width: "50px"
};

class NavBar extends Component {
    render() {
        return (
            <Navbar color='dark'>
                <NavbarBrand href="/">
                    <img alt="Modern Achivements" src={Logo} style={LogoStyle} />
                </NavbarBrand>
                
                <Form className='space'>
                    <Row className='no-gutter'>
                        <Col className='selector'><FormGroup>
                            <Input className='no-border' type="select" name="search-selection">
                                <option>Users</option>
                                <option>Games</option>
                            </Input>
                        </FormGroup></Col>
                        <Col className='no-gutter2'><FormGroup>
                            <Input className='no-border' type="text" name="search-term" placeholder="Search..." />
                        </FormGroup></Col>
                        <Col className='no-gutter2'><Button className='btn-purple'><AiOutlineSearch /></Button></Col>
                    </Row>
                </Form>

                <ButtonGroup>
                    <Button outline color="primary" className='btn-login'>SIGN UP</Button>
                    <Button color="primary" className='btn-login'>SIGN IN</Button>
                </ButtonGroup>

            </Navbar>
        );
    }
};

export default NavBar;
