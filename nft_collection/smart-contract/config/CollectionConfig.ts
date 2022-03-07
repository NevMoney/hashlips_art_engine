import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'IntelligentInvestors',
  tokenName: 'Intelligent Investors',
  tokenSymbol: 'II',
  hiddenMetadataUri: 'ipfs://QmazZAV5xpUb24PZsqXWSg4JAdS4kaNiVmt58GmaQXLvdp/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.08,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xA444412E110048F033E5dfD301B0f59ED02AFC2f',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
