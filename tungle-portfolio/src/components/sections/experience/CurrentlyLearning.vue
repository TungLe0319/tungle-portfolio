<template>
  <div class="row my-5 gy-3">
    <div class="section-title">
      <p
        v-motion-slide-visible-once-top
        :delay="300"
        class="font-1 text-warning fs-2"
      >
        Currently Learning & Working With
      </p>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div
          v-motion-slide-visible-once-top
          :delay="300"
          class="card bg-transparent border-0 text-center"
        >
          <img
            v-motion-slide-visible-once-top
            :delay="300"
            src="https://imgs.search.brave.com/DG_bLgeBSoJhTjY4NzkUuFvPvB-AhrxUog9kyHHGAEs/rs:fit:1200:698:1/g:ce/aHR0cHM6Ly9jZG4u/dGhlbmV3c3RhY2su/aW8vbWVkaWEvMjAy/Mi8wMS8xMGI4OGM2/OC10eXBlc2NyaXB0/LWxvZ28ucG5n"
            alt="fireship.io react/firebase Image"
            class="rounded img-fluid"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div
          v-motion-slide-visible-once-top
          :delay="300"
          class="card bg-transparent border-0 text-center"
        >
          <img
            v-motion-slide-visible-once-top
            :delay="300"
            src="https://imgs.search.brave.com/oyZaJgauPvIEiCHLPO_uuDiRmH48zZsZG3-zMxo4ZXo/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9m/cUdueHJXUVVvWS9t/YXhyZXNkZWZhdWx0/LmpwZw"
            alt="fireship.io react/firebase Image"
            class="rounded img-fluid"
          />
        </div>
      </div>
      <div class="col-md-6 mt-4">
        <div
          v-motion-slide-visible-once-top
          :delay="300"
          class="card bg-transparent border-0 text-center"
        >
          <img
            v-motion-slide-visible-once-top
            :delay="300"
            src="https://imgs.search.brave.com/mpPjMKsjQokZhAOQUjWvCo2ji_MrDWIDz6WrPxyft_w/rs:fit:700:399:1/g:ce/aHR0cDovL21pY2hh/ZWxzb3JpYW5vLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNy9uZXh0anMu/cG5n"
            alt="fireship.io react/firebase Image"
            class="rounded img-fluid"
          />
        </div>
      </div>
      <div class="col-md-6 mt-4">
        <div
          v-motion-slide-visible-once-top
          :delay="300"
          class="card bg-transparent border-0 text-center"
        >
          <img
            v-motion-slide-visible-once-top
            :delay="300"
            src="https://imgs.search.brave.com/m3gLeJv6UHq-3gCiWL-MeCqc1D_JWGCEbvMj-NNaBQc/rs:fit:767:428:1/g:ce/aHR0cHM6Ly93d3cu/cmFuZ2VybWFkZS5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDQvY29tcHRp/YS1zZWN1cml0eS1w/bHVzLTc2N3g0Mjgu/anBn"
            alt="fireship.io react/firebase Image"
            class="rounded img-fluid"
          />
        </div>
      </div>
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

<style lang="scss" scoped>

</style>
