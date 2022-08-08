<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="数据加载中"
      border
      fit
      highlight-current-row
    >

      <el-table-column
        label="序号"
        width="70"
        align="center"
      >
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="hosname" label="医院名称" width="180"/>

      <el-table-column prop="hoscode" label="医院编号" width="160"/>

      <el-table-column prop="apiUrl" label="地址" width="200"/>

      <el-table-column prop="contactsName" label="联系人"/>

      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? '可用' : '不可用' }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <router-link :to="'/yygh/hospset/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="fetchData"
    />
  </div>
</template>

<script>
import hospset from '@/api/yygh/hospset'

export default {
  name: 'List',
  data() {
    return {
      listLoading: true, // 是否显示 loading 信息
      list: [], // 数据列表
      total: 0, // 总记录数
      page: 1, // 页码
      limit: 5, // 每页显示记录数
      searchObj: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(page = 1) {
      this.page = page
      this.listLoading = true
      hospset.getHospitalPage(this.page, this.limit, this.searchObj)
        .then((res) => {
          if (res.success === true) {
            this.total = res.data.total
            this.list = res.data.rows
          }
          this.listLoading = false
        })
    }
  }

}
</script>

<style scoped>

</style>
