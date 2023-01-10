<template>
  <div class="">

  <button  @click="inViewport = !inViewport" class="btn bg-dark text-light font-1 fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Resume 
  </button>

    <div class="test d-flex justify-content-center">
   
   <div class="collapse" id="collapseExample">
     <div class="card">
      
       <video v-if="inViewport" src="../assets/img/Resume.mp4" autoplay   class="video rounded elevation-6"></video>
     </div>
   </div>
   
   
   
   
     </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      inViewport: false
    }
  },
 
  methods: {

  }
}
</script>





<style lang="scss" scoped>

video {
  /* override other styles to make responsive */
  width: 100%    !important;
  height: auto   !important;
}


</style>
