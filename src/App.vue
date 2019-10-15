<template>
  <div class="container">
    <header>HEADER</header>
    <aside>MENU</aside>
    <main>CONTENT</main>
    <footer>FOOTER</footer>
  </div>

</template>
<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: 50px 350px 50px;
  }
  header{
    grid-column:span 12;
  }
  header{
    display: flex;
  }
  header>div:nth-child(3){
    margin-left: auto;
  }
  aside{
    grid-column:span 2;
  }
  main{
    grid-column:span 10;;
  }
  footer{
    grid-column:span 12;
  }
  footer{
    grid-area: header;
    background-color: #153351;
    /* padding: 10px; */
    /* background: lightyellow; */
    /* flex-shrink: 0; */
    display: grid;
    width: 100%;
  }
</style>
