<template>
  <div class="content">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
        <el-breadcrumb-item  >首页</el-breadcrumb-item>
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
        <div class="firstChart" id="firstChart"></div>
        <div class="firstChart" id="secondChart"></div>
      </div>
      <div class="area">
        <div class="firstChart" id="thirdChart"></div>
        <div class="firstChart" id="fourthChart"></div>
        <div class="firstChart" id="fifthChart"></div>
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
              ],
              data:{}
            }
        },
        created() {

        },
        mounted() {
          this.data = this.getData(50);
          this.drawLine();
          console.log(this.data)
        },
        methods: {
          drawLine(){
            let vm =this;
            let firstChart = this.echarts.init(document.getElementById('firstChart'));
            let secondChart = this.echarts.init(document.getElementById('secondChart'));
            let thirdChart = this.echarts.init(document.getElementById('thirdChart'));
            let fourthChart = this.echarts.init(document.getElementById('fourthChart'));
            let fifthChart = this.echarts.init(document.getElementById('fifthChart'));
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
            secondChart.setOption({
              title: {
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
              ]});
            thirdChart.setOption({
              title : {
                text: '同名数量统计',
                subtext: '纯属虚构',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data:  vm.data.legendData,

                selected:  vm.data.selected
              },
              series : [
                {
                  name: '姓名',
                  type: 'pie',
                  radius : '55%',
                  center: ['40%', '50%'],
                  data:  vm.data.seriesData,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
          });
            fourthChart.setOption({
              angleAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                z: 10
              },
              radiusAxis: {
              },
              polar: {
              },
              series: [{
                type: 'bar',
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a'
              }, {
                type: 'bar',
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a'
              }, {
                type: 'bar',
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a'
              }],
              legend: {
                show: true,
                data: ['A', 'B', 'C']
              }
            });
            fifthChart.setOption({backgroundColor: '#2c343c',
              title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                  color: '#ccc'
                }
              },

              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },

              visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                  colorLightness: [0, 1]
                }
              },
              series : [
                {
                  name:'访问来源',
                  type:'pie',
                  radius : '50%',
                  center: ['50%', '50%'],
                  data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:274, name:'联盟广告'},
                    {value:235, name:'视频广告'},
                    {value:400, name:'搜索引擎'}
                  ].sort(function (a, b) { return a.value - b.value; }),
                  roseType: 'radius',
                  label: {
                    normal: {
                      textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                      },
                      smooth: 0.2,
                      length: 20,
                      length2: 20
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#c23531',
                      shadowBlur: 200,
                      shadowColor: 'rgba(0,0, 0, 0.5)'
                    }
                  },

                  animationType: 'scale',
                  animationEasing: 'elasticOut',
                  animationDelay: function (idx) {
                    return Math.random() * 200;
                  }
                }
              ]})
          },
          getData(count){
            var nameList = [
              '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
            ];
            var legendData = [];
            var seriesData = [];
            var selected = {};
            for (var i = 0; i < count; i++) {
              name = Math.random() > 0.65
                ? makeWord(4, 1) + '·' + makeWord(3, 0)
                : makeWord(2, 1);
              legendData.push(name);
              seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
              });
              selected[name] = i < 6;
            }

            return {
              legendData: legendData,
              seriesData: seriesData,
              selected: selected
            };

            function makeWord(max, min) {
              var nameLen = Math.ceil(Math.random() * max + min);
              var name = [];
              for (var i = 0; i < nameLen; i++) {
                name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
              }
              return name.join('');
            }
          }
        }

    }
</script>
<style scoped lang="scss">
  .content{
    position: absolute;
    top:80px;
    left: 200px;

    width: calc(100% - 200px);
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
      }
    }
  }

</style>

