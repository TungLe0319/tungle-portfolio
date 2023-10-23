<template>
  <a v-motion-slide-top :delay="900" href="src\assets\img\TungDeveloperResume.pdf" target="_blank">
    <i
      class="mdi mdi-file-document fs-3 text-light"
      title="Resume"
    ></i>
  </a>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
i {
  transition: all 0.5s ease-out;
  font-size: 3rem !important;
  @media only screen and (max-width: 768px) {
    font-size: 4rem !important;
  }
}
i:hover {
  color: turquoise !important;
}

a:hover {
  transform: translateY(-5px);
  transition: all 0.5s ease-out;
}
a {
  transition: all 0.5s ease-out;
  //when screen is 768px OR LESS
}
</style>
