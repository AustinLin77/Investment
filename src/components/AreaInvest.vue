<template>
  <div class="content">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/areaInvest' }">投资管理</el-breadcrumb-item>
        <el-breadcrumb-item  >省份投资</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="toolBar">
      <el-button type="primary" style="margin-left: 2%" >导出excel</el-button>
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
      height: 7%;
      width: 100%;
    }
  }
</style>
