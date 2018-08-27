<template>
  <app-layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </app-layout>
</template>
<script type="text/babel">
  export default {
    computed: {

    },
    mounted() {

    }
  };
</script>
<style>
  html,body{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  #app,.main,#app > div,.page-container,.page-container > div,.page-container > div > div{
    height: 100%;
  }
  .clearFix::after{
    display: table;
    content: '';
    clear: both;
  }
</style>
