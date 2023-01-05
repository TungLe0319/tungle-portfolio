<template>

<LocomotiveScrolling1/>
  <!-- <div
    class="container-fluid hero-image text-center d-flex flex-column justify-content-center align-items-center"
  >
    <ParticleComponent />
    <div class="row justify-content-between w-100">
      <div id="heroText2" class="col-md-6 hero-text-2">
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
          Designer <b class="display-6 text-warning">&</b>
        </p>
        <p
          v-motion-slide-bottom
          :delay="1500"
          class="font-1 display-7 text-shadow"
        >
          Developer
        </p>
      </div>
      <div id="heroText" class="col-md-6 text-end text-light">
           <p
          v-motion-slide-bottom
          :delay="600"
          class=" display-6 font-1 mb-0 text-shadow"
        >
           Willing To Learn
        </p>
         <p
          v-motion-slide-bottom
          :delay="600"
          class="  display-1 font-1 mb-0 text-shadow"
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
   
    <GentleWave />
  </div> -->
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import GentleWave from "../GentleWave.vue";
import LocomotiveScrolling1 from "../LocomotiveScrolling1.vue";
import ParticleComponent from "../ParticleComponent.vue";

export default {
  props: {},
  setup(props) {
    onMounted(() => {
   
    });
   

  
    return {

    };
  },
  components: { ParticleComponent, GentleWave, LocomotiveScrolling1 },
};
</script>

<style lang="scss" scoped>




.hero-text-2 {
  transition: all 0.25s ease-out;
}
.hero-text {
  z-index: 9999;
}
.display-7 {
  font-size: 10rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 6rem;
  }
}
#heroText {
  transition: all 0.5s ease-out;
}

.test {
  transition: all 1.25s ease-out;
  transform: translateY(240px);
}
.test1 {
  transition: all 1.25s ease-out;
  transform: translateY(0px);
}
#hero {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  z-index: 0;
}
#heroVideo {
  width: 100%;
  object-fit: cover;
}
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
  background-size: cover;
background-repeat: none;  
  background-attachment: fixed;
}
}
</style>
