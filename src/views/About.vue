/* eslint-disable */
<template>
  <div>
    <!-- About us -->
    <header class="support-us">
      <div id="headerSlider" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/img/b.jpg" />
            <div class="carousel-caption item-one animated bounceInUp">
              <h1 class>About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="body-content" id="story">
      <AboutComponent />
    </section>
  </div>
</template>

<script>
import AboutComponent from "../components/AboutComponent";

export default {
  name: "About",
  components: {
    AboutComponent
  }
};
</script>

<style></style>
