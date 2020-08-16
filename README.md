# Image upload in VueJs using IPFS

A prototype to upload image on ipfs. 

## Launch locally

  `npm install`

  `npm run serve`

IPFS node launch automaticly. 

# Using it
Once IPFS connection is established you will be able to upload your image by clicking "Upload to IPFS", your image will be uploaded and availablee with the following url pattern: 

https://ipfs.io/ipfs/<YOUR_IMG_HASH>

Your image's hash is available in your browser's logs once the upload is complete and your image's URL will be displayed on the page. 


## Indications :
In the project : 

**./plugins/vue-ipfs.js** : creates an ipfs node (imported in main.js)

**./components/IpfsInfo.vue** : contains all calls to IPFS for uploading the image

