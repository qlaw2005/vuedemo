<template>
  <div style="width: 120px">
    <img :src="config.url" />
    <!-- <img src="./logo.png" /> -->
  </div>
</template>

<script>
export default {
  props: {
    config: Object
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>