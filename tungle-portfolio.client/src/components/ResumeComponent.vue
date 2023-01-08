<template>
 <div class="test d-flex justify-content-center">
    <video v-if="inViewport" src="../assets/img/Resume.mp4" autoplay   class="video rounded elevation-6"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inViewport: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkInViewport);
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkInViewport);
  },
  methods: {
    checkInViewport() {
      // Use IntersectionObserver API to check if the element is in the viewport
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.inViewport = true;
        } else {
          this.inViewport = false;
        }
      });
      observer.observe(this.$el);
    }
  }
}
</script>





<style lang="scss" scoped>
.test{
  transform: scale(3);
  margin-top: 500px;
  margin-bottom: 500px;
}


.video{
  width: 290px;
 height: 370px;
  
}
</style>
