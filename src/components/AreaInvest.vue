<template>
  <div class="content">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadIn">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/areaInvest' }">投资管理</el-breadcrumb-item>
        <el-breadcrumb-item  >区域投资</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="华东地区" >
        <div class="myTable">
          <el-table
            border
            ref="filterTable"
            :data="tableData"

          >
            <el-table-column
              fixed="left"
              type="index"
              header-align="center"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="provinces"
              header-align="center"
              label="省份"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderMoney"
              label="投资总额"
              sortable
              width="180"

            >
              <template slot-scope="scope">
                <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="incomeMoney"
              label="收益金额"
              sortable
              width="180"
              column-key="date"
            >
              <template slot-scope="scope">
                <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="payType"
              label="主要投资项目"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  type="primary"
                  disable-transitions>
                  {{scope.row.payType}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderPeriod"
              header-align="center"
              label="投资周期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderPersonConunt"
              header-align="center"
              label="投资人数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderYearRate"
              header-align="center"
              label="投资年变化率"
              width="180">
            </el-table-column>
            <el-table-column

              prop="remarks"
              header-align="center"
              label="备注"
              >
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="华南地区">
        <div class="myTable">
          <el-table
            border
            ref="filterTable"
            :data="tableData"

          >
            <el-table-column
              fixed="left"
              type="index"
              header-align="center"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="provinces"
              header-align="center"
              label="省份"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderMoney"
              label="投资总额"
              sortable
              width="180"
            >
              <template slot-scope="scope">
                <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="incomeMoney"
              label="收益金额"
              sortable
              width="180"
              column-key="date"
            >
              <template slot-scope="scope">
                <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="payType"
              label="主要投资项目"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  type="primary"
                  disable-transitions>
                  {{scope.row.payType}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderPeriod"
              header-align="center"
              label="投资周期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderPersonConunt"
              header-align="center"
              label="投资人数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderYearRate"
              header-align="center"
              label="投资年变化率"
              width="180">
            </el-table-column>
            <el-table-column

              prop="remarks"
              header-align="center"
              label="备注"
              >
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="华中地区">
        <div class="myTable">
          <el-table
            border
            ref="filterTable"
            :data="tableData"

          >
            <el-table-column
              fixed="left"
              type="index"
              header-align="center"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="provinces"
              header-align="center"
              label="省份"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderMoney"
              label="投资总额"
              sortable
              width="180"

            >
              <template slot-scope="scope">
                <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="incomeMoney"
              label="收益金额"
              sortable
              width="180"
              column-key="date"
            >
              <template slot-scope="scope">
                <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="payType"
              label="主要投资项目"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  type="primary"
                  disable-transitions>
                  {{scope.row.payType}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderPeriod"
              header-align="center"
              label="投资周期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderPersonConunt"
              header-align="center"
              label="投资人数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderYearRate"
              header-align="center"
              label="投资年变化率"
              width="180">
            </el-table-column>
            <el-table-column

              prop="remarks"
              header-align="center"
              label="备注"
             >
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="华北地区">
        <div class="myTable">
          <el-table
            border
            ref="filterTable"
            :data="tableData"

          >
            <el-table-column
              fixed="left"
              type="index"
              header-align="center"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="provinces"
              header-align="center"
              label="省份"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderMoney"
              label="投资总额"
              sortable
              width="180"

            >
              <template slot-scope="scope">
                <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="incomeMoney"
              label="收益金额"
              sortable
              width="180"
              column-key="date"
            >
              <template slot-scope="scope">
                <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="payType"
              label="主要投资项目"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  type="primary"
                  disable-transitions>
                  {{scope.row.payType}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderPeriod"
              header-align="center"
              label="投资周期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderPersonConunt"
              header-align="center"
              label="投资人数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderYearRate"
              header-align="center"
              label="投资年变化率"
              width="180">
            </el-table-column>
            <el-table-column

              prop="remarks"
              header-align="center"
              label="备注"
              >
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="西北地区">
        <div class="myTable">
          <el-table
            border
            ref="filterTable"
            :data="tableData"

          >
            <el-table-column
              fixed="left"
              type="index"
              header-align="center"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="provinces"
              header-align="center"
              label="省份"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderMoney"
              label="投资总额"
              sortable
              width="180"

            >
              <template slot-scope="scope">
                <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="incomeMoney"
              label="收益金额"
              sortable
              width="180"
              column-key="date"
            >
              <template slot-scope="scope">
                <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="payType"
              label="主要投资项目"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  type="primary"
                  disable-transitions>
                  {{scope.row.payType}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderPeriod"
              header-align="center"
              label="投资周期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderPersonConunt"
              header-align="center"
              label="投资人数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderYearRate"
              header-align="center"
              label="投资年变化率"
              width="180">
            </el-table-column>
            <el-table-column

              prop="remarks"
              header-align="center"
              label="备注"
             >
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="西南地区">
        <div class="myTable">
          <el-table
            border
            ref="filterTable"
            :data="tableData"

          >
            <el-table-column
              fixed="left"
              type="index"
              header-align="center"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="provinces"
              header-align="center"
              label="省份"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderMoney"
              label="投资总额"
              sortable
              width="180"

            >
              <template slot-scope="scope">
                <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="incomeMoney"
              label="收益金额"
              sortable
              width="180"
              column-key="date"
            >
              <template slot-scope="scope">
                <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="payType"
              label="主要投资项目"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  type="primary"
                  disable-transitions>
                  {{scope.row.payType}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderPeriod"
              header-align="center"
              label="投资周期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderPersonConunt"
              header-align="center"
              label="投资人数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderYearRate"
              header-align="center"
              label="投资年变化率"
              width="180">
            </el-table-column>
            <el-table-column

              prop="remarks"
              header-align="center"
              label="备注"
             >
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="东北地区">
        <div class="myTable">
          <el-table
            border
            ref="filterTable"
            :data="tableData"

          >
            <el-table-column
              fixed="left"
              type="index"
              header-align="center"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="provinces"
              header-align="center"
              label="省份"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderMoney"
              label="投资总额"
              sortable
              width="180"

            >
              <template slot-scope="scope">
                <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="incomeMoney"
              label="收益金额"
              sortable
              width="180"
              column-key="date"
            >
              <template slot-scope="scope">
                <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="payType"
              label="主要投资项目"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  type="primary"
                  disable-transitions>
                  {{scope.row.payType}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderPeriod"
              header-align="center"
              label="投资周期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderPersonConunt"
              header-align="center"
              label="投资人数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderYearRate"
              header-align="center"
              label="投资年变化率"
              width="180">
            </el-table-column>
            <el-table-column

              prop="remarks"
              header-align="center"
              label="备注"
            >
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="港澳台地区">
        <div class="myTable">
          <el-table
            border
            ref="filterTable"
            :data="tableData"

          >
            <el-table-column
              fixed="left"
              type="index"
              header-align="center"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="provinces"
              header-align="center"
              label="省份"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderMoney"
              label="投资总额"
              sortable
              width="180"

            >
              <template slot-scope="scope">
                <span style="color:deeppink">{{ scope.row.orderMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="incomeMoney"
              label="收益金额"
              sortable
              width="180"
              column-key="date"
            >
              <template slot-scope="scope">
                <span style="color:darkcyan">{{ scope.row.incomeMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="payType"
              label="主要投资项目"
              width="180">
              <template slot-scope="scope">
                <el-tag
                  type="primary"
                  disable-transitions>
                  {{scope.row.payType}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="orderPeriod"
              header-align="center"
              label="投资周期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderPersonConunt"
              header-align="center"
              label="投资人数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderYearRate"
              header-align="center"
              label="投资年变化率"
              width="180">
            </el-table-column>
            <el-table-column

              prop="remarks"
              header-align="center"
              label="备注"
              >
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
    export default {
        data: function () {
            return {
              tableData:[]
            }
        },
        created() {


        },
        mounted() {
          let vm = this;
          this.getData();

        },
        methods:{
          //使用es7关键字async和await替代请求回调函数，避免循环嵌套
          async getData(){
            let myResponse = await this.getDataByAjax();
            console.log(myResponse);
            if(myResponse.success=='true'){
              console.log("success")
            }
          },
          //将ajax请求封装为promise对象
          getDataByAjax(){
            return new Promise((resolve, reject) => {
              $.ajax({
                type:'get',
                url:'http://localhost:3000/users/findAreaInvestmentList',
                dataType:"json",
                data:{},
                traditional: true,
                success:function (res) {
                  resolve(res)
                },
                error:function (err) {
                  reject(err)
                },
              });
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
    .myTable{
      margin:1%;
      border:1px solid #eeeeee;
    }
  }
</style>
