<template>
  <div class="row my-5 gy-3">
    <div class="section-title">
      <p class="font-1 text-warning fs-2">Currently Learning</p>
    </div>

    <div class="col-md-6">
      <div
        v-motion-slide-visible-once-bottom
        :delay="300"
        class="card border-0 elevation-6 text-center"
      >
        <img
          src="https://fireship.io/courses/react-next-firebase/img/featured.png"
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
        The
        <a href="https://fireship.io/">
          <img
            src="https://ia802200.us.archive.org/10/items/github.com-fireship-io-nft-art-generator_-_2022-01-22_14-51-40/cover.jpg"
            alt="fireship.io logo"
            width="40"
          />
          <b class="text-light darken-10"> Fireship.io's </b>
        </a>
        Next.js and Firebase course is a learning opportunity that focuses on
        teaching developers how to use two popular technologies for building
        modern web applications. Next.js is a framework for building
        server-rendered React applications, and Firebase is a suite of tools for
        building and deploying applications in the cloud.The course covers
        topics such as server-side rendering, authentication, data storage, and
        deployment, among others.
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
