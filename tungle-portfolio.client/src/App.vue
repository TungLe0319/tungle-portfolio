<template>
  <header>
    <Navbar class="fixed-top" id="nav" />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";

export default {
  setup() {
    onMounted(() => {
      hideOnScrollTest("#nav");
      function clickEffect(e) {
        var d = document.createElement("div");
        d.className = "clickEffect";
        d.style.top = e.clientY + "px";
        d.style.left = e.clientX + "px";
        document.body.appendChild(d);
        d.addEventListener(
          "animationend",
          function () {
            d.parentElement.removeChild(d);
          }.bind(this)
        );
      }
      document.addEventListener("click", clickEffect);
    });

    function hideOnScrollTest(el) {
      let nav = document.querySelector(`${el}`);

      let prevScrollpos = window.scrollY;

      // console.log(nav);
      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          nav.style.top = "0";
        } else {
          nav.style.top = "-62px";
        }
        prevScrollpos = currentScrollPos;
      };
    }

    return {
      appState: computed(() => AppState),
    };
  },
  components: { Navbar },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

#nav {
  transition: all 0.5s ease-out;
}

:root {
  --main-height: calc(100vh - 64px);
}

div.clickEffect {
  position: fixed;
  box-sizing: border-box;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 50%;
  animation: clickEffect 0.4s ease-out;
  z-index: 99999;
}
@keyframes clickEffect {
  0% {
    opacity: 1;
    width: 0.5em;
    height: 0.5em;
    margin: -0.25em;
    border-width: 0.5em;
  }
  100% {
    opacity: 0.2;
    width: 5em;
    height: 5em;
    margin: -2.25em;
    border-width: 0.03em;
  }
}
</style>
