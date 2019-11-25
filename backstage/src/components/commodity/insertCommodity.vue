<template>
    <div class="insert-commodity">
        <div class="submit-form">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="商品分类">
                    <el-select v-model="form.categoryId" placeholder="请选择商品分类">
                        <el-option label="泡面" value="1"></el-option>
                        <el-option label="薯片" value="2"></el-option>
                        <el-option label="饮料" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品条形码">
                    <el-input v-model="form.commodityId"></el-input>
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-input v-model="form.commodityName"></el-input>
                </el-form-item>
                <el-form-item label="商品简介">
                    <el-input v-model="form.commodityInfo"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input v-model="form.commodityPrice"></el-input>
                </el-form-item>
                <el-form-item label="商品图片">
                    <el-upload
                        action="/api/upload/uploadImg"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :on-success="handleSuccess"
                        :limit="1">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button>取消</el-button>
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
            // console.log(this.form);
            // for(let item in this.form) {
            //     if(this.form[item] == ''){
            //         this.$message({
            //             type: 'warning',
            //             message: '有信息未填写完整'
            //         })
            //         return
            //     }
            // }
            this.$axios.post('/api/commodity/getCommodity',{commodityId: 1}).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        },
        handleRemove(file, fileList) {
            console.log(file, fileList)
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        handleSuccess(res, file, fileList){
            console.log('res',res)
            console.log('file',file)
            console.log('fileList',fileList)
        }
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
    }
}
</style>