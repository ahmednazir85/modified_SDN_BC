import Web3 from 'web3';
const  HDWalletProvider = require ('truffle-hdwallet-provider');


const provider = new HDWalletProvider(
  'charge produce elephant swift junk glow panic liquid dolphin kite buffalo tonight',
//"f1afa95f216eb67a8e8ab3a8a9e274f66480baca8b64cc69cbac1e12a6cdc95e",
  "http://0.0.0.0:8545"
  //"http://0.0.0.0:8545"
//   `http://${window.location.hostname}:30200`
//  'https://ropsten.infura.io/v3/5dfc204dc19f4e84942c3775f85278d5',1,5
);





const web3 = new Web3(provider);

//const web3= new Web3(window.web3.currentProvider);

export default web3;
