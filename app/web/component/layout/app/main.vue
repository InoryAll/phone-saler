<template>
 <div>
   <!--<LayoutHeader>-->
       <!--<div slot="header"><slot name="top"></slot></div>-->
   <!--</LayoutHeader>-->
   <LayoutContent>
     <div slot="content"><slot name="main"></slot></div>
   </LayoutContent>
   <LayoutFooter></LayoutFooter>
 </div>
</template>
<style>
@import "../../../asset/css/global.css";
  body{
    margin: 0 0;
  }
  a{
    text-decoration: none;
  }
</style>
<script type="text/babel">
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  import LayoutFooter from './footer/footer';

  export default{
    components: {
      LayoutHeader,
      LayoutContent,
      LayoutFooter,
    }
  };
</script>
