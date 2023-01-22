<template>
  <div class="row my-5 gy-3">
    <div class="section-title">
      <p class="font-1 text-warning fs-2">RiaFox</p>
    </div>

    <div class="col-md-6">
      <div
        v-motion-slide-visible-once-bottom
        :delay="300"
        class="card bg-transparent border-0  text-center"
      >
        <img
          src="https://www.riafox.com/wp-content/uploads/2018/02/Riafox_Logo_W_LR.png"
          alt="fireship.io react/firebase Image"
          class="rounded img-fluid"
        />
      </div>
    </div>
    <div class="col-md-6">
      <p
        v-motion-slide-visible-once-bottom
        :delay="300"
        class="font-2 text-light"
      >
     
       As a Contracted Software Developer at RiaFox, I have been working on a variety of projects utilizing the MEAN stack. My primary responsibilities have included implementing minor features and fixing bugs, but I have also had the opportunity to work closely with a team and communicate effectively to achieve our shared goals. Despite my relatively junior role, I have gained valuable experience in working remotely and have been grateful for the opportunity to learn and grow as a developer. Overall, my time at RiaFox has been a great learning experience and I look forward to continuing to contribute to the success of the company.
      </p>
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
