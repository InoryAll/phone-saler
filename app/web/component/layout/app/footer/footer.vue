<template>
  <footer class="footer">
    <div class="container">
      <base-footer></base-footer>
    </div>
  </footer>
</template>
<style>
  @import "./footer.css";
</style>
<script type="text/babel">
  import BaseFooter from '../../../../component/app/footer/footer';

  export default{
    components: {
      BaseFooter,
    },
  };
</script>
