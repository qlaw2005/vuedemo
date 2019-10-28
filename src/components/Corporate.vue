<template>
  <div id="main">
    <input :value="message" placeholder="edit me" @input="sendmessage" />
    <p>Message from social is: {{ message }}</p>
  </div>
</template>

<script>
import inputMixin from "../mixins/inputMixin.js";
export default {
  mixins: [inputMixin],
  props: {
    // message: String
  },
  data() {
    return {
      // message: message
    };
  },
  computed: {},
  methods: {
    // sendmessage(event) {
    //   console.log("Corportate msg:" + event.target.value);
    //   this.$emit("sendcormessage", event.target.value);
    // }
  },
  mounted() {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>