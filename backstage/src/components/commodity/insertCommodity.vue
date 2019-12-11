<template>
    <div class="insert-commodity">
        <div class="submit-form">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="商品分类" prop="categoryId">
                    <el-select v-model="form.categoryId" placeholder="请选择商品分类">
                        <el-option label="泡面" value="1"></el-option>
                        <el-option label="薯片" value="2"></el-option>
                        <el-option label="饮料" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品条形码" prop="commodityId">
                    <el-input v-model="form.commodityId"></el-input>
                </el-form-item>
                <el-form-item label="商品名称" prop="commodityName">
                    <el-input v-model="form.commodityName"></el-input>
                </el-form-item>
                <el-form-item label="商品简介" prop="commodityInfo">
                    <el-input v-model="form.commodityInfo"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop="commodityPrice">
                    <el-input v-model="form.commodityPrice"></el-input>
                </el-form-item>
                <el-form-item label="商品图片" prop="commodityImg">
                    <el-upload
                        drag
                        ref="uploadImg"
                        action="/api/upload/uploadImg"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="clearImg"
                        :on-success="handleSuccess"
                        :limit="1">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button @click="clearForm">清空</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                categoryId: '', //分类Id
                commodityId: '', //商品Id
                commodityName: '', //商品名称
                commodityInfo: '', //商品简介
                commodityImg: '', //商品图片
                commodityPrice: '' //商品价格
            },
            dialogImageUrl: '',
            dialogVisible: false,
        }
    },
    methods: {
        // 提交
        onSubmit() {
            for(let item in this.form) {
                if(this.form[item] == ''){
                    this.$message({
                        type: 'warning',
                        message: '有信息未填写完整'
                    })
                    return
                }
            }
            this.$axios.post('/api/commodity/insertCommodity',this.form).then(res => {
                if(res.data.success) {
                    this.$message({
                        type: 'success',
                        message: '保存成功'
                    })
                    // 这里不能直接使用 this.clearForm()，会把数据库图片也删除
                    this.$refs.uploadImg.clearFiles()
                    this.$refs.form.resetFields()
                }else {
                    this.$message({
                        type: 'warning',
                        message: res.data.message
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        },
        // 清空数据
        clearForm() {
            // 页面图片要单独清除
            this.clearImg()
            this.$refs.form.resetFields()
        },
        // 清空页面和数据库图片
        clearImg() {
            let submitForm = {
                commodityImg: this.form.commodityImg.split('/').pop()
            }
            this.$axios.post('/api/upload/deleteImg', submitForm).then(res => {
                if(res.data.success) {
                    this.$refs.uploadImg.clearFiles()
                }
            }).catch(err => {
                console.log(err)
            })
        },
        // 图片预览
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        // 上传图片成功
        handleSuccess(res, file, fileList){
            this.form.commodityImg = 'http://localhost:3000/images/commodity/' + res.path.split('\\').pop()
        }
    },
    beforeDestory() {
        // 页面摧毁前清空form，防止多余的图片被缓存
        this.clearForm()
    }
}
</script>

<style lang="less" scoped>
.insert-commodity{
    .submit-form{
        width: 500px;
        /deep/ .el-select{
            width: 100%;
        }
        /deep/ .el-upload-dragger{
            background: none;
            border: none;
            height: 148px;
            width: 148px;
        }
    }
}
</style>