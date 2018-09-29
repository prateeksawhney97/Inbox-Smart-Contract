const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'toward taxi summer dolphin pole virus arctic smooth follow shift lazy squeeze',
  'https://rinkeby.infura.io/v3/0f91a7153cbb4df0a624bbc656a66838'
);

const web3 = new Web3(provider);

const deploy = async ()=> {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['HI there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
