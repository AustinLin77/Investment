<template>
  <div class="content">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/provinceInvest' }">投资管理</el-breadcrumb-item>
        <el-breadcrumb-item  >省份投资</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="toolBar">
      <el-button type="primary" class="myButton" >导出excel</el-button>
    </div>
    <div class="myTable">
      <el-table
        border
        ref="filterTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="index"
          header-align="center"
          label="序号"
          width="130">
        </el-table-column>
        <el-table-column
          prop="description"
          header-align="center"
          label="收支描述"
          width="180">
        </el-table-column>
        <el-table-column
          prop="orderPayment"
          label="订单金额"
          sortable
          width="180"
          column-key="date"
        >
          <template slot-scope="scope">
            <span style="color:deeppink">{{ scope.row.orderPayment }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="income"
          label="收益金额"
          sortable
          width="180"
          column-key="date"
        >
          <template slot-scope="scope">
            <span style="color:darkcyan">{{ scope.row.income }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    created() {

    },
    mounted() {

    },
    methods: {}

  }
</script>

<style lang="scss">
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
    .bread {
      background-color: #eeeeee;
      font-size: 16px;
      display: flex;
      height: 30px;
      padding: 0 10px 0 10px;
      align-items: center;
      .breadIn {
        margin-left: 10px;
      }
    }
    .toolBar {
      height: 5%;
      min-height: 50px;
      margin-top: 1%;
      display: flex;
      align-items: center;
      width: 100%;
      .myButton{
        height: 80%;
        margin-left: 2%;
      }
    }
  }
</style>
