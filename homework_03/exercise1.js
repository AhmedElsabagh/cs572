const dns = require('dns');

const { promisify } = require('util')

let getAddresses = promisify(dns.resolve4);


async function callback(){
     try{
        let addresses = await getAddresses('www.mum.edu');

        console.log(addresses);
     }
     catch(err){
        console.error(err);
     }
}

callback();
