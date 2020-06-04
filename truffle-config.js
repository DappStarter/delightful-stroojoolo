require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad inflict phone orange team'; 
let testAccounts = [
"0x8c276579c2a37e7ca39af6cfa198c3f59efb9f9d926094ae3d65a2b5d293bf4d",
"0xef9d755a0157bf4f148f41b9cc958be909fc700fced313133f7ee45d84468e4e",
"0x38f1d9fbe86ff116f6e15256df7ae69e76f116ce645e055ab813f8c93d3f9ce6",
"0x48f435b1973bcd35bb6d2e9ae9b6dedb529c989958f22ab20f0416cd0e995a13",
"0xc90da5eadea9a54574f09fa2eb8be7b8a3dc3149369ff536707e20bd8579e4d9",
"0x9a09b81246e842b2a801380741c83f82a0edf0b3805e735ac4892ff5c2262977",
"0x7ab2904af9c7a46fcca77b8986bbf1b6b00661da887409ac962192e220517a9e",
"0x7fecc559d9756b5064b868e5a1b7ba991a33f44ad4af0143692c9f2f77616fa5",
"0xb95842daeeaa53f60fd5c5573e3f29b6b13f555e0dbdefe108a1135d4cc3cfa5",
"0xab8745e6b22c22bff33105e0738d6598a20b9021a4cd049d7d7da122a0d33265"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
