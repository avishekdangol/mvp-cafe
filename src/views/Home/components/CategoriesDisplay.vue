<template>
  <section class="special-items w-85 container px-2">
    <h3 class="heading">Categories</h3>
    <Swiper 
      class="mySwiper"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :slidesPerView="2"
      :modules="modules"
    >
      <SwiperSlide 
        v-for="(item, index) in categories" 
        :key="index"
        class="card"
      >
          <div class="inner-card" @mouseover="grayscale(index)" @mouseout="grayscale(-1)">
            <router-link :to="{ name: 'menus', hash: `#${item.name.charAt(0)}-${index}` }">
              <img :src="item.image" class="specials-img">
              <div class="info">
                <h5 class="card-header fw-bold">{{ item.name }}</h5>
                <div class="card-body">
                  <p class="card-text fw-bold">{{ item.description }}</p>
                </div>
              </div>
            </router-link>
          </div>
      </SwiperSlide>
    </Swiper>
   </section>
</template>

<script>
import { ref } from 'vue'
import { Swiper , SwiperSlide } from 'swiper/vue'
import { EffectFlip , Pagination , Navigation} from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const categories = ref([
        { 
          id: 0,
          name: 'Starter',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: '/storage/menu/categories/starter.jpg',
        }, 
        { 
          id: 1,
          name: 'Sandwiches',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: '/storage/menu/categories/sandwich.jpeg',
        }, 
        { 
          id: 2,
          name: 'Dining',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: '/storage/menu/categories/dining.jpg',
        },
        { 
          id: 3,
          name: 'Cold Beverages',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: '/storage/menu/categories/cold-beverage.jpg',
        },
        { 
          id: 4,
          name: 'Desserts',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: '/storage/menu/categories/desserts.jpg',
        },
      ])

    return {
      categories,
      modules: [Navigation,Pagination,EffectFlip]
    }
  },
  methods: {
    grayscale(i) {
      const cards = document.querySelectorAll('.inner-card')
      cards.forEach((card, index) => {
        card.classList.remove('grayscale')
        if (i >= 0 && index != i)
          card.classList.add('grayscale')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
/* special items */
.special-items {
  height: 430px;
  overflow-x: hidden;
  overflow-y: hidden;
}
.special-items h3{
  align-self: flex-start;
  margin: 3rem 0 3rem 0;
}
.specials-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
}
.inner-card .info {
  color: #f1f1f1;
  width: 100%;
  height: 0;
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0, 0.35);
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 6.5px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  transition: all 0.3s ease-out;

  @media only screen and (max-width: 1200px) {
    height: 35%;
    .card-body {
      padding-top: 0;
    }
  }
  @media only screen and (max-width: 576px) {
    height: 15%;
  }
}
@media only screen and (min-width: 1200px) {
  .inner-card:hover .info {
    height: 100%;
    padding-top: 40px;
  }
}
</style>

<!-- css for swiper -->
<style lang="scss">
.swiper {
  width: 100%;
  height: auto;
  overflow: visible;
}
.swiper-pagination {
  bottom: -30px !important;
}
.swiper-pagination-bullet {
  width: 12px !important;
  height: 12px !important;
}
.swiper-slide {
  background-position: center;
  width: 100%;
  height: 266px;
  perspective: 1000px;
  cursor: pointer;
}
.swiper-slide .inner-card {
  position: relative;
  height: inherit;
  width: inherit;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  text-align: center;
  overflow: hidden;
}
.swiper-slide .inner-card:hover .specials-img {
  transform: scale(1.1);
  filter: blur(2px) saturate(120%) contrast(120%);
  @media only screen and (max-width: 1200px) {
    filter: blur(0);
  }
} 
</style>
