<template>
  <div class="content">
    <div v-if="showOver" class="over"></div>
    <div v-if="showOver" class="addItem">
      <div class="title">
        新增资金信息
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="收支类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择收支类型">
            <el-option label="转账" value="转账"></el-option>
            <el-option label="充值" value="充值"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收支描述" prop="description">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="收入" prop="income">
          <el-input v-model="ruleForm.income"></el-input>
        </el-form-item>
        <el-form-item label="支出" prop="pay">
          <el-input v-model="ruleForm.pay"></el-input>
        </el-form-item>
        <el-form-item label="账户现金" prop="cash_account">
          <el-input v-model="ruleForm.cash_account"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item style="display: flex;justify-content: flex-end">
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
          <el-button  @click="cacel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <div class="bread">
        <i class="el-icon-location"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
          <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/fundDirecion' }">资金管理</el-breadcrumb-item>
          <el-breadcrumb-item  >资金流水</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="toolBar">
        <div class="front">投标时间筛选 :
          <el-date-picker
            v-model="startTime"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-button type="primary" style="margin-left: 2%" @click="findByTime">筛选</el-button>
        </div>
        <div class="end">
          <el-button type="primary" style="margin-left: 2%" @click="addItem">添加</el-button>
        </div>
      </div>
      <div class="myTable">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          :default-sort = "{prop: 'date', order: 'descending'}"
        >
          <el-table-column
            type="index"
            header-align="center"
            label="序号"
            width="130">
          </el-table-column>
          <el-table-column
            prop="createTime"
            header-align="center"
            label="创建时间"
            sortable
            width="200">
            <template slot-scope="scope">
              <el-icon name="time"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="type"
            header-align="center"
            label="收支类型"
            :filters="[
            {text: '提现', value: '提现'},
            {text: '转账', value: '转账'},
            {text: '优惠券', value: '优惠券'}
            ]"
            :filter-method="filterHandler"
            width="180">
          </el-table-column>
          <el-table-column
            prop="description"
            header-align="center"
            label="收支描述"
            width="180">
          </el-table-column>
          <el-table-column
            prop="income"
            label="收入"
            header-align="center"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="pay"
            label="支出"
            header-align="center"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="cash_account"
            label="现金账户"
            header-align="center"
            sortable
            width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
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
  </div>
</template>

