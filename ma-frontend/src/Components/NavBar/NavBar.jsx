import React, { Component } from 'react';
import './NavBar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Logo from '../../Images/Logo.png';


function NavBar() {
    return (
        <nav className='navbar'>
            <a href='/'><img className='navbar-logo' src={Logo} alt='logo' /></a>
            <form>
                <input className='navbar-input' type='text' name='search' placeholder='Search for other brave members using their usernames!' />
                <button className='navbar-btn navbar-search' type='submit'><AiOutlineSearch /></button>
            </form>
            <div className='navbar-btn-group'>
                <button className='navbar-btn' href='/signup'>SIGN UP</button>
                <button className='navbar-btn' href='/login'>LOG IN</button>
            </div>
        </nav>
        // <Navbar color='dark'>
        //     <NavbarBrand className='left-padding' href="/">
        //         <img alt="Modern Achivements" src={Logo} style={{height: "50px", width: "50px"}} />
        //     </NavbarBrand>
            
        //     <Form className='space'>
        //         <Row className='no-gutter'>
        //             <Col className='selector'><FormGroup>
        //                 <Input className='no-border' type="select" name="search-selection">
        //                     <option>Users</option>
        //                     <option>Games</option>
        //                 </Input>
        //             </FormGroup></Col>
        //             <Col className='no-gutter2'><FormGroup>
        //                 <Input className='no-border' type="text" name="search-term" placeholder="Search..." />
        //             </FormGroup></Col>
        //             <Col className='no-gutter2'><Button className='btn-purple'><AiOutlineSearch /></Button></Col>
        //         </Row>
        //     </Form>

        //     <ButtonGroup className='right-padding'>
        //         <Button href='/signup' color="primary" className='btn-login'>SIGN UP</Button>
        //         <Button href='/login' color="primary" className='btn-login'>LOG IN</Button>
        //     </ButtonGroup>
        // </Navbar>
    );
}

export default NavBar;
