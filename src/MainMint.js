import { useState } from "react";
import {addresses, buf2hex} from "./MerkleTreeKW.js"
import styled from "styled-components";
import { ethers, BigNumber} from "ethers";
import PMButton from "./AccountButtoncrp.png";
import MintButton from "./MINTrz.png";
import zomCakes from './ZomCakes.json';

 window.Buffer = window.Buffer || require("buffer").Buffer;

const Button = styled.button`
background-image: url(${PMButton});
font-family: "Bakso Sapi";
font-size: 20px;
color: white;
height: 40px;
width: 40px;
border-radius: 6px;
cursor: pointer;
border: none;
`;


const MButton = styled.button`
background-image: url(${MintButton});
background-position: center;
font-family: "Bakso Sapi";
font-size: 20px;
color: white;
cursor: pointer;
border-radius: 65px;
border: none;
height: 57px;
width: 143px;
`;

const zomCakesAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";


const MainMint = () => {
   
    const [ MintAmount, setMintAmount ] = useState(1);
   
const HandleMint= async () => {
    if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            zomCakesAddress,
            zomCakes.abi,
            signer
        );
        const { MerkleTree } = require('merkletreejs');
        const KECCAK256 = require('keccak256');
        const accounts = await provider.listAccounts();
        const network = await provider.getNetwork();
        const chainId = network.chainId;

        const leaves = addresses.map(x => KECCAK256(x));
        const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true });
        let leaf = buf2hex(Buffer.KECCAK256(accounts[0]));
        let proof = tree.getProof(leaf).map(x => buf2hex(x.data));

       try{
            const response = await contract.mint(BigNumber.from(MintAmount), {value: ethers.utils.parseEther(0.0 * MintAmount.toString()), });
            console.log("response: ", response);
            const ALresponse = await contract.AllowListmint(BigNumber.from(MintAmount, proof), {value: ethers.utils.parseEther(0.0 * MintAmount.toString()), from: accounts[0]});
            console.log("response: ", ALresponse);
        }catch (err){
            console.log("error: ", err)

      }
        
}
}

const HandleDecrement = () => {
    if (MintAmount <= 1) return;
    setMintAmount(MintAmount - 1);
};

const HandleIncrement = () => {
    if (MintAmount >= 3) return;
    setMintAmount(MintAmount + 1);
};

return(

    <div className="MainMint"> 
    
       <h1>ZomCakes</h1>
                  
       <div className="Zom"> <p>Zomcakes have escaped the Kitty Bakery after an experiment with dark matter went awry.</p>
       <p> Find out more by visiting <a href="https://www.kittyworld.xyz">www.kittyworld.xyz.</a></p><p>Mint here today!!</p>
       </div>
       <center> <Button onClick={HandleDecrement}>-</Button>
                   <input style={{width: '40px', height: '40px', backgroundColor: '#6455b1', fontFamily: "Bakso Sapi", fontSize: '20px'}} type="number" value={MintAmount} ></input>
                   <Button onClick={HandleIncrement} >+</Button>
            <p></p>
                <MButton onClick={HandleMint}>Mint Now</MButton></center>
    </div>
    );
};

export default MainMint;