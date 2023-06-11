const { MerkleTree } = require('merkletreejs');
const KECCAK256 = require('keccak256');

const addresses = ["0xA8D026047fDa45959B49A39bE089951391C511CE" ,
"0x0BB3a88753De2968E25a33745089548A52257617" ,
"0x5590Dd4eCB4Fc63722c374be7d86E3c2e35ECed4" ,
"0xD21Ceed3109affF10C13d73960A53e4B1f5f96Be" ,
"0x647b33673e41F70D093221D85B34e7032C5B10cd" ,
"0x69beD7db528a06971c796BBCFf55d59F427486f2" ,
"0x4c9d9A14C6eFAFDBd77c80882D1890e9808b758b" ,
"0x900b2BE4E7B0b56C4CB79A4205714Ff6F1653f72" ,
"0x49aC84934C2e54ccd33F72dBc23a1FFd432D5A08", 
"0x837Eee156D5d0C3141c8E4d5784F1B776756bA88",
"0xcC1997d3635753F919A9354a302C907C30aa1225"];

const leaves = addresses.map(x => KECCAK256(x));
const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true });

const buf2hex = x => '0x' + x.toString('hex');

const root = buf2hex(tree.getRoot());

const leaf = buf2hex(KECCAK256(addresses[2]));
const proof = tree.getProof(leaf).map(x => buf2hex(x.data));
console.log(tree.verify(proof, leaf, root));

console.log(root);

export {addresses, buf2hex};