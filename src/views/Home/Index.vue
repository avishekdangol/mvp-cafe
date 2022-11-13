<template>
  <div class="home">
    <!-- Carousel -->
    <Carousel 
      :slides="slides"
      :is-loading="isLoading"
    />    

    <!-- Features -->
    <section class="features container w-85-md my-5">
      <div class="row">
        <div
          class="col-md-4 col-sm-12"
          v-for="feature in features" :key="feature.id"
        >
          <div class="card mb-2">
            <div class="card-body d-flex">
              <div class="img-wrapper centralize">
                <img :src="feature.image" alt="">
              </div>
              
              <div class="ms-2">
                 <h5 class="mt-lg-4 mt-md-0 mt-2">{{ feature.title }}</h5>
                 <p>{{ feature.description }}</p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>


    <info />

    <!-- special items-->
    <!-- <section class="special-items w-85 container px-2">
      <h3 class="heading">Our Specials</h3>
      <Swiper class="mySwiper"
      :effect="'flip'"
      :pagination="true"
      :navigation="true"
      :modules="modules">
        <SwiperSlide v-for="(item , index) in items" :key="index"
        class="card">
          <img :src="`/storage/homepage/specials/${item.image}`" class="specials-img card-img">
          <div class="card-img-overlay">
            <h4 class="card-title text-white">{{ item.name }}</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </section> -->
    <section class="special-items w-85 container px-2">
    <h3 class="heading">Our Specials</h3>
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
        v-for="(item, index) in items" 
        :key="index"
        class="card"
      >
        <div class="inner-card" @mouseover="grayscale(index)" @mouseout="grayscale(-1)">
          <img :src="`/storage/homepage/specials/${item.image}`" class="specials-img">
          <div class="info">
            <h5 class="card-header fw-bold">{{ item.name }}</h5>
            <div class="card-body">
              <p class="card-text fw-bold">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
     </Swiper>
     </section>

    <div class="w-85 container mb-2">
      <div class="d-sm-flex justify-content-between align-items-baseline">
        <h3 class="heading my-sm-5 mt-5 mb-4">Most Popular Dishes</h3>
        <router-link :to="{ name: 'menus' }" class="nav-link">
          <button class="d-block d-sm-none btn btn-outline-primary mb-5 w-100">
            View Full Menu
          </button>
          <span class="d-none d-sm-block">
            View Full Menu
          </span>
        </router-link>
      </div>     
      <popular-dishes />
    </div>    

  </div>
</template>

<script>
import { ref } from 'vue'
import Carousel from './components/Carousel.vue'
import PopularDishes from './components/PopularDishes.vue'
import Info from './components/Info.vue'
// importing swiper components
import { Swiper , SwiperSlide } from 'swiper/vue'
import { EffectFlip , Pagination , Navigation} from 'swiper'

export default {
    name: 'home',
    components: {
      Carousel,
      PopularDishes,
      Info,
      Swiper,
      SwiperSlide
    },
    setup() {
      const items = [
        { 
          id: 0,
          name: 'Burgers',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: 'Burgers.jpg',
          price: '500'
        }, 
        { 
          id: 1,
          name: 'Lamb',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: 'Lamb.jpg',
          price: '500'
        },
        { 
          id: 2,
          name: 'Platter',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: 'Platter.jpg',
          price: '500'
        },
        { 
          id: 3,
          name: 'Pizza',
          description: 'Lorem the ame tsocnsctu hdlfsh fhdjfh htsocnsctu hdlfsh fhdjfh h',
          image: 'Pizza.jpg',
          price: '500'
        },
      ];
      const features = [
        {
          id:1,
          title: 'Delivery',
          description: 'We provide timely delivery',
          image: '/storage/homepage/icons/delivery.png'
        },
        {
          id: 2,
          title: 'Digital Payment',
          description: 'Esewa, Khalti, Fonepay',
          image: '/storage/homepage/icons/digital-payment.png'
        }, 
        {
          id: 3,
          title: 'Excellent Service',
          description: 'You will be returning here soon',
          image: '/storage/homepage/icons/service.png',
        },
      ]
      let slides = ref([])
      let isLoading = ref(false)
      return{
        items,
        img:'cafe',
        features,
        slides,
        isLoading,
        modules: [Navigation,Pagination,EffectFlip]
      }
    },
    mounted() {
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
.w-85 {
  width: 85%;
}
.w-85-md {
  width: 85%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
}
.btn-outline-primary:hover {
  color: #fafaf8;
}
.flex-column {
  position: relative;
  width: 18rem;
}
.card-img-overlay {
  background-color: rgba(0, 0, 0, 0.50);
}
.flex-column img {   
  height: 180px;
  object-fit: fill;
}
/* features */
.features {
  .card {
    .card-body{
      .ms-2{
        p{
          font-size: 0.8rem;
        }
      }
    }
    @media only screen and (max-width: 1200px) {
      .card-body {
        min-height: 90px;
      }
      h5 {
        font-size: 0.9rem;
      }
      p {
        font-size: 0.7rem;
        margin-bottom: 0;
        line-height: 1.5;
      }
    }
  }
  .img-wrapper {
    background-color: #AAD8FA !important;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    img {
      width: 50%;
      height: 50%;
      object-fit: cover;
    }

    @media only screen and (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }
  @media only screen and (max-width: 1200px) and (min-width: 768px) {
    .img-wrapper {
      width: 50px;
      height: 50px;

      img {
        width: 50%;
        height: 50%;
      }
    }
    h5 {
      margin-bottom: 4px;
    }
    p {
      font-size: 12px !important;
    }
  }
}
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
.swiper-slide .inner-card:hover .specials-img {
  transform: scale(1.1);
  filter: blur(2px);
  @media only screen and (max-width: 1200px) {
    filter: blur(0);
  }
} 
.specials-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
}
</style>


