import web3 from './web3';

//0x3d9de2a9c2733aa17247937fe60b7236f45cdf3c  //First chain
//0x17311737e110b99908920A4550e6a25F0d6210A7  //still have contract0x77D33DdFC45eEc8A5590A229aD774A477D5782f5
//0x7Abb7890F31f69030380C6dC04bcd993Af237c91  //  //0x97a8f5113d9c8eA6D4a8c87a908560eB56943289  //0x68e9a3887a448EB4cf8A69a5c61e3dbd79f13B9A
//const address = '0x17311737e110b99908920A4550e6a25F0d6210A7';
const address = '0x8ec7ff3eeeac70443Fdb0AacaC046D65A5b4816b';

const abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"timestamp","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"revisionNo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"string"},{"name":"_timestamp","type":"string"}],"name":"setdata","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"data","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
// const abi = [
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_data",
// 				"type": "string"
// 			}
// 		],
// 		"name": "setdata",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "data",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "revisionNo",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
export default new web3.eth.Contract(abi,address);
