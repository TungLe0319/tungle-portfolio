<template>
  <section id="portfolio" class="py-5 section-bubble4">
    <div class="container">
      <div class="section-title">
        <h1
          v-motion-slide-visible-once-top
          :delay="300"
          class="font-1 text-light"
        >
          Portfolio
        </h1>
        <h4
          v-motion-slide-visible-once-top
          :delay="300"
          class="font-1 text-warning"
        >
          Some of these projects are hosted on render and so can take up a
          minute or two to load.
        </h4>
      </div>

      <div class="text-white" v-for="p in projects">
        <ProjectComponent :projectData="p" :key="p.title" />
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../../AppState.js";
import ProjectComponent from "./ProjectComponent.vue";

export default {
  props: {},
  setup(props) {
    return {
      projects: computed(() => AppState.portfolioProjects),
    };
  },
  components: { ProjectComponent },
};
</script>

<style lang="scss" scoped>
.devProjects {
  //when screen is 768px OR LESS
  @media only screen and (max-width: 1400px) {
    padding-top: 200px;
  }
}
.devsopportunities-image {
  height: 100px;
  width: 100px;
  img {
    height: 100px;
    width: 100px;
  }
}

.scene {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  perspective: 800px;

  .card {
    position: relative;
    width: 240px;
    height: 300px;
    color: white;
    cursor: pointer;
    transition: 1s ease-out-in-out;
    transform-style: preserve-3d;

    &:hover {
      transform: rotateY(0.5turn);
    }

    .card__face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transition: 1s ease-out-in-out;
      -webkit-box-reflect: below 0
        linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

      img {
        width: 240px;
        height: 300px;
        object-fit: cover;
      }

      &--back {
        transform: rotateY(0.5turn);
      }
    }
  }
}

.archived-project-card {
  transition: all 0.25s ease-out;
}
.archived-project-card:hover {
  transform: translateY(-10px) !important;
  filter: brightness(120%);
  cursor: pointer;
}
.mt-6 {
  margin-top: 12rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
  }
}
.my-6 {
  margin-top: 17rem;
  margin-bottom: 15rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
}

img {
  transition: all 0.5s ease-out;
}

img:hover {
  transition: all 0.5s ease-out;
  filter: brightness(120%);

  cursor: pointer;
  //when screen is 768px OR LESS
}

.project-description {
  left: -80px;
  position: absolute;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    position: static;
    background-color: rgba(27, 82, 95, 0.534) !important;
    backdrop-filter: blur(1px);
    transform: scale(0.5);
  }
}
.project-description-flip {
  position: absolute;
  left: 80px;
  @media only screen and (max-width: 768px) {
    position: static;
    background-color: rgba(27, 82, 95, 0.534) !important;
    backdrop-filter: blur(1px);
    transform: scale(0.5);
  }
}
</style>
