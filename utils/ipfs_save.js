const Moralis = require('moralis/node')
require('dotenv').config()
let axios = require('axios')
const fs = require('fs')
const basePath = process.cwd()
const imgDir = `${basePath}/build/images`
const jsonDir = `${basePath}/build/json`

const appId = process.env.APP_ID
const serverUrl = process.env.APP_ID
// masterKey --- DO NOT DISPLAY IN PUBLIC DIR
const masterKey = process.env.MASTER_KEY
// xAPIKey --- DO NOT DISPLAY IN PUBLIC DIR
const xAPIKey = process.env.X_API_KEY
// xAPIKey available here: https://deep-index.moralis.io/api-docs/#/storage/uploadFolder
const api_url = 'https://deep-index.moralis.io/api/v2/ipfs/uploadFolder'

const images = fs.readdirSync(imgDir)
let ipfsArray = []
let promises = []
const metadata = fs.readdirSync(jsonDir)
// console.log('images: ', images.length)

// loop through json files and get metadata
// const metadataList = []
// metadata.forEach((file) => {
//   const json = JSON.parse(fs.readFileSync(`${jsonDir}/${file}`))

//   // filter out metadata from _metadata.json
//   if (file !== '_metadata.json') {
//     metadataList.push(json)
//   }
// })
// console.log('meta: ', metadataList.length)

for (let i = 1; i < 5; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(`${imgDir}/${images[i]}.png`, (err, data) => {
        if (err) rej()
        ipfsArray.push({
          path: `images/${images[i]}`,
          content: data.toString('base64'),
        })
        res()
      })
    }),
  )
}
Promise.all(promises).then(() => {
  axios
    .post(api_url, ipfsArray, {
      headers: {
        'X-API-KEY': xAPIKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
})
