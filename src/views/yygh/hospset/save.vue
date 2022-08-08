<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="医院名称">
        <el-input v-model="hospset.hosname"/>
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="hospset.hoscode"/>
      </el-form-item>
      <el-form-item label="api地址">
        <el-input v-model="hospset.apiUrl"/>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="hospset.contactsName"/>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="hospset.contactsPhone"/>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import hospset from '@/api/yygh/hospset'

export default {
  name: 'Save',
  data() {
    return {
      // 定义数据
      hospset: {},
      saveBtnDisabled: false // 保存按钮是否禁用,
    }
  },

  methods: {
    saveOrUpdate() {
      this.saveBtnDisabled = true
      this.saveData()
    },

    // 保存
    saveData() {
      hospset.save(this.hospset).then(response => {
        return this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }).then(response => {
        // 添加成功时，进行路径跳转
        this.$router.push({ path: '/yygh/hospset/list' })
      }).catch((response) => {
        this.$message({
          type: 'error',
          message: '保存失败'
        })
      })
    }

  }
}
</script>

<style scoped>

</style>
