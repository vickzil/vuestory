/* eslint-disable */
<template>
  <div>
    <header class="support-us">
      <div id="headerSlider" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/img/c.jpg" />
            <div class="carousel-caption item-one animated bounceInUp">
              <h1 class>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="body-content" id="story">
      <ContactComponent />
    </section>
  </div>
</template>

<script>
import ContactComponent from "../components/ContactComponent";

export default {
  name: "Contact",
  components: {
    ContactComponent
  }
};
</script>

<style></style>
