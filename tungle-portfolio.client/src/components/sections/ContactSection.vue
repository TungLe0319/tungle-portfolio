<template>
  <section id="contact" class="py-6 section-bubble4">
    <div class="container gap-5">
      <div class="row">
        <div class="col-md-12">
          <p
            v-motion-slide-visible-once-top
            :delay="300"
            class="display-3 font-1 text-light"
          >
            Get In Touch
          </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <p
            v-motion-slide-visible-once-top
            :delay="300"
            class="font-2 fs-6 text-light"
          >
            I'm open to for full time positions and looking for new
            opportunities to contribute. <br />
            The best way to get in touch with me is by phone or LinkedIn, so
            don't hesitate contact me and talk to me about anything. <br />
            I <b>look forward</b> to discussing how we can work together!
          </p>
        </div>
        <div class="col-md-6 d-flex justify-content-around">
          <a
            v-motion-slide-visible-once-top
            :delay="300"
            href="mailto:tung.le0319@gmail.com"
            target="_blank"
            ><button class="btn bg-transparent fs-1 font-1">
              <img
                src="../../assets/img/email.gif"
                alt="Gmail Icon"
                title="tung.le0319@gmail.com"
                width="200"
                height="200"
              /></button
          ></a>
          <a
            v-motion-slide-visible-once-top
            :delay="300"
            href="tel:2088905308"
            target="_blank"
            data-title="2088905308"
          >
            <button class="btn bg-transparent fs-1 font-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2936/2936151.png"
                alt="Phone Icon"
                width="100"
                height="100"
              /></button
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.my-6 {
  margin-top: 8rem;
  margin-bottom: 15rem;
}
.py-6 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
