<template>
  <!-- Your section content goes here -->

  <div
    class="container-fluid hero-image text-center d-flex flex-column justify-content-center align-items-center"
  >
    <section
      class="locomotive-section container-fluid "
      :style="{ transform: `translateY(-${scrollY}px)` }"
    >
      <div class="row  w-100     ">
        <div id="heroText2" class="col-md-6 hero-text-2 mt-5     ">
          <p
            v-motion-slide-bottom
            :delay="600"
            class="text-start display-6 ms-5 font-1 mb-0 text-shadow"
          >
            creative
          </p>
          <p
            v-motion-slide-bottom
            :delay="1000"
            class="font-1 display-7 mb-0 text-shadow"
          >
            Design <b class="display-1 text-warning">&</b>
          </p>
          <p
            v-motion-slide-bottom
            :delay="600"
            class="text-start display-6 ms-5 font-1 mb-0 text-shadow"
          >
            collaborative
          </p>
          <p
            v-motion-slide-bottom
            :delay="1500"
            class="font-1 display-7 text-shadow"
          >
            Development
          </p>
        </div>
        <div id="heroText" class="col-md-6 text-end text-light  d-xl-flex flex-xl-column   pe-5 justify-content-xl-center  ">
          <p
            v-motion-slide-bottom
            :delay="600"
            class="display-6 font-1 mb-0 text-shadow"
          >
            Open to Learning
          </p>
          <p
            v-motion-slide-bottom
            :delay="600"
            class="display-1 font-1 mb-0 text-shadow"
          >
            Anything
          </p>
          <p
            v-motion-slide-bottom
            :delay="1000"
            class="font-1 display-1 mb-0 text-shadow"
          >
            Anytime
          </p>
          <p
            v-motion-slide-bottom
            :delay="1500"
            class="font-1 display-1 text-shadow"
          >
            Anywhere
          </p>
        </div>
      </div>
    </section>
    <ScrollDownIcon />
    <GentleWave />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import GentleWave from "../effects/GentleWave.vue";
import ScrollDownIcon from "../socialIcons/ScrollDownIcon.vue";

export default {
  name: "LocomotiveSection",
  setup() {
    // Create a reactive data model for the scroll position
    const scrollY = ref(0);
    // Add a scroll listener to update the scroll position
    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollY.value = window.scrollY;
      });
    });
    // Return the scroll position to the component
    return {
      scrollY,
    };
  },
  components: { GentleWave, ScrollDownIcon },
};
</script>

<style lang="scss" scoped>
.pug-img {
  position: absolute;
  width: auto;

  transform: translateY(450px);
  height: 300px;
}

.locomotive-section {
  transition: transform 0.75s ease;
}

.hero-text-2 {
  transition: all 0.25s ease-out;
}

.display-7 {
  font-size: 10rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 6rem;
  }
}

.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
