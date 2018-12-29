<template>
    <div class="content">
      <div class="bread">
        <i class="el-icon-location"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
          <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/editInfomation' }">信息管理</el-breadcrumb-item>
          <el-breadcrumb-item  >修改个人信息</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-row :gutter="20" >
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="title">修改信息</div>
            <el-form :model="ruleFormOne" :rules="rules" ref="ruleFormOne" label-width="100px" class="demo-ruleForm">
              <el-form-item label="姓名 :" prop="name">
                <el-input v-model="ruleFormOne.name" disabled class="input"></el-input>
              </el-form-item>
              <el-form-item label="昵称 :" prop="nickname">
                <el-input v-model="ruleFormOne.nickname" class="input"></el-input>
              </el-form-item>
              <el-form-item label="投资年限 :" prop="year">
                <el-select v-model="ruleFormOne.year" placeholder="请选择投资年限">
                  <el-option label="一年" value="一年"></el-option>
                  <el-option label="两年" value="两年"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="绑定邮箱 :" prop="email">
                <el-input v-model="ruleFormOne.email" class="input"></el-input>
              </el-form-item>
              <el-form-item label="绑定手机 :" prop="telephone">
                <el-input v-model="ruleFormOne.telephone" class="input"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitFormOne('ruleFormOne')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="title">修改密码</div>
            <el-form :model="ruleFormTwo" :rules="ruless" ref="ruleFormTwo" label-width="100px" class="demo-ruleForm">
              <el-form-item label="原密码 :" prop="originPass">
                <el-input v-model="ruleFormTwo.originPass" class="input"></el-input>
              </el-form-item>
              <el-form-item label="新密码 :" prop="newPass">
                <el-input v-model="ruleFormTwo.newPass" class="input"></el-input>
              </el-form-item>
              <el-form-item label="确认密码 :" prop="comfirm">
                <el-input v-model="ruleFormTwo.comfirm" class="input"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleFormTwo')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>

          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="title">手机服务</div>
            <el-form :model="ruleFormThree" :rules="rulesaa" ref="ruleFormThree" label-width="100px" class="demo-ruleForm">
              <el-form-item label="当前绑定手机 :" prop="telephone">
                <el-input v-model="ruleFormThree.telephone"></el-input>
              </el-form-item>
              <el-form-item label="基础短信服务 :"  :inline="true">
                <el-checkbox-group v-model="ruleFormThree.firstServe">
                  <el-checkbox label="网站密码找回" name="firstServe" ></el-checkbox>
                  <el-checkbox label="提现申请短信验证" name="firstServe" ></el-checkbox>
                  <el-checkbox label="提现申请提醒" name="firstServe" ></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="可选短信服务 :"  :inline="true">
                <el-checkbox-group v-model="ruleFormThree.secondServe">
                  <el-checkbox label="投标通知" name="secondServe" ></el-checkbox>
                  <el-checkbox label="满标/流标/撤销通知" name="secondServe" ></el-checkbox>
                  <el-checkbox label="回款通知" name="secondServe" ></el-checkbox>
                  <el-checkbox label="本息保障通知" name="secondServe" ></el-checkbox>
                  <el-checkbox label="优质标提醒通知" name="secondServe" ></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitFormTwo('ruleFormThree')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
        data: function () {
          var checkPhone = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('手机号不能为空'));
            } else {
              const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
              console.log(reg.test(value));
              if (reg.test(value)) {
                callback();
              } else {
                return callback(new Error('请输入正确的手机号'));
              }
            }
          };


            return {
              id:'',
              ruleFormOne: {
                name: '',
                nickname: '',
                year: '',
                email: '',
                telephone: '',
              },
              ruleFormTwo: {
                originPass: '',
                newPass: '',
                comfirm: '',
              },
              ruleFormThree: {
                telephone: '',
                firstServe:[],
                secondServe:[]
              },
              rules: {
                nickname: [
                  { required: true, message: '请输入昵称', trigger: 'blur' },
                  { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                ],
                year: [
                  { required: true, message: '请选择投资年限', trigger: 'change' }
                ],
                email: [
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                telephone: [
                  { required: true, message: '绑定电话不能为空'},
//                  { type: 'number', message: '电话必须为数字值'},
                  { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                ],
              },
              ruless: {
                originPass: [
                  { required: true, message: '请输入原密码', trigger: 'blur' },
                ],
                newPass: [
                  { required: true, message: '请输入新密码', trigger: 'blur' },
                ],
                comfirm: [
                  { required: true, message: '确认新密码', trigger: 'blur' },
                ],
              },
              rulesaa:{
                telephone: [
                  { required: true, message: '绑定电话不能为空'},
                  { validator: checkPhone,trigger: 'blur'}
//                  { type: 'number', message: '电话必须为数字值'},
//                  { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                ],
                firstServe: [
                  { type: 'array', required: true, message: '请至少选择一个基础短信服务', trigger: 'change' }
                ],
                secondServe: [
                  { type: 'array', required: true, message: '请至少选择一个可选短信服务', trigger: 'change' }
                ],
              }
            }
        },
        created() {

        },
        mounted() {
          let vm =this;
          vm.id=localStorage.getItem("id");
          console.log(vm.id)
          vm.editElementSize();
          vm.getUserInfo();
          vm.ruleFormOne.name=localStorage.getItem("username");
        },

        methods: {
          getUserInfo(){
            let vm = this;
            vm.api(vm,'get','http://localhost:3000/users/findUserInfo',{id:vm.id},function (res) {
               console.log(res)
            })
          },
          editElementSize(){
            for(var i=0;i< document.getElementsByTagName("label").length;i++){
              document.getElementsByTagName("label")[i].style.width='115px'
            }
            for(var a=0;a< document.getElementsByClassName("el-checkbox").length;a++){
              document.getElementsByClassName("el-checkbox")[a].style.width='100%'
            }
          },
          submitFormOne(formName){
            let vm = this;
            this.$refs[formName].validate((valid) => {
              if (valid) {
                var commitData={
                  id:vm.id,
                  telephone:vm.ruleFormOne.telephone,
                  nickName:vm.ruleFormOne.nickname,
                  year:vm.ruleFormOne.year,
                  email:vm.ruleFormOne.email,
                };
                console.log(commitData);
                vm.api(vm,'post','http://localhost:3000/users/editUserInfo',commitData,function (res) {
                  console.log(res);
                  if(res.success=='true'){
                    vm.$message("修改成功")
                  }else{
                    vm.$message("修改失败")
                  }
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          submitFormTwo(formName){
            let vm = this;
            this.$refs[formName].validate((valid) => {
              if (valid) {
                var commitData={
                  id:vm.id,
                  basicService:vm.ruleFormThree.firstServe[0],
                  chooseService:vm.ruleFormThree.secondServe[0]
                };
                console.log(commitData);
                vm.api(vm,'post','http://localhost:3000/users/editUserPhoneService',commitData,function (res) {
                  console.log(res);
                  if(res.success=='true'){
                    vm.$message("修改成功")
                  }else{
                    vm.$message("修改失败")
                  }
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          submitForm(formName) {
            let vm = this;
            this.$refs[formName].validate((valid) => {
              if (valid) {
                var commitData={
                  id:vm.id,
                  originPass:vm.ruleFormTwo.originPass,
                  newPass:vm.ruleFormTwo.newPass
                };
                console.log(commitData);
                vm.api(vm,'post','http://localhost:3000/users/editPassword',commitData,function (res) {
                  console.log(res);
                  if(res.success=='true'){
                    vm.$message("修改成功")
                  }else{
                    vm.$message("修改失败")
                  }
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
    }
</script>
<style scoped lang="scss">
  .el-input{
    width: 90%;
  }
  .demo-ruleForm{
    margin-top: 20px;
  }
  .el-row {
    padding:15px;
    box-sizing: border-box;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;

  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: white;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border: #eeeeee 2px solid;
    border-radius: 4px;
    min-height: 36px;
    padding:5px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: white;
  }
  .title{
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    /*width: 100%;*/
    height: 35px;
    background-color: #409EFF;
    color: white;
    text-align: center;
    line-height: 35px;
  }
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
