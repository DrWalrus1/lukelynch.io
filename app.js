let app = Vue.createApp({
    data() {
      return {
        message: 'Hello, World!',
        title: "This is a title!",
        count: 0
      }
    }
});

app.mount("#app");