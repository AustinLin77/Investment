<template>
  <div>
    <vHeader></vHeader>
    <v-side></v-side>
    <div class="content">
      <transition name="fade" >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import vHeader from '../common/header.vue'
  import vSideBar from  '../common/sideBar.vue'
    export default {
      components:{
        'vHeader':vHeader,
        'vSide':vSideBar
      },
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
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

