<template>
  <div class="bigDiv">
    <div class="title">金融管理系统</div>
    <div class="topcn">
      <div class="outDiv">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm myForm" >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="desc">
            <div style="display: flex">
              <el-input v-model="ruleForm.desc"  placeholder="请输入密码" type="password" id="password"  ></el-input>
              <i class="icon-biyanjing" style="margin-left: -30px;z-index: 99999" @click="toggleStatus" id="passwordIcon"> </i>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--<canvas id="canvas"></canvas>-->
  </div>
</template>

<script>
//  window.onload=function () {
//    var canvas = document.getElementById('canvas'),
//      ctx = canvas.getContext('2d'),
//      w = canvas.width = window.screen.width,
//      h = canvas.height = window.screen.height,
//
//      hue = 217,
//      stars = [],
//      count = 0,
//      maxStars = 1300;//星星数量
//
//    var canvas2 = document.createElement('canvas'),
//      ctx2 = canvas2.getContext('2d');
//    canvas2.width = 100;
//    canvas2.height = 100;
//    var half = canvas2.width / 2,
//      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
//    gradient2.addColorStop(0.025, '#CCC');
//    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
//    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
//    gradient2.addColorStop(1, 'transparent');
//
//    ctx2.fillStyle = gradient2;
//    ctx2.beginPath();
//    ctx2.arc(half, half, half, 0, Math.PI * 2);
//    ctx2.fill();
//
//    // End cache
//    function random(min, max) {
//      if (arguments.length < 2) {
//        max = min;
//        min = 0;
//      }
//
//      if (min > max) {
//        var hold = max;
//        max = min;
//        min = hold;
//      }
//
//      return Math.floor(Math.random() * (max - min + 1)) + min;
//    }
//
//    function maxOrbit(x, y) {
//      var max = Math.max(x, y),
//        diameter = Math.round(Math.sqrt(max * max + max * max));
//      return diameter / 2;
//      //星星移动范围，值越大范围越小，
//    }
//
//    var Star = function() {
//
//      this.orbitRadius = random(maxOrbit(w, h));
//      this.radius = random(60, this.orbitRadius) / 8;
//      //星星大小
//      this.orbitX = w / 2;
//      this.orbitY = h / 2;
//      this.timePassed = random(0, maxStars);
//      this.speed = random(this.orbitRadius) / 50000;
//      //星星移动速度
//      this.alpha = random(2, 10) / 10;
//
//      count++;
//      stars[count] = this;
//    }
//
//    Star.prototype.draw = function() {
//      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
//        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
//        twinkle = random(10);
//
//      if (twinkle === 1 && this.alpha > 0) {
//        this.alpha -= 0.05;
//      } else if (twinkle === 2 && this.alpha < 1) {
//        this.alpha += 0.05;
//      }
//
//      ctx.globalAlpha = this.alpha;
//      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
//      this.timePassed += this.speed;
//    }
//
//    for (var i = 0; i < maxStars; i++) {
//      new Star();
//    }
//
//    function animation() {
//      ctx.globalCompositeOperation = 'source-over';
//      ctx.globalAlpha = 0.5; //尾巴
//      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
//      ctx.fillRect(0, 0, w, h)
//
//      ctx.globalCompositeOperation = 'lighter';
//      for (var i = 1, l = stars.length; i < l; i++) {
//        stars[i].draw();
//      };
//
//      window.requestAnimationFrame(animation);
//    }
//
//    animation();
//  }
  export default {
    data :function() {
      return {
        iconStatus:false,
        ruleForm: {
          name: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          desc: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    mounted(){
      let vm=this;
//      this.getSession()
    },
    methods:{
//      getSession(){
//        let vm = this;
//        $.ajax({
//          url: 'http://localhost:3000',
//          dataType: "json",
//          data: {
////            username:vm.ruleForm.name,
////            password:vm.ruleForm.desc
//          },
//          type: "get",
//          success: function (res) {
//            console.log(res);
//            if(res.statusCode==1){
//              console.log("需要登录")
//            }else{
//              console.log("用户已登录")
//            }
//          },
//          error: function () {
//          }
//        });
//      },
      //表单提交函数
      submitForm() {
        let vm = this;
        $.ajax({
          url: 'http://localhost:3000/users/login',
          dataType: "json",
          data: {
            username:vm.ruleForm.name,
            password:vm.ruleForm.desc
          },
          type: "post",
          xhrFields:{withCredentials: true},
          success: function (res) {
            console.log(res);
            if(res.statusText==='登录成功'){
              vm.$router.push('/home')
            }
          },
          error: function () {
          }
        });
      },
      //表单重置函数
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //密码栏显示与隐藏函数
      toggleStatus(){
        let vm = this;
        if(!vm.iconStatus){
          vm.iconStatus=true;
        }else{
          vm.iconStatus=false
        }
        if(vm.iconStatus){
          document.getElementById('passwordIcon').setAttribute('class','icon-17yanjing');
          document.getElementById('password').removeAttribute('type')
        }else{
          document.getElementById('passwordIcon').setAttribute('class','icon-biyanjing');
          document.getElementById('password').setAttribute('type','password')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .topcn{
    width: 100%;
    top:500px;
    left: 0;
    position:absolute;
    z-index:20;
    .outDiv{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .myForm{
        width: 400px;
        height: 250px;
        text-align: center
      }
    }
  }
  .title{
    height: 80px;
    line-height: 80px;
    text-align: center;
    width: 100%;
    top:400px;
    left: 0;
    position:absolute;
    z-index:20;
    font-size: 30px;
    font-family: 华文宋体;
    color: #0086b3;
    letter-spacing: 5px;
  }
  #canvas{
    position: absolute;
    top: 0;
    left: 0px;
    z-index: 2;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"]{
    -moz-appearance: textfield;
  }
</style>
