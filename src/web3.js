import Web3 from 'web3';
const  HDWalletProvider = require ('truffle-hdwallet-provider');
const provider = new HDWalletProvider(
  'charge produce elephant swift junk glow panic liquid dolphin kite buffalo tonight',
  "http://127.0.0.1:8545"
//  'https://ropsten.infura.io/v3/5dfc204dc19f4e84942c3775f85278d5',1,5
);

const web3 = new Web3(provider);

//const web3= new Web3(window.web3.currentProvider);

export default web3;
