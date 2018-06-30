<template>
    <img :src="src" alt="" :style="style">
</template>

<script>
import QRCode from 'qrcode'

export default {
    props: {
        text: {
            type: String,
            required: true
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        }
    },
    data () {
        return {
            src: ''
        }
    },
    computed: {
        style () {
            return {
                height: this.height === undefined ? '100%' : this.height + 'px',
                width: this.width === undefined ? '100%' : this.width + 'px'
            }
        }
    },
    created () {
        this.generateQRCode(this.text)
    },
    watch: {
        text (val) {
            this.generateQRCode(val)
        }
    },
    methods: {
        async generateQRCode (text) {
            try {
                this.src = await QRCode.toDataURL(text)
                this.$emit('success', this.src)
            } catch (err) {
                this.$emit('failure', text)
            }
        }
    }
}
</script>
