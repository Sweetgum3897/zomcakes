const { MerkleTree } = require('merkletreejs');
const KECCAK256 = require('keccak256');

const addresses = [];

const leaves = addresses.map(x => KECCAK256(x));
const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true });

const buf2hex = x => '0x' + x.toString('hex');

const root = buf2hex(tree.getRoot());

const leaf = buf2hex(KECCAK256(addresses[2]));
const proof = tree.getProof(leaf).map(x => buf2hex(x.data));
console.log(tree.verify(proof, leaf, root));

console.log(root);
