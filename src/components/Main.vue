<template>
  <div class="content">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
        <el-breadcrumb-item >首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="itemList">
      <div class="item" v-for="i in itemList" :style="{ backgroundColor: i.color}" >
        <div class="value">{{i.value}}</div>
        <div class="title">{{i.title}}</div>
      </div>
    </div>
    <div class="chart">
      <div class="area">
        <div class="firstChart" id="firstChart">
        </div>
        <div class="secondChart" id="secondChart"></div>
      </div>
      <div class="area">

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        data: function () {
            return {
              itemList:[
                {
                  title:'盈亏(千万)',
                  value:'+1100',
                  color:'#BBBB00'
                },
                {
                  title:'收益率(%)',
                  value:'+12.7',
                  color:'#33CCFF'
                },
                {
                  title:'潜在投资人(人)',
                  value:'110',
                  color:'#D1BBFF'
                },
                {
                  title:'意向投资人(人)',
                  value:'2000',
                  color:'#FFA488'
                },
                {
                  title:'待审投资人(人)',
                  value:'200',
                  color:'#FF88C2'
                },
                {
                  title:'审核中投资人(人)',
                  value:'50',
                  color:'#AAAAAA'
                },
                {
                  title:'审核通过投资人(人)',
                  value:'306',
                  color:'#00DDDD'
                },
                {
                  title:'新增投资人(人)',
                  value:'500',
                  color:'#B94FFF'
                },
              ]
            }
        },
        created() {

        },
        mounted() {
          this.drawLine()
        },
        methods: {
          drawLine(){
            let firstChart = this.echarts.init(document.getElementById('firstChart'));
            let secondChart = this.echarts.init(document.getElementById('secondChart'));
            firstChart.setOption({
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度']
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  type : 'category',
                  data : ['周一','周二','周三','周四','周五','周六','周日']
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : [
                {
                  name:'直接访问',
                  type:'bar',
                  data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                  name:'邮件营销',
                  type:'bar',
                  stack: '广告',
                  data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name:'联盟广告',
                  type:'bar',
                  stack: '广告',
                  data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name:'视频广告',
                  type:'bar',
                  stack: '广告',
                  data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name:'搜索引擎',
                  type:'bar',
                  data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                  markLine : {
                    lineStyle: {
                      normal: {
                        type: 'dashed'
                      }
                    },
                    data : [
                      [{type : 'min'}, {type : 'max'}]
                    ]
                  }
                },
                {
                  name:'百度',
                  type:'bar',
                  barWidth : 5,
                  stack: '搜索引擎',
                  data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
              ]
            });
            secondChart.setOption({ title: {
              text: '堆叠区域图'
            },
              tooltip : {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  type : 'category',
                  boundaryGap : false,
                  data : ['周一','周二','周三','周四','周五','周六','周日']
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : [
                {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name:'直接访问',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                  name:'搜索引擎',
                  type:'line',
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'top'
                    }
                  },
                  areaStyle: {normal: {}},
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
              ]})
          }
        }

    }
</script>
<style scoped lang="scss">
  .content{
    position: absolute;
    top:80px;
    left: 250px;
    width: calc(100% - 250px);
    height: calc(100% - 80px);
    .itemList{
      padding: 10px;
      display: flex;
      .item{
        flex:1;
        height: 100px;
        border-radius: 10px;
        margin-right: 10px;
        .value{
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color:white
        }
        .title{
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color:white
        }
      }
    }
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
    .chart{
      padding: 10px;
      height: calc(100% - 150px);
      box-sizing: border-box;
      .area{
        width: 100%;
        height: 50%;
        display: flex;
        .firstChart{
          flex:1;
          height: 100%;
        }
        .secondChart{
          flex:1;
          height: 100%;
        }
      }
    }
  }

</style>

