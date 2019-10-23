<template>
  <div class="container">
    <div class="header">
      <div class="logo">
       LOGO
      </div>
      <div class="status-bar">
        Status Bar(Clock)
      </div>
    </div>

    <div class="sidebar">Sidebar</div>
    
    <div class="main">
      <div class="news">News</div>
      <div class="social">Social</div>
      <div class="corporate">Corporate</div>
    </div>

  </div>

</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,
  body,
  .container{
    height: 100%;
  }
  .container{
    background-color: #ccc;
    display: grid;
    grid-template-areas:
    "header"
    "sidebar"
    "main";
    grid-template-columns: auto;
    grid-template-rows: 
      max-content
      max-content
      minmax(0,1fr);
      word-break: break-word;
      width: 100%;
      line-height: 1.3em;
  }

  .haeder{
    display: grid;
    grid-template-areas: "logo" "status";
    width:100%;
  }

  .haeder > .logo {
    grid-area: logo;
    padding: 5px;
  }

  .haeder > .status-bar {
    width:95%;
    text-align: center;
  }

  .logo{
    margin-left: 0%;
  }

  .sidebar{
    grid-area: sidebar;
    position: relative;
    background-color: aqua;
    width: 100%;
    z-index: 1000;
  }

  .footer{
    background-color:crimson;
  }

  .main{
    display: flex;
    min-height: 0;
    justify-content: space-around;
    flex-direction: column;
    grid-area: main;
  }

  .main > * {
    width: 33%;
    border: 10px solid grey;
  }
</style>
