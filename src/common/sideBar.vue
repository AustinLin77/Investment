<template>
    <div class="sideBar">
      <el-col>
        <el-menu
          :unique-opened=true
          default-active="1"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="white"
          active-text-color="#ffd04b">
          <div v-for="item in itemList">
            <div v-if="item.children">
              <el-submenu :index="item.index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{item.title}}</span>
                </template>
                <div v-for="subItem in item.children">
                  <el-menu-item :index="subItem.index">{{subItem.title}}</el-menu-item>
                </div>

              </el-submenu>
            </div>
            <div v-else>
              <el-menu-item :index="item.index">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </div>
          </div>
        </el-menu>
      </el-col>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              itemList:[
                {
                  icon:"el-icon-menu",
                  title:'首页',
                  index:'/main'
                },
                {
                  icon:"iconfont icon-person",
                  title:'用户列表',
                  index:'/userList'
                },
                {
                  icon:"el-icon-news",
                  title:'信息列表',
                  index:'/infoList'
                },
                {
                  icon:"el-icon-edit",
                  title:'信息管理',
                  index:'1',
                  children:[
                    {
                      title:'个人信息',
                      index:'/personalInfomation',
                    },
                    {
                      title:'修改信息',
                      index:'/editInfomation',
                    }
                  ]
                },
                {
                  icon:"el-icon-goods",
                  title:'资金管理',
                  index:'2',
                  children:[
                    {
                      title:'资金流水',
                      index:'/fundDirection',
                    },
                    {
                      title:'支付单据',
                      index:'/payEvidence',
                    }
                  ]
                },
                {
                  icon:"el-icon-rank",
                  title:'投资管理',
                  index:'3',
                  children:[
                    {
                      title:'省份投资',
                      index:'/provinceInvest',
                    },
                    {
                      title:'区域投资',
                      index:'/areaInvest',
                    }
                  ]
                },
                {
                  icon:"el-icon-document",
                  title:'金融文章',
                  index:'4',
                  children:[
                    {
                      title:'发布文章',
                      index:'/publishArticle',
                    },
                    {
                      title:'编辑文章',
                      index:'/editArticle',
                    },
                    {
                      title:'查看文章',
                      index:'/lookArticle',
                    }
                  ]
                },
                {
                  icon:"el-icon-view",
                  title:'资金数据',
                  index:'5',
                  children:[
                    {
                      title:'投资分布',
                      index:'/investSpread',
                    },
                    {
                      title:'项目分布',
                      index:'/projectSpread',
                    },
                    {
                      title:'收支分布',
                      index:'/fundSpread',
                    }
                  ]
                },
              ]
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }

    }
</script>
<style>
  .sideBar{
    border-top: 1px solid #eeeeee;
    width: 200px;
    height: calc(100% - 80px);
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #545c64;
  }
</style>

