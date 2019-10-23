<template>
  <div class="container">
    <div class="header">
      <div id="logo" name="logo">
        LOGO
      </div>
    </div>
    <div class="sidebar">
    </div>
    <div class="main">
      <div id="news">
      news
      </div>
      <div id="social" name="social">
      Social
      </div>
      <div id="corporate" name="corporate">
      Corporate
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


   .header {
     grid-area: header;
   }
   .sidebar {
     grid-area: sidebar;
     background-color:blue;
   }
   .main{
     grid-area:main;
     display:flex;
   }
   .main > * {
     width:33%;
     border: 10px solid grey;
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

@media (max-width: 576px) {
    .container{
      height: 100vh;
      display: grid;
      grid-auto-rows: [row1-start] 10% [row2] 10% [row3] 10% [row4] auto [row5] 10% [end-row];
      grid-template-areas: 
      "header"
      "header"
      "siderbar"
      "main"
      "footer"
    }
  }
  
</style>
