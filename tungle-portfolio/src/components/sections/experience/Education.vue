<template>
  <div class="mt-5 row d-flex justify-content around">
    <div class="col-md-12 d-flex justify-content-between">
    <div class="section-title my-5">
        <h1
          v-motion-slide-visible-once-top
          :delay="300"
          class="font-1 text-light"
        >
         Education & Experience
        </h1>

      </div>
    </div>
    <div class="col-md-6 d-flex justify-content-center mb-3 mb-md-0">
      <div class="card-1">
        <a
          v-motion-slide-visible-once-top
          :delay="300"
          href="https://boisecodeworks.com/courses/immersive-full-stack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/94322600?s=280&v=4"
            alt="full stack immersive image"
            title="full stack immersive"
            class="image"
          />
        </a>
      </div>
    </div>

    <div class="col-md-6 align-items-center ">
      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-2 text-light darken-10 fw-bold"
      >
        FULL STACK SOFTWARE DEVELOPMENT
      </p>
      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-2 text-light fw-bold darken-20"
      >
        2022 - Boise CodeWorks, Boise, ID
      </p>
      <p v-motion-slide-visible-once-top :delay="300" class="font-2 text-light">
        An immersive full stack software development program that provided over
        500 hours of coding experience across multiple technology stacks.
      </p>
    </div>
  </div>








  <!-- <div class="mt-5 row d-flex justify-content around ">
    <div class="col-md-6 d-flex justify-content-center  mb-3 mb-md-0">
      <div class="card-1">
        <a
          v-motion-slide-visible-once-top
          :delay="300"
          href="https://www.comptia.org/"
          target="_blank"
        >
          <img
            src="../../../assets/img/SecurityPlusLogo.jpg"
            alt="comptia"
            title="compTIA Security+"
            class="rounded-circle image"
            width="155"
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
        CompTIA Security+
      </p>
      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-2 text-light fw-bold darken-20"
      >
        July 24, 2022 - July 24, 2026
      </p>
      <p v-motion-slide-visible-once-top :delay="300" class="font-2 text-light">
        global certification that validates the baseline skills necessary to
        perform core security functions compliant with ISO 17024 standards and
        approved by the U.S. DoD to meet directive 8140/8570.01-M requirements.
      </p>
      <a
        href="https://www.certmetrics.com/comptia/public/verification.aspx/"
        target="_blank"
        class="text-warning fs-5"
      >
        Verify Certificate with Code: SQ8PPKPQMJQQ15CB
      </a>
    </div>
  </div> -->
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.image {
  @media only screen and (max-width: 768px) {
    width: 125px;
  }
}
</style>
