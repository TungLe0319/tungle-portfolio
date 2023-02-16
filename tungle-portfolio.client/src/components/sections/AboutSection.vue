<template>
  <section id="about" class="about py-5 mt-0 section-bubble1 text-light font-1">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div

          class="section-title display-3"
        >
          <h1 class=" "
           v-motion-slide-visible-once-top :delay="600"
          >About me</h1>
        </div>
      </div>

      <div class="row justify-content-center" ref="container">
        <div class="col-md-4 d-flex justify-content-center">
          <div
            v-motion-slide-visible-once-top
            :delay="600"
            class="card-container"
          >
            <div class="image-card perspective-left">
              <div class="box box3">
                <div class="oddboxinner elevation-6"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-8 pt-4 pt-lg-0 content px-md-5 d-flex align-items-center"
        >
          <p
            v-motion-slide-visible-once-top
            :delay="300"
            class="px-md-5 font-2 text-start about-me-text long-paragraph"
          >
            Hi there! I came from a background of kitchens and customer service, I discovered my passion for building things with code.
            <br>
            <br>
            I first came to know about programming & software development in 2021  when I heard from a friend who had recently undertaken a full-stack immersive bootcamp offered by Boise CodeWorks and recommended it to me, I have been working in kitchens and the customer service field for all of my professional working career and this was a chance at something I've been interested in but never pursued.
            <br>
            <br>
            After a month of self-teaching with the pre-course work I knew this was what I wanted to continue to do and learn. So I  entered  CodeWorks ready to  put my heart and soul into it. I was coding every day, late into the night and on weekends. I was eating, sleeping, breathing code and I loved it.
            <br>
            <br>
            Since Graduating fully completing the course 100% I have grown as a developer, working as a contracter and doing freelance work for customers, that have helped raise my expectations and standards I set formyself with building web applications
            <br>
            <br>
            I'm still currently seeking a full-time role where I can contribute my skills in coding and business to help achieve any company goals while also building my skills as a developer and a team member.
            <br>
            <br>

             <!-- in web development
            sparked my interest in the field, and since then I've been working
            hard to build my skills in both front-end and back-end
            development.My time at CodeWorks has left me with a strong
            foundation and a strong desire to keep learning and improving. I am
            <b class="text-light darken-10">grateful</b> for the education and
            opportunities I received at CodeWorks, and I am excited to continue
            learning and growing wherever I am because I know
            <b class="text-light darken-10">ANYTHING, ANYTIME & ANYWHERE </b> is
            a chance to learn and grow. When I'm not working, you can find me
            walking my dog , hiking, drawing something, working out or
            experimenting with new technologies. I am creative and a
            problem-solver by heart and thrive on finding solutions to complex
            challenges and creating beautiful works. -->
          </p>
        </div>
      </div>

      <div class="row my-5 justify-content-center">
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0"
        >
          <p
            v-motion-slide-visible-once-top
            :delay="600"
            class="font-1 fs-4 text-warning"
          >
            Current Favorite Song
          </p>
          <iframe
            v-motion-slide-visible-once-top
            :delay="600"
            class="elevation-6"
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            as="font"
            rel="preload"
          >
          </iframe>
        </div>
        <div class="col-md-6 text-center">
          <p
            v-motion-slide-visible-once-top
            :delay="600"
            class="font-1 fs-4 text-warning"
          >
            Creatures I'd die for
          </p>
          <div class="d-md-flex justify-content-around p-2">
            <img
              v-motion-slide-visible-once-top
              :delay="600"
              src="../../assets/img/Coco.png"
              alt="image of a dog wearing bumblee bee hat"
              width="240"
              height="240"
              class="elevation-6 rounded mb-4 mb-md-0 pets"
            />
            <img
              v-motion-slide-visible-once-top
              :delay="600"
              src="../../assets/img/Goblin.png"
              alt="close up image of a cat"
              width="240"
              height="240"
              class="elevation-6 rounded pets"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <BlockQuote/> -->

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p
            v-motion-slide-visible-once-top
            :delay="600"
            class="font-1 fs-4 text-warning"
          >
            Some of my artwork
          </p>
          <p
            v-motion-slide-visible-once-top
            :delay="600"
            class="font-2 fs-6 text-light text-center"
          >
            Since childhood I've appreciated art as a creative outlet , always
            in my pottery or art class making things. I especially love drawing
            mandalas as a way of relaxation that allows me to express myself and
            explore new ideas. Having a background in art as helped me develop
            attention to detail, problem-solving, and the ability to visualize
            and communicate solutions to complex problems and to communicate
            more effectively with colleagues and clients.My artwork is a source
            of personal satisfaction and pride, which aids me to maintaining
            motivation and a positive outlook in my career and life.
          </p>
        </div>

        <div class="d-flex flex-wrap justify-content-around">
          <div v-motion-slide-visible-once-top :delay="600" cla1s="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/SunflowerStar.png"
                alt="sunflowerstar"
                class="procreate-art"
              />
            </ParallaxMouse>
          </div>
          <div v-motion-slide-visible-once-top :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/Newt.png"
                alt="Trex"
                class="procreate-art"
              />
            </ParallaxMouse>
          </div>
          <div v-motion-slide-visible-once-top :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/CosmicWolf.png"
                alt="CosmicWolf"
                class="procreate-art perspective-right"
              />
            </ParallaxMouse>
          </div>
          <div v-motion-slide-visible-once-top :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/Mandala1.png"
                alt="Mandala"
                class="procreate-art perspective-left"
              />
            </ParallaxMouse>
          </div>
          <div v-motion-slide-visible-once-top :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/Mandala2.png"
                alt="Mandala 2"
                class="procreate-art perspective-right"
              />
            </ParallaxMouse>
          </div>

          <div v-motion-slide-visible-once-top :delay="600" class="">
            <ParallaxMouse>
              <img
                src="../../assets/img/Procreate/Turtle.png"
                alt="Turtle"
                class="procreate-art perspective-left"
              />
            </ParallaxMouse>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useParallax } from "@vueuse/core";
