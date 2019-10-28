<template>
  <div id="main">
    <img :src="config.image" />
    <h1 id="answer">{{config.answer}}</h1>
    <button id="reload" v-on:click="reload">Reload</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {},
  data() {
    return {
      config: {},
      myVar: "hello"
    };
  },
  computed: {},
  methods: {
    reload: function(event) {
      axios
        .get("https://yesno.wtf/api/")
        .then(response => {
          console.log(response);
          this.config = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {},
  created() {
    this.reload();
    // axios
    //   .get("https://yesno.wtf/api/")
    //   .then(response => {
    //     console.log(response);
    //     this.config = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>