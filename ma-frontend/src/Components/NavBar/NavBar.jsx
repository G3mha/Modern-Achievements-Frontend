import React, { Component } from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Navbar, NavbarBrand, Button, Form, FormGroup, Input, ButtonGroup } from 'reactstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import Logo from '../../Images/Logo.png';


class NavBar extends Component {
    render() {
        return (
            <Navbar color='dark'>
                <NavbarBrand className='left-padding' href="/">
                    <img alt="Modern Achivements" src={Logo} style={{height: "50px", width: "50px"}} />
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

                <ButtonGroup className='right-padding'>
                    <Button href='/signup' color="primary" className='btn-login'>SIGN UP</Button>
                    <Button href='/login' color="primary" className='btn-login'>LOG IN</Button>
                </ButtonGroup>
            </Navbar>
        );
    }
}

export default NavBar;
