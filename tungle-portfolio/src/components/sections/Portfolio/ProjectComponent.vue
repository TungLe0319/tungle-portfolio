<template>
  <div class="row my-5 py-5 py-2 position-relative project-container">
    <!-- Render the section content based on props -->
    <div class="col-md-7">
      <a :href="projectData.link" target="_blank">
        <img
          v-motion-slide-visible-once-top
          :delay="300"
          :src="projectData.imageSrc"
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
          class="font-2 text-light text-shadow mb-1"
          v-html="projectData.description"
        >
        </span>
        <div class="font-2">
          <ul class="list-group list-group-horizontal bg-transparent">
            <li
              class="list-group-item p-0 px-2 py-2 elevation-4"
              v-for="(tech, index) in projectData.technologies"
              :key="index"
            >
              <span
                v-motion-slide-visible-once-top
                :delay="600"
                class="badge text-bg-warning"
                >{{ tech }}</span
              >
            </li>
          </ul>
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
  transform: translateX(-100px);
  transition: all 0.5s ease;
}

.project-title {
  transform: translateY(-3rem) translateX(-30rem);
  transition: all 0.5s ease;
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
