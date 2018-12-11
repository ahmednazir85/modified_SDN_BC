import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3'
import lottery from './lottery';

class App extends Component {
state = {

  yourBalance:'',
  fileData:'',
  currentIndex:'',
  value:'',
  message:'',
  retriveIndex:''
};
 async componentDidMount() {


console.log('in componentditMount');

const currentIndex = await lottery.methods.revisionNo().call();
const fileData = await lottery.methods.data(currentIndex-1).call();
const accounts = await web3.eth.getAccounts();

const yourBalance = await web3.eth.getBalance(accounts[0]);

this.setState({yourBalance,fileData,currentIndex});

console.log('currentIndex' + currentIndex)
console.log('balance is' + yourBalance);

}



onSubmit = async (event) => {
  event.preventDefault();
console.log("in onSubmit");
  this.setState({message:'waiting on transection success...'});
  const accounts = await web3.eth.getAccounts();
  await lottery.methods.setdata(this.state.value).send({from:accounts[0]});
  this.setState({message:'Successfully saved'});

var  currentIndex = await lottery.methods.revisionNo().call();
  this.setState({currentIndex:currentIndex})
};




onRetrive = async (event) => {

  event.preventDefault();
  var retriveData = await lottery.methods.data(this.state.retriveIndex).call();
  this.setState({fileData:retriveData});


};

  render() {
    console.log('In Rander')

      return (

      <div>
      <h2> Block Chain Enabled Network Configration</h2>
              <hr />




<form onSubmit = {this.onSubmit}>
<div>
<label> Revision to save </label>
<input
value = {this.state.value}
onChange ={event => this.setState({value:event.target.value})}
/>
</div>
<button>Enter </button>
<h1> {this.state.message} </h1>
        </form>


        <p> Balance is {web3.utils.fromWei(this.state.yourBalance,"ether")} ether!
        <hr />

current Revision = {this.state.currentIndex -1}
        <form onSubmit = {this.onRetrive}>
        <div>
        <label> Revison to Retrive </label>
        <input
        value = {this.state.retriveIndex}
        onChange ={event => this.setState({retriveIndex:event.target.value})}

        />
        </div>
        <button> Retrive </button>
                </form>


          Revision is {this.state.fileData}
          </p>
          <hr />




      </div>
    );
}
}

export default App;
