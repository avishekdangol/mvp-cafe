<template>
  <div 
    v-if="slides"
    class="carousel"
    :currentSlide="currentSlide"
  >
    <div>
      <div 
        v-for="slide, index in slides" 
        class="slides-container" 
        :key="index"
      >
        <transition name="side">
          <div class="slide-info" v-show="currentSlide === index">
            <img :src="slide.value" alt="" >
          </div>
        </transition>
      </div>
      <button class="control-btn carousel-control-prev" type="button"  @click="prevSlide()">
        <span class="control-icon carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="control-btn carousel-control-next" type="button" @click="nextSlide()">
        <span class="control-icon carousel-control-next-icon" aria-hidden="true"></span>
      </button>
      <div class="carousel-indicator">
        <button
          v-for="slide, index in slides" :key="slide"
          class="carousel-indicator-btn"
          :class="{ current:currentSlide == index }"
          @click="() => { currentSlide = index }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from  'vue'

export default {
  setup() {
    const slides = [
      {
        id: 1,
        value: "/storage/homepage/sliders/0.jpg",
      },
      {
        id: 2,
        value: "/storage/homepage/sliders/1.jpg",
      },
      {
        id: 3,
        value: "/storage/homepage/sliders/2.jpg",
      }
    ]
    const currentSlide = ref(0)
    const autoSliderEnable = ref(true)
    //  autoplay function
    const autoplay = () => {
      setInterval(() => {
        if (slides && currentSlide.value == slides.length - 1) currentSlide.value = 0
        else currentSlide.value++
      },4000)
    }
    if (autoSliderEnable.value === true) {
      autoplay()
    }
    return {
      slides,
      currentSlide,
      current: "current",
      autoSliderEnable,
    }
  },
  methods:{
    nextSlide()
    {
      if (this.currentSlide === this.slides.length -1) this.currentSlide = 0
      else this.currentSlide++
    },
    prevSlide()
    {
      if (this.currentSlide === 0) this.currentSlide = this.slides.length - 1
      else this.currentSlide--
    },
  },
}
</script>

<style lang="scss" scoped>
 .carousel
 {
   position: relative;
   max-width: 100vw;
   height:  400px;

  .slides-container .slide-info
  {
    position: absolute;
    height:  400px;
    width: 100%;

    img
    {
      object-fit: cover;
      height: inherit;
      width: 100%;
    }
  }
  .control-btn {
    width: 120px;
    padding: 15px;
  }
  .control-icon {
    transition: transform 0.3s ease-in;
  }
  .control-btn:hover {
    background: rgba( 115, 115, 115, 0.3 );
    backdrop-filter: blur( 3.5px );
  }
  .carousel-control-prev {
    border-right: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  .carousel-control-next {
    border-left: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  .control-btn:hover .control-icon
  {
    cursor: pointer;
    transform: scale(1.5);
  }
  .carousel-indicator
  {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translatex(-50%);

    .current
    {
        background-color: #000 !important;
    }
  }
  .carousel-indicator-btn
  {
    background-color: rgba(255,255,255);
    border: none;
    margin-left: 5px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
  }
}
.side-enter-active,
.side-leave-active
{
  transition: all 1s ease;
}
.side-enter-from,
.side-leave-to
{
  opacity: 0;
}
@media screen and (max-width: 1200px) {
  .carousel .control-btn {
    width: 60px;
    padding: 15px;
  }
  .carousel .control-btn:hover .control-icon {
    transform: scale(1.1);
  }
}
</style>