const basePath = process.cwd()
const { MODE } = require(`${basePath}/constants/blend_mode.js`)
const { NETWORK } = require(`${basePath}/constants/network.js`)

const network = NETWORK.eth

// General metadata for Ethereum
const namePrefix = 'Intelligent Investors'
const description =
  'Ingelligent investors are passionate about investing in themselves, always learning, and finding assets that have a potential to improve our lives, wealth and contribute to others.'
const baseUri = 'https://ipfs.io/ipfs/'

const solanaMetadata = {
  symbol: 'II',
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: 'https://1dealaway.com/nft-collection/',
  creators: [
    {
      address: '0xb0F6d897C9FEa7aDaF2b231bFbB882cfbf831D95',
      share: 100,
    },
  ],
}

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: 'Background' },
      {
        name: 'Face',
        blendMode: MODE.hardLight,
      },
      { name: 'Glasses' },
      { name: 'Shine' },
    ],
  },
]

const shuffleLayerConfigurations = false

const debugLogs = false

const format = {
  width: 512,
  height: 512,
  smoothing: false,
}

const gif = {
  export: true,
  repeat: 0,
  quality: 100,
  delay: 500,
}

const text = {
  only: false,
  color: '#ffffff',
  size: 20,
  xGap: 40,
  yGap: 40,
  align: 'left',
  baseline: 'top',
  weight: 'regular',
  family: 'Courier',
  spacer: ' => ',
}

const pixelFormat = {
  ratio: 15 / 128,
}

const background = {
  generate: true,
  brightness: '80%',
  static: false,
  default: '#000000',
}

const extraMetadata = {
  creator: 'Nev K for 1 Deal Away',
}

const rarityDelimiter = '#'

const uniqueDnaTorrance = 10000

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: 'preview.png',
}

const preview_gif = {
  numberOfImages: 5,
  order: 'ASC', // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: 'preview.gif',
}

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
}
