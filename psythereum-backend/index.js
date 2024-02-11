var express = require('express');
const { Web3 } = require('web3');
const Provider = require('@truffle/hdwallet-provider');

var app = express();
var port = process.env.PORT || 3000;

var SmartContractAddress = process.env.SMART_CONTRACT;
var SmartContractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "uid",
				"type": "string"
			}
		],
		"name": "recordingCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "id",
				"type": "address"
			}
		],
		"name": "userCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "key",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "createRecording",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "proof1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "proof2",
				"type": "string"
			}
		],
		"name": "createUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "getRecordingData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRecordings",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "uid",
				"type": "address"
			}
		],
		"name": "verifyUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var address = process.env.ADDRESS ;
var privatekey = process.env.PRIVATE_KEY;
var rpcurl = process.env.RPC_URL;

var provider = new Provider(privatekey, rpcurl);
var web3 = new Web3(provider);
var myContract = new web3.eth.Contract(SmartContractABI, SmartContractAddress);


app.get('/', (req, res)=>{
    res.send('Onn!');
})

app.post('/userRegister', async (req, res)=>{
    const {p1, p2, email} = req.body.params;
    var receipt = await myContract.methods.createUser(email, p1, p2).send({ from: address });
    console.log(receipt);
    res.send({status: 100, msg: "registered!"});
})

app.post('/setRecording', async (req, res)=>{
    const {cid,id,key,title} = req.body.params;
    var receipt = await myContract.methods.createRecording(cid, id, key, title).send({ from: address });
    console.log(receipt);
    res.send({status: 100, msg: "registered!"});
})

app.get('/getRecording', async (req, res)=>{
    var data = await myContract.methods.getRecordings().call();
    console.log(data);
    res.send({status: 100, data: data});
})

app.post('/getRecordingData', async (req, res)=>{
	const {cid} = req.body.params;
    var data = await myContract.methods.getRecordingData(cid).call();
    console.log(data);
    res.send({status: 100, data: data});
})

const sendData = async () => {

  console.log("in function");

//   var oldvalue = await myContract.methods.readd().call();
//   console.log("oldvalue", oldvalue);



//   var newvalue = await myContract.methods.readd().call();
//   console.log("newvalue", newvalue);


  console.log("done with all things");

}

app.listen(port);
console.log('listening on', port);