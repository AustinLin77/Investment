<template>
    <div class="content">
      <div class="bread">
        <i class="el-icon-location"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
          <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/fundDirecion' }">资金管理</el-breadcrumb-item>
          <el-breadcrumb-item  >支付单据</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="toolBar">
        <div class="front">支付单号 :
          <el-input
            class="myInput"
            placeholder="请输入支付单号"
            v-model="search"
            clearable>
          </el-input>
          <el-button type="primary" style="margin-left: 2%" @click="findByPaymentNum">筛选</el-button>
          <el-button type="danger" style="margin-left: 1%" @click="deleteItem" :disabled="disabled_deleteButton">删除</el-button>
        </div>
      </div>
      <div class="myTable">
        <el-table
          v-loading="haveData"
          border
          ref="filterTable"
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="65">
          </el-table-column>
          <el-table-column
            prop="paymentNumber"
            label="支付单号"
            width="200">
            <template slot-scope="scope">
              <span style="color:#0066cc">{{ scope.row.paymentNumber }}</span>
            </template>
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
          <el-table-column
            prop="project"
            label="支付项目"
            width="180"
            :filters="[{ text: '储蓄', value: '储蓄' }, { text: '股票', value: '股票' }, { text: '转账', value: '转账' }]"
            :filter-method="filterProject"
            filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag
                :type="paymentProjectChange(scope.row.project)"
                disable-transitions>{{scope.row.project}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            label="下单时间"
            sortable
            width="210"
            column-key="date"
          >
            <template slot-scope="scope">
              <el-icon name="time" style="color: darksalmon;"></el-icon>
              <span style="color:darksalmon">{{ scope.row.time }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="orderStatus"
            label="支付状态"
            width="150"
            :filters="[{ text: '支付成功', value: '支付成功' }, { text: '支付失败', value: '支付失败' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.orderStatus === '支付失败' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.orderStatus}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注"
            >
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
              deleteGroup:[],
              currentPage1:1,
              pageSize:2,
              total:0,
              pageNum:1,
              disabled_deleteButton:true,
              search:'',
              tableData: [],
              haveData:true
            }
        },
        created() {

        },
        mounted() {
          let vm =this;
          vm.id=localStorage.getItem("id");
          console.log(vm.id);
          vm.uId=localStorage.getItem("uId");
          this.getData();
        },
        methods: {
          deleteItem(){
            console.log(this.deleteGroup);
            let vm = this;
            vm.api(vm,'post','http://localhost:3000/users/deletePayEvidence',{idGroup:this.deleteGroup},function (res) {
              console.log(res);
              if(res.success=='true'){
                vm.$message("删除成功");
                vm.getData()
              }else{
                vm.$message("删除失败")
              }
            })
          },
          findByPaymentNum(){
            let vm = this;
            vm.api(vm,'get','http://localhost:3000/users/findUserPayEvidenceByPaymentNum',{id:vm.id,pageNum:vm.pageNum,pageSize:2,paymentNum:vm.search},function (res) {
              console.log(res)
              if(res.success=='true'){
                vm.tableData=res.data;
                vm.total=res.data.totalCount;
              }else{
                vm.$message("暂无数据")
              }
            })
          },
          paymentProjectChange(project){
            var status='';
            if(project=='债券'){
              status='primary'
            }else if(project=='股票'){
              status='success'
            }else {
              status='info'
            }
            return status;
          },
          handleCurrentChange(val) {
            let vm =this;
            vm.pageNum=val;
            console.log(vm.pageNum);
            vm.getData()
          },
          formatter(row, column) {
            return row.address;
          },
          filterTag(value, row) {
            return row.orderStatus === value;
          },
          filterProject(value, row){
            return row.project === value;
          },
          filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
          },
          handleSelectionChange(val) {
            console.log(val)
            this.deleteGroup=[];
            var item;
            for(item in val){
              this.deleteGroup.push(val[item]._id)
            }
            console.log(this.deleteGroup);
            this.disabled_deleteButton=false;
          },
          getData(){
            let vm = this;
            vm.api(vm,'get','http://localhost:3000/users/findUserPayEvidence',{id:vm.id,pageNum:vm.pageNum,pageSize:2},function (res) {
              console.log(res);
              if(res.success=='true'){
                vm.haveData=!vm.haveData;
                vm.tableData=res.data.data;
                vm.total=res.data.totalCount;
              }else{
                vm.$message("暂无数据")
              }
            })
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
    .toolBar{
      height: 7%;
      width: 100%;
      .front{
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        float: left;
        padding:1%;
        .myInput{
          margin-left: 10px;
          width: 250px;
        }
      }
    }
    .myTable{
     margin:1%;
      border:1px solid #eeeeee;
    }
  }
</style>