<script>
    export default {
        data: function () {
            return {
              currentPage1:1,
              pageSize:2,
              total:0,
              pageNum:1,
              uId:'',
              updateId:'',
              edit:false,
              startTime:'',
              tableData: [],
              showOver:false,
              ruleForm: {
                description:'',
                type: '',
                desc:'',
                income:'',
                pay:'',
                cash_account:''
              },
              rules: {
                type: [
                  { required: true, message: '请选择收支类型', trigger: 'change' }
                ],
                description: [
                  { required: true, message: '请填写收支描述', trigger: 'blur' }
                ],
                income: [
                  { required: true, message: '请填写收入', trigger: 'blur' }
                ],
                pay: [
                  { required: true, message: '请填写支出', trigger: 'blur' }
                ],
                cash_account: [
                  { required: true, message: '请填写账户现金', trigger: 'blur' }
                ],
              }
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
          handleCurrentChange(val) {
            let vm =this;
            vm.pageNum=val;
            console.log(vm.pageNum);
            vm.getData()
          },
           getMyTime(now){
             var year=now.getFullYear();
             var month=now.getMonth()+1;
             if(month<10){
              month="0"+month;
             }
             var date=now.getDate();
             if(date<10){
              date="0"+date;
             }
             var hour=now.getHours();
             if(hour<10){
               hour="0"+hour;
             }
             var minute=now.getMinutes();
             if(minute<10){
               minute="0"+minute;
             }
             var second=now.getSeconds();
             if(second<10){
               second="0"+second;
             }
             console.log(year+"-"+month+"-"+date+" "+hour+":"+minute);
             return year+"-"+month+"-"+date;

           },

          findByTime(){
            let vm = this;
             if(this.startTime.length!=2){
               this.$message("请选择正确的筛选时间段")
             }
            var myStartDate=vm.getMyTime(vm.startTime[0]);
            var myEndDate=vm.getMyTime(vm.startTime[1]);
            vm.api(vm,'get','http://localhost:3000/users/findUserFundDirectionByTime',{
              pageNum:vm.pageNum,
              pageSize:2,
              startDate:myStartDate,
              endDate:myEndDate,

              id:vm.id,
             },function (res) {
              console.log(res);
              vm.tableData=res.data;
              vm.total=res.data.length;
            })

          },
          submitForm(formName) {
            let vm =this;
            var currentTime=new Date();
            var y=new Date().getFullYear();
            var m=new Date().getMonth()+1;
            var d=new Date().getDate();
            var createTime=y+"-"+m+"-"+d;
            if(vm.edit){
              console.log("啊啊ass")
              this.$refs[formName].validate((valid) => {
                if (valid) {
                  vm.api(vm,'post','http://localhost:3000/users/updateFundDirection',{
                    type:vm.ruleForm.type,
                    createTime:createTime,
                    income:vm.ruleForm.income,
                    pay:vm.ruleForm.pay,
                    cash_account:vm.ruleForm.cash_account,
                    uId:vm.uId,
                    id:vm.updateId,
                    description:vm.ruleForm.description},function (res) {
                    console.log(res);
                    if(res.success=="true"){
                      vm.$message("更新成功")
                      vm.showOver=false;
                      vm.getData();
                    }
                  })
                } else {
                  this.$message("请完整填写添加信息");
                  return false;
                }
              });
            }else{
              this.$refs[formName].validate((valid) => {
                if (valid) {
                  vm.api(vm,'post','http://localhost:3000/users/insertFundDirection',{
                    type:vm.ruleForm.type,
                    createTime:createTime,
                    income:vm.ruleForm.income,
                    pay:vm.ruleForm.pay,
                    cash_account:vm.ruleForm.cash_account,
                    uId:vm.uId,
                    description:vm.ruleForm.description},function (res) {
                    console.log(res);
                    if(res.success=="true"){
                      vm.$message("新增成功");
                      vm.showOver=false;
                      vm.getData();
                    }
                  })
                } else {
                  this.$message("请完整填写添加信息");
                  return false;
                }
              });
            }
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          },
          getData(){
            let vm = this;
            vm.api(vm,'get','http://localhost:3000/users/findUserFundDirection',{id:vm.id,pageNum:vm.pageNum,pageSize:2},function (res) {
              console.log(res)
              if(res.success=='true'){
                vm.tableData=res.data.data;
                vm.total=res.data.totalCount;
              }else{
                vm.$message("暂无数据")
              }
            })
          },
          addItem(){
            this.showOver=true;
          },
          cacel(){
            this.showOver=false;
          },
          formatter(row, column) {
            return row.address;
          },
          filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
          },
          handleEdit(index, row) {
            console.log(row);
            this.edit=true;
            this.showOver=true;
            this.ruleForm.cash_account=row.cash_account;
            this.ruleForm.income=row.income;
            this.ruleForm.pay=row.pay;
            this.ruleForm.type=row.type;
            this.ruleForm.description=row.description;
            this.updateId=row._id
          },
          handleDelete(index, row) {
            console.log(row);
            let vm = this;
            vm.api(vm,'post','http://localhost:3000/users/deleteFundDirection',{id:row._id},function (res) {
              console.log(res);
              if(res.success=="true"){
                vm.$message("删除成功")
                vm.getData()
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
    .addItem{
      box-sizing: border-box;
      position: absolute;
      top:10%;
      left:20%;
      width: 60%;
      height: 60%;
      background-color: white;
      z-index: 50;
      padding:2% 3% 2% 3%;
      .title{
        width: 100%;
        height: 10%;
        color: deepskyblue;
        display: flex;
        justify-content: center;
        font-size: 24px;
      }
    }
    .over{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      z-index: 10;
      background-color: #cccccc;
    }
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
        width: 70%;
        float: left;
        padding:1%;
      }
      .end{
        box-sizing: border-box;
        height: 100%;
        float:right;
        padding:1%;
      }
    }
    .myTable{
      padding:1%;
    }
  }
</style>

