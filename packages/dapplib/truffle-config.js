require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict enter brand venture struggle rice rural upgrade hotel light army giant'; 
let testAccounts = [
"0xcab3b879a0df4be8cc3a2e25f0d79a34c6727cd8f54f666fbc7b5fae46ed7821",
"0x7dd899076a16f9e0cb0318a6f7e74df47c750c9dcaf28750be037a0126512587",
"0xf5c53dad04828f35ed642a5d6dc74cc9cb79e90a21428ee9f9b6a694d5e09c53",
"0x12c99a3289d23eb50c3ca9526069d84478e7433056a461fc35a20ba424339e40",
"0xd570ad9fc35091dd3cf46930abdec6ea7213686393fe7219db5013dc636f603b",
"0x47fe429933fcc4a74e1ba7cdadaf112685975e745443e4c253152b734842f35d",
"0x51e9e56fb732dad075a26131ecf2492d10914a0aeb8ef820046a1cdf65414fae",
"0x22e33b4250d8378d08336a52cdd3811988ffe976464540bcb897aa0e774937e7",
"0x6845547048fdc75862a2777a6ef550298186e3656ed2705a134d597fd67e32a6",
"0x5315fafd3c67a7accd573dedd3e70c4712f0b736f23bae9ef82ba81f8af68f0f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


