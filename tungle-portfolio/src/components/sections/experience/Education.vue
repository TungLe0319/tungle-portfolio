<template>
  <div class="my-5 pb-md-5 pb-3 row d-flex ">
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
    <div class="col-md-6 d-flex align-items-center justify-content-center mb-3 mb-md-0">
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
        class="font-1 fs-2 text-warning"
      >
       Boise CodeWorks
      </p>

      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-2 text-light darken-10 fw-bold"
      >
        August 2022 - December 2022
      </p>
      <p v-motion-slide-visible-once-top :delay="300" class="font-2 text-light">
       A comprehensive full-stack software development course offering more than 500 hours of immersive, hands-on coding experience guided by experienced mentors. During the program, I had the opportunity to collaborate in groups and work independently on diverse projects, enhancing my expertise in technologies such as <b class="text-warning">HTML5</b>, <b class=" text-warning">CSS3</b>, <b class=" text-warning">JavaScript ES6</b>, <b class=" text-warning">Web APIs</b>, <b class=" text-warning">HTTP</b>, <b class=" text-warning">JavaScript frameworks</b>, <b class=" text-warning">Node.js</b>, <b class=" text-warning">.NET Core</b>, <b class=" text-warning">C#</b>, <b class=" text-warning">SQL</b>, <b class=" text-warning">MongoDB</b>, and agile methodologies like <b class=" text-warning"> Scrum</b>.

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
