import web3 from './web3';

const address = '0x3d9de2a9c2733aa17247937fe60b7236f45cdf3c';

const abi = [{"constant":true,"inputs":[],"name":"revisionNo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"string"}],"name":"setdata","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"data","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
export default new web3.eth.Contract(abi,address);
