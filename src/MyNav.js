import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Media,
  Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import { FaEnvelope, FaLinkedinSquare, FaTwitter, FaGithub } from 'react-icons/lib/fa';




class MyNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar color="white" expand>
        <NavbarToggler right="true" onClick={this.toggle} />
        <NavbarBrand href="/"><Media object src="cliffconsulting_logo.gif" />Matt Cliff</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/resume">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/articles">Articles</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="mailto://matt@denvercliffs.com" title="matt@denvercliffs.com">
        <FaEnvelope /></NavLink>
        </NavItem>

        <NavItem><NavLink href="https://www.linkedin.com/in/matt-cliff-45a75b6/" target="_blank" title="Linked In" >
        <FaLinkedinSquare /></NavLink></NavItem>

        <NavItem><NavLink href="https://twitter.com/themattcliff" target="_blank" title="Twitter" >
        <FaTwitter /></NavLink></NavItem>

        <NavItem><NavLink href="https://github.com/mcliff1" target="_blank" title="GitHub" >
        <FaGithub /></NavLink></NavItem>

        </Nav>
        </Collapse>
      </Navbar>

      </div>


    );
  }
}

export default MyNav;
