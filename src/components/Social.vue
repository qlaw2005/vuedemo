<template>
  <div id="main">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      message: ""
    };
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