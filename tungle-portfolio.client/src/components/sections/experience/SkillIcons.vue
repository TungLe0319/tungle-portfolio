<template>
  <div class="row skills-content gy-4 my-5 justify-content-center">
    <div class="col-md-12">
      <p
        v-motion-slide-visible-once-top
        :delay="600"
        class="font-1 text-warning fs-2"
      >
        Languages & Technologies
      </p>
    </div>

    <div class="row justify-content-evenly">
      <div class="col-md-4">
        <a
          v-motion-slide-visible-once-top
          :delay="300"
          href="https://github.com/TungLe0319"
          target="_blank"
        >
          <img
            src="https://raw.githubusercontent.com/TungLe0319/GithubStats/master/generated/languages.svg#gh-dark-mode-only"
            alt=" Github Lang stats"
            class="elevation-6 rounded"
          />
        </a>
      </div>
      <div class="col-md-4">
        <a
          v-motion-slide-visible-once-top
          :delay="300"
          href="https://github.com/TungLe0319"
          target="_blank"
        >
          <img
            src="https://raw.githubusercontent.com/TungLe0319/GithubStats/master/generated/overview.svg#gh-dark-mode-only"
            alt="Github Overview"
            class="elevation-6 rounded"
          />
        </a>
      </div>
    </div>

    <div class="col-md-12">
      <ul
        class="d-md-flex justify-content-between bg-dark elevation-6 p-2 py-4 navbar-list justify-content-evenly"
      >
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="list-group-item font-2 fs-5 filter-button active filter-btn rounded"
          @click="filterImages('reset', $event)"
        >
          All
        </li>
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="list-group-item font-2 fs-5 filter-button filter-btn rounded"
          @click="filterImages('lang', $event)"
        >
          Languages
        </li>
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="list-group-item font-2 fs-5 filter-button filter-btn rounded"
          @click="filterImages('tech', $event)"
        >
          Technologies
        </li>
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="list-group-item font-2 fs-5 filter-button filter-btn rounded"
          @click="filterImages('framework', $event)"
        >
          Frameworks & Libraries
        </li>
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="list-group-item font-2 fs-5 filter-button filter-btn rounded"
          @click="filterImages('database', $event)"
        >
          Databases
        </li>
      </ul>
    </div>
    <div class="image-container row g-3 justify-content-center">
      <div class="col-md-10">
        <div class="row image-container gy-4">
          <div
            class="col-6 col-md-2 image-item"
            v-for="s in skillsIcons"
            :type="s.type"
            :key="s.id"
            v-bind="$attrs"
          >
            <div class="tool-tip font-1 font-bold px-2 bg-dark text-light py-1">
              {{ s.title }}
            </div>
            <ParallaxMouse>
              <CartoonFrame v-motion-roll-visible-once-left :delay="300">
                <img class="img-fluid box3 box" :src="s.src" />
              </CartoonFrame>
            </ParallaxMouse>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-md-12 d-md-flex justify-content-around mb-4 flex-wrap"
    ></div>
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
.active {
  border-bottom: none !important;

  transition: all 1s ease;
}

.filter-button {
  position: relative;
  transition: all 1s ease;
  &:not(.active) {
    .underline {
      left: 100%;
      transition: all 1s ease;
    }
  }
}

li .filter-btn {
  position: relative;
}

li .filter-btn::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #f7d778;
  transform: scaleX(0);

  transition: transform 0.2s ease;
}

.filter-btn {
  transition: all 0.5s ease-out;
  cursor: pointer;
}
.filter-btn:hover {
  transform: scale(1.1);

  color: turquoise !important;
}

.navbar-list {
  position: relative;
  list-style: none;
  border-radius: 50em;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
  }
}

.navbar-list li {
  display: inline-block;
  cursor: pointer;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    display: block;
    margin: 4px;
  }
}

.navbar-list li.active {
  color: turquoise !important;
  font-size: 2rem;
  border-top: none;
  border-bottom: #f7d778 4px solid;
  transition: all 1s ease;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
  }
}

.navbar-list li.active::before {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 8px;
  background: #f7d778;
  border-radius: 4px;
  transition: all 0.5s ease-in-out;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    display: none;
  }
}
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
.box {
  border: solid black;
  border-color: black;
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 140px;
  transition: all 0.2s ease !important;
}
.box:hover {
  border: solid #f7d778;
  border-color: #f7d778;
}

.box3 {
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
  padding: 5px;
}
</style>
