<template>
    <div class="row my-5">
        <div class="section-title">
          <p class="font-1 fs-2 text-warning">DevsOpportunities LLC</p>
        </div>
        <div
          class="col-md-6 d-flex justify-content-center align-items-center my-3 my-md-0"
        >
          <div
            class="rounded-circle bg-light text-center devsopportunities-image elevation-6"
          >
            <img src="../../../assets/img/LLCLogo.png" alt="LLC Logo" />
          </div>
        </div>
        <div class="col-md-6">
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 text-light darken-10 fw-bold"
          >
            2022
          </p>
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 text-light"
          >
            Company I Co-Founded with a team of 3 other developers from
            CodeWorks to do freelance work while searching for full time
            employment. I have had the opportunity to communicate with clients
            to understand their needs and requirements, and to collaborate with
            them to ensure that their goals are met.
          </p>

          <ul class="numbered nav-list">
            <li class="numbered-list-item">
              Effectively communicate technical concepts to non-technical
              stakeholders and to build strong working relationships.
            </li>
            <li class="numbered-list-item">
              Proactive in seeking feedback and making adjustments as needed to
              ensure that the final product meets the client's expectations.
            </li>
            <li class="numbered-list-item">
              While I have not had a great deal of experience working directly
              with clients, I am eager to learn and to continue developing my
              skills in this area.
            </li>
            <li class="numbered-list-item">
              Confident that with my strong technical abilities and my
              commitment to delivering high-quality work, I will be able to make
              a valuable contribution to any project.
            </li>
          </ul>

          <p class="font-1 fs-5 text-light darken-10">
            Projects & work done Listed Below
            <i
              @click="scrollToProjects()"
              class="mdi mdi-arrow-down-circle fs-1 text-light action"
            ></i>
          </p>
        </div>
        <div class="row">
          <div class="col-md-12 text-center"></div>
        </div>
      </div>
</template>


<script>
export default {
  setup(){
    return {}
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
