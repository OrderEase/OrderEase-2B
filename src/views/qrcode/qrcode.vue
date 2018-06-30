<style lang="less">
    @import '../../styles/common.less';
</style>

<template>
    <div class="qrcode">
        <Row>
            <i-col span="24">
                <Card>
                    <Row type="flex" justify="space-between">
                        <i-col span="8">
                            <Row>
                                <i-col span="18">
                                    <Input
                                        v-model="tableId"
                                        placeholder="请输入桌号..."
                                    />
                                </i-col>
                                <i-col span="4" offset="1">
                                    <Button
                                        type="primary"
                                        @click="generateQRCode"
                                    >生成二维码</Button>
                                </i-col>
                            </Row>
                        </i-col>
                        <i-col span="8" style="text-align: right;">
                            <Button type="primary" @click="downloadAll">批量下载</Button>
                        </i-col>
                    </Row>
                </Card>
            </i-col>
        </Row>
        <Row :gutter="6" class="margin-top-20">
            <i-col
                v-for="(item, index) in tableItems"
                :key="index"
                :md="4"
                :sm="6"
                class="margin-bottom-10">
                <Card>
                    <div>
                        <span>桌号: {{ item.id }}</span>
                        <a :href="item.data" :download="'qrcode_' + item.id" style="float: right;">
                            <Icon type="ios-download-outline" size="16"></Icon>
                        </a>
                    </div>
                    <img :src="item.data" alt="" style="height: 100%; width: 100%">
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
import QRCode from 'qrcode'

const downloadFile = (fileName, content) => {
    let aLink = document.createElement('a')
    aLink.download = fileName
    aLink.href = content

    aLink.click()
}

export default {
    data () {
        return {
            tableItems: [],
            tableId: ''
        }
    },
    created () {
        this.tableItems = this.getQRCodeItems()
    },
    methods: {
        async generateQRCode () {
            if (this.tableId !== '') {
                let idExists = this.tableItems.some(item => item.id === this.tableId)

                if (idExists) {
                    this.$Message.info('桌号已存在，请重新输入新的桌号')
                } else {
                    try {
                        let url = this.generateURL(this.tableId)
                        this.saveQRCodeItem({
                            id: this.tableId,
                            data: await QRCode.toDataURL(url)
                        })
                    } catch (err) {
                        this.$Message.error('生成二维码失败')
                    }
                }
            } else {
                this.$Message.info('桌号为空，请输入桌号')
            }
        },
        generateURL (id) {
            return process.env.CUSTOMER_BASE_URL + '?table=' + id
        },
        downloadAll () {
            this.tableItems.forEach(item => {
                downloadFile('qrcode_' + item.id, item.data)
            })
        },
        saveQRCodeItem (item) {
            let itemsList = this.getQRCodeItems()
            itemsList.push(item)
            this.tableItems = itemsList

            localStorage.setItem('qrcodeItemsList', JSON.stringify(itemsList))
        },
        getQRCodeItems () {
            let itemsList = localStorage.getItem('qrcodeItemsList')
            return itemsList ? JSON.parse(itemsList) : []
        }
    }
}
</script>
