<template>
    <div class="row my-5">
        <div class="section-title">
          <p
            v-motion-slide-visible-top
                :delay="300"
          class="font-1 fs-2 text-warning">DevOpportunities LLC</p>
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-items-center my-3 my-md-0"
        >
          <div
            v-motion-slide-visible-top
                :delay="300"
            class="rounded-circle bg-light text-center devsopportunities-image elevation-6 mb-4"
          >
            <img
              v-motion-slide-visible-top
                :delay="300"
            src="../../../assets/img/LLCLogo.png" alt="LLC Logo" />

          </div>
             <div class="d-flex  justify-content-center">
          <a
            v-motion-slide-visible-once-top
            :delay="300"
          href="https://www.linkedin.com/in/daniel-le97/">
            <img src="https://avatars.githubusercontent.com/u/107774403?v=4" alt="Daniel photo" width="100" class="rounded-circle elevation-6 hover-image " title="Daniel Le">
          </a>
          <a
            v-motion-slide-visible-once-top
            :delay="300"
          href="https://www.linkedin.com/in/tri-le1122/">
            <img src="https://avatars.githubusercontent.com/u/107815260?v=4" alt="Tri photo" width="100" class="rounded-circle elevation-6 hover-image mx-3" title="Tri Le">
          </a>
          <a
            v-motion-slide-visible-once-top
            :delay="300"
          href="https://www.linkedin.com/in/molly-nettleton/">
            <img src="https://avatars.githubusercontent.com/u/108630829?v=4" alt="Molly photo" width="100" class="rounded-circle elevation-6 hover-image " title="Molly Nettleton">
          </a>
           </div>

        </div>
        <div class="col-md-6">
          <p
            v-motion-slide-visible-once-top
            :delay="300"
            class="font-2 text-light darken-10 fw-bold"
          >
            2022
          </p>
          <p
            v-motion-slide-visible-once-top
            :delay="300"
            class="font-2 text-light"
          >
        Together with a team of 3 other developers, I co-founded <b class="text-warning">DevOpportunities</b> as a way to gain experience in project management, technical expertise, and professional networking while searching for full-time employment. We've had the pleasure of working with clients on multiple projects, with our most notable one being the design, development, and deployment of the website for  <a href="https://samadhiyogaidaho.com/#/" target="_blank" class="text-warning"><b>SamadhiYogaIdaho</b></a> which has  further details below.

          </p>

          <ul class="numbered nav-list">
            <li
              v-motion-slide-visible-once-top
            :delay="300"
            class="numbered-list-item">
              Effectively communicated with clients in regular meet ups to build strong working relationships and trust.
            </li>
            <li
              v-motion-slide-visible-once-top
            :delay="300"
            class="numbered-list-item">
              Proactive in seeking feedback and making adjustments as needed to
              ensure that the final product meets the client's expectations.
            </li>
            <li
              v-motion-slide-visible-once-top
            :delay="300"
            class="numbered-list-item">
              While we have not had a great deal of experience working directly
              with clients, I am eager to learn and to continue developing my
              skills in this area.
            </li>

          </ul>

          <p
            v-motion-slide-visible-once-top
            :delay="300"
          class="font-1 fs-5 text-light darken-10">
            Projects & work done Listed Below
            <i
              @click="scrollToProjects()"
              class="mdi mdi-arrow-down-circle fs-1 text-light action"
            ></i>
          </p>
        </div>

      </div>
</template>


<script>
export default {
  setup(){
    return {
       scrollToProjects() {
        window.scrollTo({
          top: document.getElementById("portfolio").offsetTop + 2250,
          left: 0,
          behavior: "smooth",
        });
      },
    }
  }
}
</script>


<style lang="scss" scoped>


ul .numbered {
  counter-reset: index;
  padding: 0;
}

/* List element */
li.numbered-list-item {
  counter-increment: index;
  display: flex;
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;
  color: #f8fcdb;
  font-family: "Montserrat", sans-serif;
}

/* Element counter */
li.numbered-list-item::before {
  content: counters(index, ".", decimal-leading-zero);
  font-size: 1.5rem;
  text-align: right;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  background-image: linear-gradient(to bottom, aquamarine, orangered);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Element separation */
li.numbered-list-item + li.numbered-list-item {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.devsopportunities-image {
  height: 300px;
  width: 300px;
  img {
    height:300px;
    width: 300px;
  }
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
    img {
      height: 200px;
      width: 200px;
    }
  }
}

</style>
