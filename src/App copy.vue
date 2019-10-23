<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <a href="index.html">
        <img scr="/Users/KennethChan/vue-demo/src/logo.png" >
        </a>
      </div>
      <div class="status-bar">
        Status Bar(Clock)
      </div>
    </div>

    <div class="sidebar">Sidebar</div>
    <div class="content">
      <div class="news">News</div>
      <div class="social">Social</div>
      <div class="corporate">Corporate</div>
    </div>

    <div class="footer">Footer</div>
  </div>

</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
  height: 100vh;
  background-color: #ccc;
  display: grid;
  grid-template-columns: [line2] 1fr [line3] 100fr;
  grid-template-rows: [row-1-start] 1fr [row-2-start] 10fr [row-3-start] 0.5fr [row-4-start];
  }

  .haeder{
    grid-column: line1 / line3;
    display: flex;
    flex-direction: row;
  }

  .haeder > .logo {
    width: 5%;
    border: 1px solid black;
    justify-content: left;
  }

  .haeder > .status-bar {
    width:95%;
    text-align: center;
  }

  .logo{
    margin-left: 0%;
  }

  .sidebar{
    width:10%;
    background-color: aqua;
    grid-row: row-2-start / row-4-start;
  }

  .footer{
    background-color:crimson;
    grid-row:row-3-start / row-4-start;
  }

  .content{
    grid-column: line2 / line3;
    grid-row:row-2-start / row-3-start;
    display: flex;
  }

  .content > * {
    width: 33%;
    border: 10px solid grey;
  }
</style>
