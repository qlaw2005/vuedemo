export default {
  props: {
    message: String
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    sendmessage(event) {
      console.log("mixin" + event.target.value);
      this.$emit("sendmessage", event.target.value);
    }
  }
};
