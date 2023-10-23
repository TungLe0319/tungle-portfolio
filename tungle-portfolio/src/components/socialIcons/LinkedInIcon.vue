<template>
  <a
    v-motion-slide-top
    :delay="300"
    href="https://www.linkedin.com/in/tung-le0319/"
    class=""
    target="_blank"
  >
    <i class="mdi mdi-linkedin fs-3 text-light" title="LinkedIn"></i>
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
}
</style>
