<template>
  <div class="content">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/editInfomation' }">信息管理</el-breadcrumb-item>
        <el-breadcrumb-item  >个人信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="outer">
      <div class="higher">
        <div class="lefter">
          <el-row style="height: 20%;border: 1px solid #cccccc">
            <el-col :span="12" style="height: 100%;border-bottom: solid 1px #cccccc;border-right:dashed 1px #cccccc ">
              <div class="pic">
                <img src="../assets/mypic.jpg" class="myPic">
                <a class="myChange">
                  <input type="file" class="myInput" accept="image/*" id="myInput" />
                  更改头像
                </a>
              </div>
            </el-col>
            <el-col :span="12" class="personInfo">
              <div style="width: 50%;float: left;height: 100%;overflow: hidden;">
                <div class="info">
                  姓名 : 林国铿
                </div>
                <div class="info">
                  昵称 : AustinLin77
                </div>
                <div class="info">
                  投资年限 : 2年
                </div>
                <div class="info">
                  电话 : 15602301737
                </div>
              </div>
              <div style="width: 50%;float: left;display: flex;align-items: center;justify-content: center;height: 100%">
                <a class="mySign">
                  签到有奖
                </a>
              </div>
            </el-col>
          </el-row>
          <div class="leftBom">
            <div class="title">
              <i class="el-icon-info" style="margin-right: 10px"></i>
              个人数据
            </div>
            <div style="border: 1px solid #cccccc;padding: 1%;height: 25%;overflow: hidden">
              <el-row style="height: 75%;padding: 2%">
                <el-col :span="8" style="height: 100%;">
                  <div class="myData">
                    <div style="color: red">
                      20
                    </div>
                    <div style="color: darkgrey;margin-top: 4%">
                      投资数量
                    </div>
                  </div>
                </el-col>
                <el-col :span="8" style="height: 100%;">
                  <div class="myData">
                    <div style="color: red">
                      200
                    </div>
                    <div style="color: darkgrey;margin-top: 4%">
                      关注的人
                    </div>
                  </div>
                </el-col>
                <el-col :span="8" style="height: 100%;">
                  <div class="myData">
                    <div style="color: red">
                      2000
                    </div>
                    <div style="color: darkgrey;margin-top: 4%">
                      粉丝数
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div class="link">
                感谢您的关注 , <span style="color: deepskyblue; cursor: pointer" @click="moreInfomation">了解我的更多个人信息 》</span>
              </div>
            </div>
            <div class="cash">
              <div class="first">
                <span style=" font-size: 2vw;font-family: 华文行楷;white-space: nowrap;width: 30%;overflow: hidden">可用现金 :</span>
                <span style="font-family: 宋体;color: red;margin-left: 2%;font-size: 2vw;white-space: nowrap;width: 20%;overflow: hidden">¥ 1000</span>
                <img class="cashPic" src="../assets/cash.png">
              </div>
              <div class="second">
                <el-button type="primary" plain>我要出借</el-button>
                <el-button type="success" plain>充值</el-button>
                <el-button type="info" plain>提现</el-button>
              </div>
              <div class="third">
                您的每笔交易资金 , 都将接受银行全程存管 <span style="color: deepskyblue;cursor: pointer">了解资金存管 》</span>
              </div>

            </div>
          </div>
        </div>
        <div class="righter">
          <div class="quarterDiv">
            <div class="quarterFirst">
              <i class="el-icon-rank" style="font-size: 2vw;color: black;margin-right: 5px"></i>
              <span style="font-size: 2vw;font-weight: bold">待售资产</span>
            </div>
            <div class="quarterSecond">¥ 7800</div>
            <div class="quarterThird">
              <div class="lookMore">查看详情 》</div>
            </div>
          </div>
          <div class="quarterDiv">
            <div class="quarterFirst">
              <i class="el-icon-rank" style="font-size: 2vw;color: black;margin-right: 5px"></i>
              <span style="font-size: 2vw;font-weight: bold">账户总资产</span>
            </div>
            <div class="quarterSecond">¥ 8100000</div>
            <div class="quarterThird">
              <div class="lookMore">查看详情 》</div>
            </div>
          </div>
          <div class="quarterDiv">
            <div class="quarterFirst">
              <i class="el-icon-rank" style="font-size: 2vw;color: black;margin-right: 5px"></i>
              <span style="font-size: 2vw;font-weight: bold">已得回报</span>
            </div>
            <div class="quarterSecond">¥ 500000</div>
            <div class="quarterThird">
              <div class="lookMore">查看详情 》</div>
            </div>
          </div>
          <div class="quarterDiv">
            <div class="quarterFirst">
              <i class="el-icon-rank" style="font-size: 2vw;color: black;margin-right: 5px"></i>
              <span style="font-size: 2vw;font-weight: bold">期待回报</span>
            </div>
            <div class="quarterSecond">¥ 10000000</div>
            <div class="quarterThird">
              <div class="lookMore">查看详情 》</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lower">

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
        methods: {
          moreInfomation(){
            window.location.href='https://www.baidu.com/'
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
    .bread{
      background-color: #eeeeee;
      font-size: 16px;
      box-sizing: border-box;
      width: 100%;
      float: left;
      display: flex;
      height: 30px;
      padding:0 10px 0 10px;
      align-items: center;
      .breadIn{
        margin-left: 10px;
      }
    }
    .outer{
      width: 100%;
      height:100%;
      .higher{
        width: 100%;
        height: 80%;
        .lefter{
          box-sizing: border-box;
          width: 50%;
          height: 100%;
          float: left;
          padding: 1.5%;
          .leftBom{
            margin-top: 3%;
            width: 100%;
            height: 74%;
            .cash{
              margin-top: 3%;
              height: 60%;
              /*width: 100%;*/
              border:1px solid #cccccc;
              .first{
                overflow: hidden;
                text-indent: 15px;
                height: 30%;
                box-sizing: border-box;
                padding: 1%;
                display: flex;
                align-items: center;
                .cashPic{
                  margin-left: 15%;
                  width: 40%;
                }
              }
              .second{
                height: 30%;
                box-sizing: border-box;
                padding: 1%;
                padding-left: 5%;
                overflow: hidden;

              }
              .third{
                overflow: hidden;
                height: 40%;
                box-sizing: border-box;
                padding: 1%;
                text-align: center;
              }
            }
            .myData{
              width:100%;
              height: 100%;
              text-align: center;
            }
            .title{
              width: 100%;
              height: 10%;
              background-color: deepskyblue;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            }
            .link{
              width:100%;
              height: 20%;
              text-align: center;
              font-size: 2vm;
            }
          }
          .personInfo{
            border-bottom: solid 1px #cccccc;
            height: 100%;
            padding:15px;
            .info{
              margin-bottom: 5px;
              height: 20%;
              font-size: 1vw;
              width: 100%;
              white-space: nowrap;
            }
            .mySign{
              width: 80%;
              height: 50%;
              border-radius: 15px;
              box-shadow: darkgrey 5px 5px 5px;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1vw;
              cursor: pointer;
            }
          }
          .pic{
            box-sizing: border-box;
            /*border: 2px solid #cccccc;*/
            padding-left: 20px;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            .myChange{
              font-size: 0.8vw;
              height: 28%;
              width: 21%;
              margin-left: 10%;
              /*margin-bottom: 10%;*/
              overflow: hidden;
              background-color: deepskyblue;
              border-radius: 5px;
              border: 1px solid #eeeeee;
              position: relative;
              color: white;
              padding-left: 7px;
              padding-top: 5px;
              box-sizing: border-box;
            }
            .myPic{
              height: 85%;
              width: 29%;
              border-radius: 50%;
              border: 1px solid #cccccc;
            }
            .myInput{
              position: absolute;
              top:0;
              left: 0;
              opacity: 0;
              width: 80px;
              height: 35px;
            }
          }
        }
        .righter{
          box-sizing: border-box;
          width: 50%;
          height: 100%;
          float: left;
          padding: 20px;
          .quarterDiv{
            overflow: hidden;
            border: solid 1px #cccccc;
            margin-right: 2%;
            margin-bottom: 2%;
            box-sizing: border-box;
            padding:5%;
            height: 45%;
            width: 48%;
            float: left;
            .quarterFirst{
              height: 30%;
            }
            .quarterSecond{
              color: red;
              text-indent: 10%;
              font-size: 2vw;
              font-weight: bold;
              height: 30%;
            }
            .quarterThird{
              height: 40%;
              .lookMore{
                height: 30%;
                background-color: deepskyblue;
                font-size: 1vw;
                cursor: pointer;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center
              }
            }
          }
        }
      }
      .lower{
        box-sizing: border-box;
        width: 100%;
        height: 20%;
        padding: 20px;
      }
    }
  }
  a:hover {
    background-color: #df5000;
  }
  a{
    background-color: deepskyblue;
  }
</style>

