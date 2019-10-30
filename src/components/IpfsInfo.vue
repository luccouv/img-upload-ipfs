<template>
    <div class="ipfs-info">
        <img class="ipfs-logo" alt="IPFS logo" src="../assets/logo.svg" />
        <h1>{{ status }}</h1>
        <h2>ID: {{ id }}</h2>
        <h2>Agent version: {{ agentVersion }}</h2>
        <input type="file" id="inputElement" @change="captureFile"/>
        <button @click="uploadToIPFS">Upload to IPFS</button>
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
                /*const reader = new FileReader();
                if (typeof file !== 'undefined') {
                    reader.readAsArrayBuffer(file.target.files[0]);
                    reader.onloadend = async () => {
                        this.buffer = await this.convertToBuffer(reader.result);
                        console.log('File captured' )
                    };
                } else this.buffer = '';*/
                this.file = event.target.files[0]
            },
            /**
             * converts ArrayBuffer to
             * Buffer for IPFS upload.
             */
            async convertToBuffer(reader) {
                return Buffer.from(reader);
            },

            async uploadToIPFS(){
                let ipfs = await this.$ipfs
                let fileAdded = await ipfs.add(this.file)
                    .then((hashedImg) => {
                        this.hash = hashedImg[0].hash
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
