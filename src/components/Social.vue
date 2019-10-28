<template>
  <div id="main">
    <input :value="message" placeholder="edit me" @input="sendmessage" />
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
import inputMixin from "../mixins/inputMixin.js";
export default {
  mixins: [inputMixin],
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>