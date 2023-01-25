<template>
 <div class="row d-flex justify-content around">
        <div class="col-md-12 d-flex justify-content-between">
          <div class="section-title">
            <p
              v-motion-slide-visible-once-top
              :delay="300"
              class="font-1 text-warning fs-2"
            >
              Education
            </p>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center ">
          <div class="card-1">
            <a
             v-motion-slide-visible-once-top  :delay="300"
              href="https://boisecodeworks.com/courses/immersive-full-stack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/94322600?s=280&v=4"
                alt="full stack immersive image"
                title="full stack immersive"
              />
            </a>
          </div>
          <div class="card-1">
            <a
             v-motion-slide-visible-once-top  :delay="300"
              href="https://boisecodeworks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbcw.blob.core.windows.net%2Fpublic%2Fimg%2F8600856373152463&f=1&nofb=1&ipt=7556aa255fdb3f0a77caa1be29b0f23e5f3d403a76f098fca104b1911e9c485b&ipo=images"
                alt="boise codeworks image"
                title="Boise Codeworks"
                width="175"
                height="175"
                class=""
              />
            </a>
          </div>
        </div>

        <div class="col-md-6 align-items-center">
          <p
            v-motion-slide-visible-once-top
            :delay="300"
            class="font-2 text-light darken-10 fw-bold"
          >
            FULL STACK SOFTWARE DEVELOPMENT CERTIFICATION,
          </p>
          <p
            v-motion-slide-visible-once-top
            :delay="300"
            class="font-2 text-light fw-bold darken-20"
          >
            2022 - Boise CodeWorks, Boise, ID
          </p>
          <p
            v-motion-slide-visible-once-top
            :delay="300"
            class="font-2 text-light"
          >
            An immersive full stack software development program that provided
            over 500 hours of coding experience across multiple technology
            stacks.
          </p>

        </div>
      </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
