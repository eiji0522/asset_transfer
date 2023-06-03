//20230505 Start
'use strict';
const fs = require('fs');
const path = require('path');
const { Wallets, Gateway } = require('fabric-network');
const testNetworkRoot = path.resolve(require('os').homedir(), 'go/src/github.com/hyperledger/fabric-samples/test-network');
//20230505 End

const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const Billing = require('../model/billing')
const Debt = require('../model/debt')

router.get('/db-analyze/product-data', function(req, res){  
  Product.find({}, function(err, foundProducts) {
    return res.json(foundProducts)
  })
})

router.get('/db-analyze/billing-data', function(req, res){
  Billing.find({}, function(err, foundBillings) {
    return res.json(foundBillings)
  })
})

router.get('/db-analyze/debt-data', function(req, res){ 
  Debt.find({}, function(err, foundDebts) {
    return res.json(foundDebts)
  })
})

//20230326 Start
router.get('/data-update/product-data', function(req, res){ 

  //Blockchainにつなぐまでの一時的なロジック(Start)
  const material = 'Mblockchain01'
  const description = 'device BC'
  const unit_price = 12345
  const quantity = 123
  const lot = 'LBC001'
  const carbon = 999

  const product = new Product({material, description, unit_price, quantity, lot, carbon})
  //Blockchainにつなぐまでの一時的なロジック(End)

  //20230505 Start
  async function main() {
    const gateway = new Gateway();
    const wallet = await Wallets.newFileSystemWallet('./wallet');

    try{
      const identityLabel = 'User@org1.example.com';
      const functionName = 'initAccount';
      const orgName = identityLabel.split('@')[1];
      const orgNameWithoutDomain = orgName.split('.')[0];

      let connectionProfile = JSON.parse(fs.readFileSync(
        path.join(testNetworkRoot, 
            'organizations/peerOrganizations', 
            orgName, 
            `/connection-${orgNameWithoutDomain}.json`), 'utf8')
      );
      let connectionOptions = {
        identity: identityLabel,
        wallet: wallet,
        discovery: {enabled: true, asLocalhost: true}
      };

      console.log('Connect to a Hyperledger Fabric gateway.');
      await gateway.connect(connectionProfile, connectionOptions);

      console.log('Use channel "mychannel".');
      const network = await gateway.getNetwork('mychannel');

      console.log('Use BalanceTransfer.');
      const contract = network.getContract('balance_transfer');

      console.log('Submit ' + functionName + ' transaction.');
      const response = await contract.submitTransaction(functionName, ...chaincodeArgs);

      if (`${response}` !== '') {
        console.log(`Response from ${functionName}: ${response}`);
      }

    } catch (error) {
      console.log(`Error processing transaction. ${error}`);
      console.log(error.stack);
    } finally {
      console.log('Disconnect from the gateway.');
      gateway.disconnect();
    }
  }
  //20230505 End

  product.save(function(err) {
    if(err) {
      return res.status(422).send({errors: [{title: 'BlockChain access error', detail: 'Something went wrong!'}]})
    }
    return res.json({"registered": true})
  })
//20230326 End
})

module.exports = router