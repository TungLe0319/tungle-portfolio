<template>
  <div class="row gy-4 mb-5  justify-content-center">
    <!-- <div class="col-md-12">
      <p
        v-motion-slide-visible-once-top
        :delay="600"
        class="font-1 text-warning fs-2"
      >
        Languages & Technologies
      </p>
    </div> -->

    <div class="row g-3 justify-content-center">
      <div class="col-md-10">
        <div class="row gy-4">
          <div
            class=" col-3  col-md-2  image-item"
            v-for="s in skillsIcons"
            :type="s.type"
            :key="s.id"
            v-bind="$attrs"
          >
            <div class="tool-tip font-1 font-bold px-2 bg-dark text-light py-1">
              {{ s.title }}
            </div>

            <img class="img-fluid skill-image" :src="s.src" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../../AppState.js";
import CartoonFrame from "../../effects/CartoonFrame.vue";
import ParallaxMouse from "../../effects/ParallaxMouse.vue";

import Riafox from "./RiaFox.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,

      skillsIcons: computed(() => AppState.skillsIcons),
      scrollToProjects() {
        window.scrollTo({
          top: document.getElementById("portfolio").offsetTop + 2250,
          left: 0,
          behavior: "smooth",
        });
      },

      filterImages(type, button) {
        // Get the list of all images
        const imageList = document.querySelectorAll(".image-item");

        const buttonList = document.querySelectorAll(".filter-button");
        // Remove the "active" class from all buttons
        buttonList.forEach((btn) => {
          btn.classList.remove("active");
        });
        button.target.classList.add("active");

        if (type !== "reset") {
          button.target.classList.add("active");
        }

        // Hide all images
        imageList.forEach((image) => {
          const skillType = image.getAttribute("type");
          if (skillType != type) {
            image.style.display = "none";
            image.style.opacity = 0;
            image.style.transform = "scale(0.1)";
          } else {
            image.style.display = "block";
          }

          if (type == "reset") {
            image.style.display = "block";
          }
        });

        // Animate the "pop up" effect
        const popDuration = 250; // 250ms
        const targetOpacity = 1; // The final opacity of the images
        let currentOpacity = 0; // The starting opacity of the images
        const targetScale = 1; // The final scale of the images
        let currentScale = 0.1; // The starting scale of the images

        const popAnimation = setInterval(() => {
          // Increment the current opacity and scale
          currentOpacity += 0.1;
          currentScale += 0.05;

          // Update the opacity and scale of the images
          imageList.forEach((image) => {
            image.style.opacity = currentOpacity;
            image.style.transform = `scale(${currentScale})`;
          });

          // Stop the animation when the target opacity and scale are reached
          if (currentOpacity >= targetOpacity && currentScale >= targetScale) {
            clearInterval(popAnimation);
          }
        }, 25); // Run the animation every 25ms
      },
    };
  },
  components: { CartoonFrame, ParallaxMouse, Riafox },
};
</script>

<style lang="scss" scoped>
.image-item:hover {
  .tool-tip {
    transform: scale(1);
    transition: transform 0.2s ease;
  }
}
.tool-tip {
  position: absolute;
  z-index: 99999 !important;
  transform: scale(0);

  border-radius: 4px;
  transition: transform 0.2s ease;
}

.skill-image{
   @media only screen and (max-width: 768px) {

  }
}
</style>
