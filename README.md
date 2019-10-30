
# Installer le prototype

Le prototype est disponible ici: https://github.com/luccouv/img-upload-ipfs 

## Installer

  `npm install`


## Lancer

  `npm run serve`

Le noeud ipfs se lance automatiquement (pas besoin de le lancer depuis un terminal)

# Utilisation
Une fois la connexion à IPFS établie vous arrivez sur une page comme ça : 
![enter image description here](https://ipfs.io/ipfs/QmVjjcAVspafexh6AAPtRGqKQtT9RC9BuRaCto7DrwX9L2)

Vous pouvez upload une image et en cliquant sur " Upload to IPFS ", l'image sera postée sur IPFS et trouvable sur : 

https://ipfs.io/ipfs/ votre-hash-d'image

Le hash de l'image que IPFS nous renvoi est affiché dans les logs de votre navigateur. 

L'URL vers l'image s'affiche automatiquement. 

## Indications :
Dans le projet : 

**./plugins/vue-ipfs.js** : sert à créer un noeud ipfs (importé ensuite dans main.js)

**./components/IpfsInfo.vue** : contient toute la partie d'appels et ajouts à ipfs

# Objectif pour Share2Gether

Pour Share2Gether, l'objectif sera de récupérer les hash des images ajoutées par nos utilisateurs et de les stocker avec les autres informations des groupes/événements dans la blockchain. 

On pourra ensuite récupérer nos images en mettant pour source les liens ipfs comme ci-dessus. 
