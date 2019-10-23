<template>
  <div id="container" class="container">
    <div id="header" class="header">
      <div id="logo" name="logo">LOGO</div>
    </div>
    <div id="sidebar" class="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div id="main" class="main">
      <div v-if="position === 'top'" id="notification">{{welcomeMessage}}</div>
      <div id="panes">
        <div id="news" name="news">news</div>
        <div id="social" name="social">Social</div>
        <div id="corporate" name="corporate">Corporate</div>
      </div>
      <div v-if="position === 'bottom'" id="notification">{{welcomeMessage}}</div>
    </div>
    <div id="footer" class="footer"></div>
  </div>
</template>
<script>
import Sidebar from "./components/SideBar";
import config from "./config.json";

export default {
  name: "App",
  components: {
    Sidebar
  },
  data() {
    return {
      config: config,
      position: config.notificationPosition
    };
  },

  computed: {
    welcomeMessage() {
      // ES5 syntax
      // return this.config.clientName + " is welcoming you!";
      // ES6 syntax
      return `${this.config.clientName} is welcoming you`;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: 0;
}

#header {
  grid-area: header;
}
#sidebar {
  grid-area: sidebar;
}
#main {
  grid-area: main;
  display: flex;
  flex-direction: column;
}

#notification {
  background-color: lightsteelblue;
}

#panes {
  flex: 1;
  display: flex;
}
/* #main > * {
  width: 33%;
  border: 10px solid grey;
} */
#news {
  flex: 1; /* flex = flex-grow + flex-shrink + flex-basis */
  background-color: lightcoral;
}
#social {
  flex: 1;
  background-color: lightcyan;
}
#corporate {
  flex: 1;
  background-color: lightskyblue;
}
#footer {
  grid-area: footer;
  background-color: aqua;
}
#container {
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "header"
    "sidebar"
    "main"
    "footer";
  grid-template-rows: [row1-start] 10% [row2] 10% [row3] 10% [row4] auto [row5] 10% [end-row];
}

@media (min-width: 576px) {
  #container {
    height: 100vh;
    display: grid;
    grid-template-columns: [first] 1fr [line2] 10fr [end];
    grid-template-rows: [row1-start] 10% [row-2] auto [row3] 10% [end-row];
    grid-template-areas:
      "header header"
      "sidebar main"
      "sidebar footer";
  }
}
</style>
