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
      <el-button type="primary" class="myButton" @click="export2Excel" >导出excel</el-button>
    </div>
    <div class="myTable">
      <el-table
        v-loading="haveData"
        border
        ref="filterTable"
        :data="tableData"
        maxHeight="1000"

       >
        <el-table-column
          fixed="left"
          type="index"
          header-align="center"
          label="序号"
          width="130">
        </el-table-column>
        <el-table-column
          prop="provinces"
          header-align="center"
          label="省份"
          width="150">
        </el-table-column>
        <el-table-column
          prop="orderMoney"
          label="投资总额"
          sortable
          width="180"

        >
          <template slot-scope="scope">
            <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="incomeMoney"
          label="收益金额"
          sortable
          width="180"
          column-key="date"
        >
          <template slot-scope="scope">
            <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="payType"
          label="主要投资项目"
          width="180">
          <template slot-scope="scope">
            <el-tag
              type="primary"
              disable-transitions>
              {{scope.row.payType}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="orderPeriod"
          header-align="center"
          label="投资周期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="orderPersonConunt"
          header-align="center"
          label="投资人数"
          width="150">
        </el-table-column>
        <el-table-column
          prop="orderYearRate"
          header-align="center"
          label="投资年变化率"
          width="150">
        </el-table-column>
        <el-table-column

          prop="remarks"
          header-align="center"
          label="备注"
          >
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        tableData:[],
        haveData:true
      }
    },
    created() {

    },
    mounted() {
       let vm = this;
       this.getData()
    },
    methods: {
      getData(){
        let vm = this;
        vm.api(vm,'get','http://localhost:3000/users/findProvinceInvestmentList',{},function (res) {
          console.log(res);
          if(res.success=='true'){
            setTimeout(()=>{
              vm.haveData=!vm.haveData;
            },2000);
            vm.tableData=res.data;
          }else{
            vm.$message("暂无数据")
          }
        })
      },
      export2Excel() {
        require.ensure([], () => {
          const { export_json_to_excel } = require('../vendor/Export2Excel');
          const tHeader = ['序号','省份','投资总额','收益金额','主要投资项目','投资周期','投资人数','投资年变化率','备注'];
          const filterVal = ['index', 'provinces', 'orderMoney', 'incomeMoney', 'payType', 'orderPeriod','orderPersonConunt','orderYearRate','remarks' ];
          const list = this.tableData;
          const data = this.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, '商品管理列表');
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
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
      margin-top: 0.5%;
      margin-bottom: 0.5%;
      display: flex;
      align-items: center;
      width: 100%;
      .myButton{
        height: 80%;
        margin-left: 1%;
      }
    }
    .myTable{
      margin:1%;
      border:1px solid #eeeeee;
    }
  }
</style>
