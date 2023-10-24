<template>
  <section id="experience" class="py-5 section-bubble2">
    <div class="container">
      <SkillIcons />
      <Education />
      <Dexian />
      <DevOpportunities />
      <RiaFox />
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../../AppState.js";
import CartoonFrame from "../../effects/CartoonFrame.vue";
import ParallaxMouse from "../../effects/ParallaxMouse.vue";
import ResumeComponent from "../../ResumeComponent.vue";
import CurrentlyLearning from "./CurrentlyLearning.vue";
import DevOpportunities from "./DevOpportunities.vue";
import Dexian from "./Dexian.vue";
import Education from "./Education.vue";

import RiaFox from "./RiaFox.vue";
import SkillIcons from "./SkillIcons.vue";

export default {
  setup() {
    return {
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
  components: {
    CartoonFrame,
    ParallaxMouse,
    ResumeComponent,
    RiaFox,
    DevOpportunities,
    SkillIcons,
    Education,
    Dexian,
    CurrentlyLearning,
  },
};
</script>

<style lang="scss" scoped></style>
