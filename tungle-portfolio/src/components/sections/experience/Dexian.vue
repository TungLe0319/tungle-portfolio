<template>
  <div class="row my-5 pb-md-5 pb-3">
    <div class="col-md-6">
      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-1 fs-2 text-warning"
      >
        1901 Group - Contracted through Dexian
      </p>

      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-2 text-light darken-10 fw-bold"
      >
        April 2023 - October 2023
      </p>
      <p v-motion-slide-visible-once-top :delay="300" class="font-2 text-light">
        <strong class="text-warning">
          Enterprise Service Desk Specialist</strong
        >
        at 1901 Group, provided comprehensive technical support, both
        independently and collaboratively. My role involved resolving diverse
        technical challenges, spanning account administration, hardware, and
        software issues, for a wide range of computer systems, including
        laptops, desktops, and network printers. Worked in fast pase and
        challenging environment of the Navy Intranet, which serves over 700,000
        users, I served as the first line of communication for addressing issues
        and responding to incidents promptly.
      </p>

      <!-- <ul class="numbered nav-list">
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="numbered-list-item"
        >
       Provided comprehensive technical support, both independently and
        collaboratively. My role involved resolving diverse technical
        challenges, spanning account administration, hardware, and software
        issues, for a wide range of computer systems, including laptops,
        desktops, and network printers.
        </li>
        <li
          v-motion-slide-visible-once-top
          :delay="300"
          class="numbered-list-item"
        >
        Remotely Assisted Users resolving complex technical issues either with remote desktop management assistance or walking through user lacking technical lingo.
        </li>

      </ul> -->
    </div>
    <div
      class="col-md-6 d-flex flex-column justify-content-center align-items-center  my-md-0"
    >
      <div
        v-motion-slide-visible-once-top
        :delay="300"
        class="devsopportunities-image d-flex justify-content-center  align-items-center "
      >
        <img
          v-motion-slide-visible-once-top
          :delay="300"
          src="https://www.1901group.com/wp-content/uploads/2021/01/MenuLogoLEIDOSVECTOR-03.svg"
          alt="LLC Logo"
          class="image"
        />
      </div>
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
    height: 150px;
    width: 250px;
    background-color: #f8fcdb;
    border-radius: 4px;
  }
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
    img {
      height: 100px;
    }
  }
}
</style>
