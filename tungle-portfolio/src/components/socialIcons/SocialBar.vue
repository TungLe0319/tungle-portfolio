<template>
  <div id="socialBar" class="fixed-bottom d-none d-md-block">
    <div class="row my-3 my-md-0 justify-content-between">
      <div class="col-2  ms-2 d-flex flex-column align-items-start">
        <i><ResumeIcon /></i>
        <i> <GitHubIcon /></i>
        <i> <LinkedInIcon class="linkedIn-icon" /></i>
      </div>






      <div
        class="col-1 text-center me-1 d-flex justify-content-center align-items-center"
      >
        <a
          href="mailto:tung.le0319@gmail.com"
          target="_blank"
          class="email font-1 fs-3 text-light text-shadow"
        >
          <p v-motion-slide-left :delay="600">tung.le0319@gmail.com</p>
        </a>
      </div>
    </div>
  </div>

  <!-- SECTION FOOTER  -->
  <div class="section-bubble2 d-flex justify-content-center ">
    <div class="row justify-content-center w-75 ">
      <div class="col-12 d-flex justify-content-center icons d-md-none">
        <ResumeIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <div class="col-md-9 text-center text-light">
        <p v-motion-slide-visible-once-top :delay="300">
          Designed & Built by <b> Yours Truly</b>
        </p>
        <p v-motion-slide-visible-once-top :delay="300">
          Copyright &copy; 2023 DevOpportunitiesLLC
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

import GitHubIcon from "./GitHubIcon.vue";
import LinkedInIcon from "./LinkedInIcon.vue";
import ResumeIcon from "./ResumeIcon.vue";

export default {
  setup() {
    const scrollY = ref(0);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollY.value = window.scrollY;

        if (scrollY.value >= 9000) {
          let socialBar = document.getElementById("socialBar");
          socialBar.classList.toggle = "fixed-bottom";
        }
      });
    });

    return {};
  },
  components: { GitHubIcon, LinkedInIcon, ResumeIcon },
};
</script>

<style lang="scss" scoped>
.icons {
  font-size: 10rem !important;
}

.email {
  transform: rotate(90deg) + translateX(-10px) + translateY(-20px);
  transition: all 0.5s ease-out;
}
.email:hover {
  transform: rotate(90deg) + translateX(-30px) + translateY(-20px);
  color: turquoise !important;
  transition: all 0.5s ease-out;
}

.linkedIn-icon:after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: #fff;
}
i {
  transition: all 0.5s ease-out;
}
i:hover {
  transform: translateY(-5px);
  color: turquoise !important;
}
</style>
