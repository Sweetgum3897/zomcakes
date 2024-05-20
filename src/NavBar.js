import { ConnectButton } from '@rainbow-me/rainbowkit';
import './App.css';
import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import logo from './KITTY WORLD logocrp.png';
import ConButton from "./CONNECT.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import dropdown from "./output-onlinepngtools.png";
import discord from './discord_white_rbgcrp.png';
import opensea from './Opensea-Transparent Whitecrp.png';
import looksrare from './icon-mono-whiteLR.png';
import twitter from './twittercrp.png';
import email from './emailwht.png'
import {
    Container,
    Col,
    Nav,
    NavItem,
    Dropdown,
    ListGroup,
    ListGroupItem,
    Row,
    Collapse,
  } from 'react-bootstrap';

window.Buffer = window.Buffer || require("buffer").Buffer;
function NavBar () {

  const CButton = styled.button`
  background-image: url(${ConButton});
  background-position: center;
  font-family: "Bakso Sapi";
  font-size: 20px;
  color: white;
  cursor: pointer;
  border-radius: 65px;
  border: none;
height: 50px;
width: 200px;
`;
const [open, setOpen] = useState(false);
    return (

        <div className='NavBar'>
         <a href="https://kittyworld.xyz/"><img src={logo} className="App-logo" alt="logo" /></a>
          <div className='head-contain'>       
          <div className='links'><a href="https://kittyworld.xyz/">Home</a></div>
        <div className='links'><a href="https://kittyworld.xyz/#team">Team</a></div>
        <div className='links'><a href="https://kittyworld.xyz/#roadmap">Roadmap</a></div>
        <div className='links'><a href="#faq">FAQ's</a></div>
         <div className='cbutton'>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated');
    
            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <CButton onClick={openConnectModal} type="button">
                        Connect Wallet
                      </CButton>
                    );
                  }
    
                  if (chain.unsupported) {
                    return (
                      <CButton onClick={openChainModal} type="button">
                        Wrong network
                      </CButton>
                    );
                  }
    
                  return (
                    <div style={{ display: 'flex', gap: 12 }}>
                      <CButton
                        onClick={openChainModal}
                        style={{ display: 'flex', alignItems: 'center' }}
                        type="button"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: 'hidden',
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{ width: 12, height: 12 }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </CButton>
    
                      <CButton onClick={openAccountModal} type="button">
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ''}
                      </CButton>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        </div>
      <Container>
        <Nav >
          <NavItem className='position-static'>
            <Dropdown bsPrefix="toggle">
              <Dropdown.Toggle >
                <img src={dropdown} onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text" bsPrefix="toggle" alt="caret"/>
              </Dropdown.Toggle>
              <Collapse in={open}>
              <Dropdown.Menu bsPrefix='dd-menu'>
                <Container>
                  <Row>
                    <Col>
                      <ListGroup bsPrefix= "listed-group" className='text-nowrap'>
                        <ListGroupItem tag='a' href='https://kittyworld.xyz/' action>
                          Home
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='https://kittyworld.xyz/' action >
                          Kitty World
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='https://kittyworld.xyz/tickets' >
                          Tickets
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='https://kittyworld.xyz/zomcakes' >
                          Zomcakes
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='#' >
                          Kitty PFP
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='#' >
                          Kitty Map
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='https://kittyworld.xyz/roadmap' action>
                          Roadmap
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='https://kittyworld.xyz/team' action>
                          Team
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='#faq' onClick={() => setOpen(!open)} action>
                          FAQ
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                    <Col >
                      <ListGroup bsPrefix= "listed-group" className='social-menu'>
                        <ListGroupItem tag='a' href='https://twitter.com/0xKittyWorld' action>
                         <img src={twitter} alt="twit" />
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='http://discord.gg/U7d6RHEA6N' action>
                          <img src={discord} alt="discord" />
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='#' action>
                         <img src={opensea} width="40px" alt="opensea" />
                        </ListGroupItem>
                        <ListGroupItem tag='a' href='#' action>
                         <img src={looksrare} width="40px" alt="looksrare" />
                        </ListGroupItem>
                      </ListGroup>
                      <p></p>
                      <ListGroup bsPrefix='listed-group' className='email-button'>
                      <ListGroupItem tag='a' href='#' action>
                      <img src={email} width="40px" alt="email" />
                         </ListGroupItem>
                      </ListGroup>
                      </Col>
                  </Row>
                </Container>
              </Dropdown.Menu>
              </Collapse>
            </Dropdown>
          </NavItem>
        </Nav>
      </Container>
    </div>
    </div>
      );
};


export default NavBar;
