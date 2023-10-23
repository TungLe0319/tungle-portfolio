<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom px-3">
    <div class=" d-none d-md-flex me-5">
      <p class="mb-0 font-1 fs-3 text-light">Tung Le</p>
      <p class="mb-0 ms-4 font-1 fs-3 text-light">SoftWare Developer</p>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <button @click="scrollTo(1)" class="btn text-light font-1 fs-4">
            About
          </button>
        </li>

        <li>
          <button @click="scrollTo(3)" class="btn text-light font-1 fs-4">
            Portfolio
          </button>
        </li>
        <li>
          <button @click="scrollTo(4)" class="btn text-light font-1 fs-4">
            Contact
          </button>
        </li>
        <li>
          <a
            href="https://www.canva.com/design/DAFR_BK6TVg/KGT7RQJMqdw0ekC11HV-IQ/view?utm_content=DAFR_BK6TVg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            class="btn text-light font-1 fs-4"
          >
            Resume
          </a>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
    </div>
    <ProgressBar />
  </nav>
</template>

<script>
import ProgressBar from "./effects/ProgressBar.vue";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {});

    return {
      scrollTo(x) {
        // console.log(x);
        let elementId;
        if (x == 1) {
          elementId = "about";
        } else if (x == 2) {
          elementId = "experience";
        } else if (x == 3) {
          elementId = "portfolio";
        } else if (x == 4) {
          elementId = "contact";
        }

        window.scrollTo({
          top: document.getElementById(elementId).offsetTop,
          left: 0,
          behavior: "smooth",
        });
      },
    };
  },
  components: { ProgressBar },
};
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}
.btn {
  transition: all 0.5s ease-out;
}
.btn:hover {
  transform: scale(1.1);

  color: turquoise !important;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
nav {
  @media screen and (min-width: 768px) {
    height: 64px;
  }
}

.bg-custom {
  background-color: #212529c2;
  backdrop-filter: blur(2px);
}
</style>
