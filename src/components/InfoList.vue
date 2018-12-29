<template>
  <div class="content">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >信息列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="padding: 10px">
      <el-table
        border
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="index"
          width="150">
        </el-table-column>
        <el-table-column
          property="userName"
          label="用户姓名"
          width="150">
        </el-table-column>
        <el-table-column
          property="nickName"
          label="昵称"
          width="150">
        </el-table-column>
        <el-table-column
          property="email"
          label="绑定邮箱地址"
          width="150">
        </el-table-column>
        <el-table-column
          property="year"
          label="投资年限"
          width="150">
        </el-table-column>
        <el-table-column
          property="telephone"
          label="电话"
          width="150">
        </el-table-column>
        <el-table-column
          property="userBasicService"
          label="基本短信服务"
          width="150">
        </el-table-column>
        <el-table-column
          property="userChooseService"
          label="可选短信服务">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        tableData: [],
        currentPage1:1,
        pageSize:2,
        total:0,
        pageNum:1
      }
    },
    created() {

    },
    mounted() {
      this.getUserList();

    },
    methods: {
      handleCurrentChange(val) {
        let vm =this;
        vm.pageNum=val;
        console.log(vm.pageNum);
        vm.getUserList()
      },
      getUserList(){
        let vm = this;
        vm.api(vm,'get','http://localhost:3000/users/findUserList',{pageNum:vm.pageNum,pageSize:2},function (res) {
          if(res.success=='true'){

            vm.tableData=res.data.data;
            vm.total=res.data.totalCount;
          }else{
            vm.$message("暂无数据")
          }
        })
      }
    }

  }
</script>
<style lang="scss" scoped>
  .content {
    position: absolute;
    top: 80px;
    left: 200px;
    width: calc(100% - 200px);
    width: -moz-calc(100% - 200px);
    width: -webkit-calc(100% - 200px);
    height: calc(100% - 80px);
    height: -moz-calc(100% - 80px);
    height: -webkit-calc(100% - 80px);
    .block{
      padding-left: 10px;
    }
    .bread{
      background-color: #eeeeee;
      font-size: 16px;
      display: flex;
      height: 30px;
      padding:0 10px 0 10px;
      align-items: center;
      .breadIn{
        margin-left: 10px;
      }
    }
  }
</style>


