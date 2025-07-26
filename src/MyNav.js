import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'react-bootstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Media from 'react-media';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function MyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Logo path: update if your path differs!
  const logoPath = "/images/cliffconsulting_logo.gif";

  return (
    <div>
      <Media query="(max-width: 600px)">
        {matches =>
          matches ? (
            // small screen nav
            <Navbar bg="white" expand="md">
              <NavbarBrand href="/">
                <img src={logoPath} alt="logo" style={{height: 32, marginRight: 8, verticalAlign: 'middle'}} />
                Matt Cliff
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse in={isOpen}>
                <div>
                  <Nav className="ml-auto">
                    <NavItem>
                      <NavLink as={RRNavLink} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink as={RRNavLink} to="/resume">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink as={RRNavLink} to="/projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink as={RRNavLink} to="/articles">Articles</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink as={RRNavLink} to="/contact">Contact</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Collapse>
            </Navbar>
          ) : (
            // large screen nav
            <Navbar bg="white" className="nav" expand>
              <NavbarBrand href="/">
                <img src={logoPath} alt="logo" style={{height: 32, marginRight: 8, verticalAlign: 'middle'}} />
                Matt Cliff
              </NavbarBrand>
              <Nav>
                <NavItem>
                  <NavLink as={RRNavLink} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={RRNavLink} to="/resume">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={RRNavLink} to="/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={RRNavLink} to="/articles">Articles</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={RRNavLink} to="/contact">Contact</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                <NavItem>
                  <NavLink href="mailto://matt@denvercliffs.com" title="matt@denvercliffs.com"><FaEnvelope /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/matt-cliff-45a75b6/" target="_blank" rel="noopener noreferrer" title="Linked In"><FaLinkedin /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://twitter.com/themattcliff" target="_blank" rel="noopener noreferrer" title="Twitter"><FaTwitter /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/mcliff1" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          )
        }
      </Media>
    </div>
  );
}

export default MyNav;
