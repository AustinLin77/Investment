<template>
    <div>
        <ul>
          <li v-for="i in cycle">
            <span  style="float: left">{{i.title}}</span>
            <span  style="float: right">{{i.content}}</span>
          </li>
        </ul>
      <span>共 {{total}} 条  {{currentPage}}/{{totalPage}}</span>

      <button>首页</button>
      <button>上一页</button>
      <button>下一页</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              cycle:[
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                {title:"aaa",content:1206},
                ],
              total:15,
              currentPage:1,
              totalPage:2
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {}

    }
</script>

<style scoped>
  ul{
    list-style:none;
    border: solid 2px #cccccc;
    padding: 0 10px 0 10px;
    -webkit-padding-start: 10px;
    width: auto;
  }
  li{
    list-style: none;
    border-bottom: 1px solid #eeeeee;
    width: 100%;
    height: 30px;
    text-align: start;
    line-height: 30px;

  }

</style>
