<template>
    <div class="ipfs-info">
        <img class="ipfs-logo" alt="IPFS logo" src="../assets/logo.svg" />
        <h1>{{ status }}</h1>
        <h2>ID: {{ id }}</h2>
        <h2>Agent version: {{ agentVersion }}</h2>
        <input type="file" id="inputElement" @change="captureFile"/>
        <button @click="uploadToIPFS">Upload to IPFS</button>
        <div><a v-if="urlExist">{{url}}</a></div>
    </div>
</template>

<script>
    export default {
        name: "IpfsInfo",
        data: function() {
            return {
                status: "Connecting to IPFS...",
                id: "",
                agentVersion: "",
                buffer: '',
                hash: '',
                url: '',
                urlExist: false
            };
        },
        mounted: function() {
            this.getIpfsNodeInfo();
        },
        methods: {
            async getIpfsNodeInfo() {
                try {
                    // Await for ipfs node instance.
                    const ipfs = await this.$ipfs;
                    // Call ipfs `id` method.
                    // Returns the identity of the Peer.
                    const { agentVersion, id } = await ipfs.id();
                    this.agentVersion = agentVersion;
                    this.id = id;
                    // Set successful status text.
                    this.status = "Connected to IPFS =)";
                } catch (err) {
                    // Set error status text.
                    this.status = `Error: ${err}`;
                }
            },
            /* used to catch chosen image &
           * convert it to ArrayBuffer.
           */
            captureFile(file) {
                this.file = event.target.files[0]
            },

            async uploadToIPFS(){
                //Get ipfs instance
                let ipfs = await this.$ipfs
                //add a file to ipfs
                let fileAdded = await ipfs.add(this.file)
                    .then((hashedImg) => {
                        //Get the hash returned by ipfs
                        this.hash = hashedImg[0].hash
                        //Create the url of our file
                        this.url='https://ipfs.io/ipfs/' + hashedImg[0].hash
                        this.urlExist = true
                    })
                console.log(this.hash)
                console.log(fileAdded)
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ipfs-logo {
        height: 10rem;
    }
</style>
