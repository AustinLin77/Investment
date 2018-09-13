<template>
  <div id="app">
    <router-view></router-view>
  </div>


</template>

<script>

export default {
//监听路由变化，只要路由变化且新路由值不是login的全部都要调接口查询登录是否过期，过期则返回登录界面，防止用户手动输入路由值跳转
  watch: {
    $route: {
      handler: function(val, oldVal){
        console.log(val);
        if(val.name=='login'){
        }else{
          let vm=this;
          $.ajax({
            url: 'http://localhost:3000',
            dataType: "json",
            data: {
//            username:vm.ruleForm.name,
//            password:vm.ruleForm.desc
            },
            type: "get",
            xhrFields:{withCredentials: true},
            success: function (res) {
              console.log(res);
              if(res.statusCode==1){
                vm.$message("请登录后再操作")
                vm.$router.push('/')
              }else{
                return
              }
            },
            error: function () {
            }
          });
        }

      },
    }
  },
//  mounted(){
//    let vm=this;
//    $.ajax({
//      url: 'http://localhost:3000',
//      dataType: "json",
//      data: {
////            username:vm.ruleForm.name,
////            password:vm.ruleForm.desc
//      },
//      type: "get",
//      xhrFields:{withCredentials: true},
//      success: function (res) {
//        console.log(res);
//        if(res.statusCode==1){
//          vm.$message("请登录后再操作")
//
//            vm.$router.push('/login')
//
//
//
//        }else{
//          return
//        }
//      },
//      error: function () {
//      }
//    });
//
//  }

}


</script>

<style lang="scss">
  $margin:0;
  $width:100%;
  $height:100%;
  body{
    margin: $margin;
  }
  .bigDiv{
    position: absolute;
    top:0;
    left: 0;
    width: $width;
    height: $height;
    background-image: url("./assets/timg.jpg");
  }
  .myDrop .el-button--primary{
    background-color:  #545c64;
    border-color:  #545c64;
  }
</style>
