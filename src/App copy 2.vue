<template>
  <div class="container">
    <div class="header" id="header"/>
      <div class="logo"/>
    <div class="sidebar"/>
    <div class="main"/>
    <div class="footer"/>
  </div>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .header {
     grid-area: header;
     background-color: black;
   }
   .sidebar {
     grid-area: sidebar;
     background-color:blue;
   }
   .main{
     grid-area:main;
     background-color: brown;
   }
   .footer{
     grid-area:footer;
     background-color: aqua;
   }
  .container{
  height: 100vh;
  display: grid;
  grid-template-columns: [first] 1fr [line2] 10fr [end];
  grid-template-rows: [row1-start] 10% [row-2] auto [row3] 10% [end-row];
  grid-template-areas: 
    "header header"
    "sidebar main"
    "sidebar footer"
  }
</style>
