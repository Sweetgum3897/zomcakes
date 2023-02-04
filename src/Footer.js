import './App.css';
import React from 'react';
import ftlogo from './KITTY WORLD logocrp.png';
import discord from './discord_white_rbgcrp.png';
import opensea from './Opensea-Transparent Whitecrp.png';
import looksrare from './icon-mono-whiteLR.png';
import twitter from './twittercrp.png';

function Footer () {
    return (

        <div className='Footer'>
        <a href="https://kittyworld.xyz/"><img src={ftlogo} className="Ft-logo" alt="logo" /></a>
        
          <div className='foot-contain'> 
           <a href="http://discord.gg/U7d6RHEA6N"><img src= {discord} className='icons' alt="discord"/></a>
           <img src= {opensea} className='icons' alt="discord"/>
           <img src= {looksrare} className='icons' alt="discord"/>
           <a href="https://twitter.com/0xKittyWorld"><img src= {twitter} className='icons' alt="discord"/></a>
           </div>   
        <center><h5>&copy; 2023 KittyWorld All rights reserved.</h5></center>
        </div>
        );
};


export default Footer;