import { onMounted, ref, watchEffect } from "vue";
import ParallaxMouse from "../effects/ParallaxMouse.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    const container = ref(null);
    useParallax(container);

    // Use an intersection observer to call the typeWriter function when the element comes into view

    onMounted(() => {});

    watchEffect(() => {});

    return {
      editable,
      container,
    };
  },
  components: { ParallaxMouse },
};
</script>

<style lang="scss" scoped>
.pets {
  object-fit: cover;
}
.about-me-text {
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
}
.procreate-art {
  width: auto;
  height: 300px;
  cursor: pointer;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    height: 250px;
  }
}

.procreate-art:hover {
  transform: scale(1.01);
  transition: all 0.5s ease;
}
.box {
  background-image: url("../../assets/img/Tungle/TungPortrait.jpg");
  border: solid black;
  border-color: black;
  background-position: center;
  background-size: cover;
}

.box3 {
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
}

.oddboxinner {
  height: 500px;
  margin: 15px;
  transform: rotate(-2deg);
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    height: 375px;
      transform: rotate(0deg);
  }
}

.image-card {
  width: 440px;
  height: 560px;
  padding: 8px;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  background: url("https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg");
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    width: 340px;
    height: 422px;
    padding: 4px;
  }
}

.perspective-left {
  transform: perspective(1500px) rotateY(15deg);
  transition: transform 1s ease 0s;
}

.perspective-left:hover {
  transform: perspective(3000px) rotateY(5deg);
}

.perspective-right {
  transform: perspective(1500px) rotateY(-15deg);
  transition: transform 1s ease 0s;
}

.perspective-right:hover {
  transform: perspective(3000px) rotateY(-5deg);
}
</style>
