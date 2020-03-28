/* eslint-disable */
<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title || "Welcome to Yourstory";
      },
      immediate: true
    }
  }
};
</script>

<style>
/* ,
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title || "Welcome to Yourstory";
      },
      immediate: true
    }
  } */
</style>
