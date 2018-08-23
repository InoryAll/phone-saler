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
    min-height: 100%;
  }
</style>
