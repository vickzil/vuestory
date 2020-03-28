/* eslint-disable */
<template>
  <nav class="naviagtions">
    <div class="logo">
      <router-link to="/vuestory/">
        <img src="../assets/img/favic.png" />
      </router-link>
    </div>
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>

    <ul class="nav-group">
      <li>
        <router-link to="/vuestory" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/vuestory/about">About</router-link>
      </li>
      <li>
        <router-link to="/vuestory/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style></style>
