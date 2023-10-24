<template>
  <div class="row mt-5  gy-3">

    <div class="col-md-6">
        <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-1 fs-2 text-warning"
      >
       Riafox
      </p>

      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-2 text-light darken-10 fw-bold"
      >
        Jan 2023 - March 2023
      </p>
      <p v-motion-slide-visible-once-top :delay="300" class="font-2 text-light">
        Assisted with several projects utilizing the <b class="text-warning"> MongoDB, Express, Angular,
        Node(MEAN)</b> stack. My primary responsibilities included implementing
        minor features and fixing bugs, but I have also had the opportunity and
        worked closely with a team and communicate effectively to achieve our
        shared goals. Despite my relatively junior role and limited time working
        with them , I gained valuable experience in working remotely and have
        been grateful for the opportunity to have been a part of their team.
        Overall, my time at RiaFox has been a great learning experience.
      </p>

      <!-- <ul class="numbered nav-list">
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="numbered-list-item"
        >
          Effectively communicated within team channels to properly pass on
          necessary changes and information regarding tasks.
        </li>
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="numbered-list-item"
        >
          Proactive in seeking feedback and asking questions as needed to ensure
          that the task I'm undertaking is well understood and meets the team's
          expectations.
        </li>
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="numbered-list-item"
        >
          While we have not had a great deal of experience working directly with
          clients, I am eager to learn and to continue developing my skills in
          this area.
        </li>
      </ul>
      -->
    </div>



    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <div
        v-motion-slide-visible-once-top
        :delay="300"
        class="card bg-transparent border-0 text-center justify-content-center d-fle"
      >
        <img
          v-motion-slide-visible-once-top
          :delay="300"
          src="https://www.riafox.com/wp-content/uploads/2018/02/Riafox_Logo_W_LR.png"
          alt="riafox logo"
          width="400"
          height="400"
          class="rounded img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
