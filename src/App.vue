<template>
  <div id="container" class="container">
    <div id="header" class="header">
      <div id="logo">
        <brandimage :config="config"></brandimage>
        <!---  add a brand component here, it is expected to show the client logo -->
      </div>
      <div id="status">STATUS</div>
    </div>
    <div id="sidebar" class="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div id="main" class="main">
      <div v-if="position === 'top'" id="notification">{{welcomeMessage}}</div>
      <div id="panes">
        <div id="news" name="news">
          <yesno></yesno>
          <!-- add a yesno component, display a yes/no image from yesno.wtf, also adds a button, when clicked, display another image --->
        </div>
        <div id="social" name="social">
          Social
          <soical></soical>
        </div>

        <div id="corporate" name="corporate">
          Corporate
          <corporate></corporate>
        </div>
      </div>
      <div v-if="position === 'bottom'" id="notification">{{welcomeMessage}}</div>
    </div>
    <div id="footer" class="footer"></div>
  </div>
</template>
<script>
import Sidebar from "./components/SideBar";
// import Brand from ...
import config from "./config.json";
import brandimage from "./components/brandimage";
import yesno from "./components/yesno";
import soical from "./components/Social";
import corporate from "./components/Corporate";

export default {
  name: "App",
  components: {
    Sidebar, // Brand
    brandimage,
    yesno,
    soical,
    corporate
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
  display: flex;
}
#logo {
  background-color: lightyellow;
}
#status {
  flex: 1;
  background-color: lightpink;
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
