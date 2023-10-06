<template>
  <div class="row my-5">
    <div class="section-title">
      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-1 fs-2 text-warning"
      >
        US Navy - Contracted under Dexian
      </p>
    </div>
    <div
      class="col-md-6 d-flex flex-column justify-content-center align-items-center my-3 my-md-0"
    >
      <div
        v-motion-slide-visible-once-top
        :delay="300"
        class="devsopportunities-image"
      >
        <img
          v-motion-slide-visible-once-top
          :delay="300"
          src="https://imgs.search.brave.com/lsYZlcYBG_O9ZfLQq12aU8pYAk7mXYRMkvA_folL8NQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXF1aW5peC5jb20v/Y29udGVudC9kYW0v/ZXF4Y29ycC9lbl91/cy9pbWFnZXMvcGFy/dG5lci1kaXJlY3Rv/cnkvMTkwMV9ncm91/cC9sb2dvLnBuZw"
          alt="LLC Logo"
        />
      </div>
      <div class="d-flex justify-content-center"></div>
    </div>
    <div class="col-md-6">
      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-2 text-light darken-10 fw-bold"
      >
        April 2023 - October 2023
      </p>
      <p v-motion-slide-visible-once-top :delay="300" class="font-2 text-light">
   As an <strong> Enterprise Service Desk Specialist</strong> at 1901 Group, I played a pivotal role in providing technical support to end-users, showcasing my expertise as a DoD 8570 Certified professional. My responsibilities encompassed resolving a diverse range of technical issues, including account, internet, software, and hardware support, for various computer systems, including laptops, desktops, and network printers.

One of my significant achievements is my CompTIA Security+ Certification, which validates my proficiency in cybersecurity. You can find my certification details here for reference.

Working within the challenging environment of the Navy Intranet, which boasted over 700,000 users, I served as the first line of communication for addressing issues and responding to incidents promptly. This experience sharpened my ability to manage high-stress situations and contribute effectively to a large user base.
      </p>

      <ul class="numbered nav-list">
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="numbered-list-item"
        >
          Effectively communicated with clients in regular meet ups to build
          strong working relationships and trust.
        </li>
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="numbered-list-item"
        >
          Proactive in seeking feedback and making adjustments as needed to
          ensure that the final product meets the client's expectations.
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

      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-1 fs-5 text-light darken-10"
      >
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
  setup() {
    return {
      scrollToProjects() {
        window.scrollTo({
          top: document.getElementById("portfolio").offsetTop + 2250,
          left: 0,
          behavior: "smooth",
        });
      },
    };
  },
};
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
  flex: auto;
  img {
    height: 300px;
    width: 400px;
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
