<template>
  <div class="row my-5 py-5 py-2 position-relative project-container">
    <!-- Render the section content based on props -->
    <div class="col-md-7   justify-content-end  d-flex ">
      <a :href="projectData.link" target="_blank">
        <img
          v-motion-slide-visible-once-top
          :delay="300"
          :src="projectData.imageSrc"
          width="600"
          height="200"
          class="img-fluid elevation-6 rounded project-image"
          alt="Project Image"
        />
      </a>
    </div>
    <div class="col-md-5 box-1 order-1">
      <div class="d-flex">
        <div class="project-title">
          <p
            v-motion-slide-visible-once-top
            :delay="600"
            class="font-1 fs-2 text-warning mt-3 mt-md-0"
          >
            {{ projectData.title }}
          </p>
        </div>
      </div>
      <div
        class="card elevation-6 p-3 border-0 bg-primary text-light project-description w-100"
      >
        <span
          v-motion-slide-visible-once-top
          :delay="600"
          class="font-2 text-light text-shadow mb-1 text-smaller"
          v-html="projectData.description"
        >
        </span>
        <div class="">
          <div
            class="list-group list-group-horizontal bg-transparent flex-wrap"
          >
            <div
              class="list-group-item text-smaller p-1 py-2 py-md-1 elevation-4 d-flex flex-wrap"
              v-for="(tech, index) in projectData.technologies"
              :key="index"
            >
              <span
                v-motion-slide-visible-once-top
                :delay="600"
                class="badge fs-6 bg-warning"
                >{{ tech }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectData: Object,
  },
  setup(props) {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.text-smaller {
  font-size: 10pt;
}
.text-bg-warning {
  background-color: #e6cb7a !important;
}
.project-image {
  transition: all 0.25s ease;
}
.project-image:hover {
  transform: translateY(-6px);
  transition: all 0.25s ease;
  filter: brightness(75%);
}

.project-container:hover .box-1 {
  transform: translateX(0);
  transition: all 0.5s ease;
}

.project-container:hover .box-1 .project-title {
  transform: translateX(0);
  transition: all 0.5s ease;
}

.box-1 {
  @media only screen and (min-width: 769px) {
    transform: translateX(-100px);
    transition: all 0.5s ease;
  }
}

.project-title {
  transform: translateY(0) translateX(0);
  transition: all 0.5s ease;

  @media only screen and (min-width: 769px) {
    transform: translateY(1rem) translateX(6rem);
  }
}

.list-group-item {
  transition: all 0.5s ease;
  cursor: pointer;
}

.list-group-item:hover {
  transition: all 0.5s ease;
  transform: translateY(-3px);
}
</style>
