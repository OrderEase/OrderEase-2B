<style lang="less">
    @import '../../../styles/common.less';
    @import './image-editor.less';
</style>

<template>
   <Row :gutter="10" class="image-editor">
        <i-col span="14" class="image-editor-con">
            <div class="cropper">
                <img id="cropimg" alt="">
            </div>
        </i-col>
        <i-col span="10" class="image-editor-con">
            <Row type="flex" justify="center" align="middle" class="image-editor-con-preview-con">
                <div id="preview"></div>
                <p>{{ option.cropedImg }}</p>
            </Row>
            <div class="image-editor-con-btn-con margin-top-10">
                <input
                    type="file"
                    accept="image/png, image/jpeg, image/gif, image/jpg"
                    @change="handleChange"
                    id="fileinput"
                    class="fileinput" />
                <label class="filelabel" for="fileinput"><Icon type="image"></Icon>&nbsp;选择图片</label>
                <span><Button @click="handlecrop" type="primary" icon="crop">裁剪</Button></span>
            </div>
            <Modal v-model="option.showCropedImage">
                <p slot="header">预览裁剪之后的图片</p>
                <img :src="option.cropedImg" alt="" v-if="option.showCropedImage" style="width: 100%;">
            </Modal>
        </i-col>
    </Row>
</template>

<script>
import Cropper from 'cropperjs'
import './cropper.min.css'

export default {
    name: 'image-editor',
    data () {
        return {
            cropper: {},
            option: {
                showCropedImage: false,
                cropedImg: ''
            }
        }
    },
    methods: {
        handleChange (e) {
            let file = e.target.files[0]
            let reader = new FileReader()
            reader.onload = () => {
                this.cropper.replace(reader.result)
                reader.onload = null
            }
            reader.readAsDataURL(file)
        },
        handlecrop () {
            let file = this.cropper.getCroppedCanvas().toDataURL()
            this.option.cropedImg = file
            this.option.showCropedImage = true
        }
    },
    mounted () {
        let img = document.getElementById('cropimg')
        this.cropper = new Cropper(img, {
            dragMode: 'move',
            preview: '#preview',
            restore: false,
            center: false,
            highlight: false,
            cropBoxMovable: true,
            toggleDragModeOnDblclick: false
        })
    }
}
</script>

