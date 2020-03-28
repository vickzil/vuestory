/* eslint-disable */
<template>
  <div>
    <CarouselBanner />
    <section class="body-content" id="story">
      <AboutComponent />
      <Stories />
      <ContactComponent />
    </section>
  </div>
</template>

<script>
import CarouselBanner from "../components/CarouselBanner";
import AboutComponent from "../components/AboutComponent";
import Stories from "../components/Stories";
import ContactComponent from "../components/ContactComponent";

export default {
  name: "Home",
  components: {
    CarouselBanner,
    AboutComponent,
    Stories,
    ContactComponent
  },
  data() {
    return {};
  }
};
</script>


<style scoped>
</style>
