<template>
  <div class=" ">
<div class="d-flex flex-column justify-content-end align-items-end">

  <button  @click="inViewport = !inViewport" class="btn bg-dark text-light font-1 fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Resume 
  </button>
</div>

    <div class="test d-flex justify-content-center">
   
   <div class="collapse" id="collapseExample">
   
      
       <video @click="readFile()" v-if="inViewport" src="../assets/img/Resume.mp4" autoplay   class="video rounded elevation-6 selectable"></video>
    
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
readFile() {
     window.open('src/assets/img/Dev_resume.pdf', '_blank') //to open in new tab
   }
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
