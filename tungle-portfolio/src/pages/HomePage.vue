<template>
  <div>
    <!-- The opening animation page -->
    <transition name="slide" mode="out-in" appear>
      <div class="opening-animation" v-if="!mainLoaded">
        <LoadingAnimation />
      </div>
    </transition>

    <!-- The main page -->
    <transition name="fade" mode="out-in" appear>
      <div class="main-page  " v-if="mainLoaded">
        <!-- Add your main page content here -->
        <HeroSectionV2 />
        <AboutSection />

        <ExperienceSection />
        <ProjectPortfolioSection/>
        <!-- <PortfolioSection /> -->
        <!-- <ContactSection /> -->

        <SocialBar />
        <!-- <EmailBar/> -->
      </div>
    </transition>
  </div>
</template>

<script>
import EmailBar from "../components/socialIcons/EmailBar.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import ProjectPortfolioSection from '../components/sections/Portfolio/PortfolioProjectsSection.vue'
import PortfolioSection from "../components/sections/PortfolioSection.vue";
import ExperienceSection from "../components/sections/experience/ExperienceSection.vue";
import SocialBar from "../components/socialIcons/SocialBar.vue";
import HeroSectionV2 from "../components/sections/HeroSectionV2.vue";
import LoadingAnimation from "../components/effects/LoadingAnimation.vue";


export default {
  data() {
    return {
      mainLoaded: false,
    };
  },
  mounted() {
    // Wait 2 seconds before loading the main page
    setTimeout(() => {
      this.mainLoaded = true;
    }, 3000);
  },
  components: {
    AboutSection,
    ProjectPortfolioSection,
    PortfolioSection,
    ExperienceSection,
    ContactSection,
    SocialBar,
    EmailBar,
    HeroSectionV2,
    LoadingAnimation,

},
};
</script>

<style scoped lang="scss">


.opening-animation {
  height: 100vh;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter {
  transform: translateY(0);
}

.slide-leave {
  transform: translateY(-100%);
}
.slide-leave-to {
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
