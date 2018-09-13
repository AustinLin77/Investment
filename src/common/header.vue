<template>
    <div class="head">
      <div class="innerHead">
        <div class="starter">
          <img src="../assets/icon512.png" class="myPic">
          <span class="title">欣旺达金融管理系统</span>
        </div>
        <div class="ender">
          <div class="mail">
            <el-badge :value="7" class="item">
              <i class="el-icon-setting"></i>
            </el-badge>
            <el-badge :value="9" class="item">
              <i class="el-icon-bell"></i>
            </el-badge>
            <el-badge :value="11" class="item">
              <i class="el-icon-message"></i>
            </el-badge>
          </div>
          <div class="picOut">
            <img src="../assets/mypic.jpg" class="myPic">
          </div>
          <div class="myDrop">
            <el-dropdown>
              <el-button type="primary" >
                林国铿<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改资料</el-dropdown-item>
                <el-dropdown-item>更该账号/注销</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

        </div>

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
<style scoped>
  .head{
    width: 100%;
    height: 80px;
    position: absolute;
    top:0;
    left: 0;
    background-color: #545c64;
  }
  .innerHead{
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 25px 0 25px
  }
  .starter{
    width: 240px;
    display: flex;
    align-items: center;
  }
  .myPic{
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .title{
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
    font-size: 20px;
    color: white;
  }
  .ender{
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .myPic{
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .myDrop{
    width: 110px;
  }
  .mail{
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
  }
  .item{
    margin-right: 25px;
  }
  .picOut{
    height: 40px;
    width: 55px;
    padding:0 10px 0 5px;
  }
</style>

