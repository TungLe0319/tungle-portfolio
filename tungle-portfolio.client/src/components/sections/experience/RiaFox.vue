<template>
  <div class="row my-5 gy-3">
    <div class="section-title">
      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-1 text-warning fs-2"
      >
        RiaFox
      </p>
    </div>

    <div class="col-md-6">
      <div
        v-motion-slide-visible-once-top
        :delay="300"
        class="card bg-transparent border-0 text-center"
      >
        <img
          v-motion-slide-visible-once-top
          :delay="300"
          src="https://www.riafox.com/wp-content/uploads/2018/02/Riafox_Logo_W_LR.png"
          alt="fireship.io react/firebase Image"
          class="rounded img-fluid"
        />
      </div>
    </div>
    <div class="col-md-6">
      <p v-motion-slide-visible-once-top :delay="300" class="font-2 text-light">
        As a Contracted Software Developer at RiaFox, I have been working on a
        variety of projects utilizing the MEAN stack. My primary
        responsibilities have included implementing minor features and fixing
        bugs, but I have also had the opportunity to work closely with a team
        and communicate effectively to achieve our shared goals. Despite my
        relatively junior role, I have gained valuable experience in working
        remotely and have been grateful for the opportunity to learn and grow as
        a developer. Overall, my time at RiaFox has been a great learning
        experience and I look forward to continuing to contribute to the success
        of the company.
      </p>

      <ul class="numbered nav-list">
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
      <details>
        <summary
          v-motion-slide-visible-once-top
          :delay="300"
          class="font-1 text-warning fs-4"
        >
          Contributions
        </summary>

        <blockquote>
          <ul class="numbered nav-list">
            <li
              v-motion-slide-visible-once-top
              :delay="300"
              class="numbered-list-item"
            >
              Incorporated Microsoft-specific CSS to ensure consistent
              presentation of email templates across various clients.
            </li>
            <li
              v-motion-slide-visible-once-top
              :delay="300"
              class="numbered-list-item"
            >
              Carried out user acceptance testing to assess the user's
              experience and note out any missing functionality or bugs..
            </li>
          </ul>
        </blockquote>
      </details>
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
