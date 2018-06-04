import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Media as StrapMedia,
  Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Media from 'react-media';
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
      <Media query="(max-width: 600px)">
        {matches =>
          matches ? ( /* small screen nav */
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/"><StrapMedia object src="cliffconsulting_logo.gif" />Matt Cliff</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" nav>
        <NavItem>
          <NavLink to="/" tag={RRNavLink}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/resume" tag={RRNavLink}>Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects" tag={RRNavLink}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/articles" tag={RRNavLink}>Articles</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/contact" tag={RRNavLink}>Contact</NavLink>
        </NavItem>
        </Nav>
        </Collapse>
      </Navbar>

    ) : (    /* now begin large document nav */
      <Navbar color="white" className="nav" expand>
        <NavbarBrand href="/"><StrapMedia object src="cliffconsulting_logo.gif" />Matt Cliff</NavbarBrand>
        <Nav navbar>
        <NavItem>
          <NavLink to="/" tag={RRNavLink}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/resume" tag={RRNavLink}>Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects" tag={RRNavLink}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/articles" tag={RRNavLink}>Articles</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/contact" tag={RRNavLink}>Contact</NavLink>
        </NavItem>
        </Nav>

        <Nav className="ml-auto" navbar>

        <NavItem>
          <NavLink href="mailto://matt@denvercliffs.com" title="matt@denvercliffs.com">
        <FaEnvelope /></NavLink>
        </NavItem>

        <NavItem><NavLink href="https://www.linkedin.com/in/matt-cliff-45a75b6/" target="_blank" rel="noopener noreferrer" title="Linked In" >
        <FaLinkedinSquare /></NavLink></NavItem>

        <NavItem><NavLink href="https://twitter.com/themattcliff" target="_blank" rel="noopener noreferrer" title="Twitter" >
        <FaTwitter /></NavLink></NavItem>

        <NavItem><NavLink href="https://github.com/mcliff1" target="_blank" rel="noopener noreferrer" title="GitHub" >
        <FaGithub /></NavLink></NavItem>

        </Nav>
      </Navbar>

    )}
      </Media>
      </div>


    );
  }
}

export default MyNav;
