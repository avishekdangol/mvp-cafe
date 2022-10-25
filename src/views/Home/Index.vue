<template>
  <div class="home">
    <Carousel 
      :slides="slides"
      :is-loading="isLoading"
    />    

    <section class="services container w-85-md my-5">
      <div class="row">
        <div
          class="col-md-4 col-sm-12"
          v-for="service in services" :key="service"
        >
          <div class="card mb-2">
            <div class="card-body d-flex align-items-center">
              <div class="img-wrapper centralize">
                <img :src="`/storage/homepage/icons/${service.image}`" alt="">
              </div>
              
              <div class="ms-2">
                <h4>{{ service.name }}</h4>
                <p>{{ service.description }}</p>
              </div>              
            </div>
          </div>
        </div>
        <!-- <div class="d-flex justify-content-center flex-column align-items-center bg-dark"
        v-for="(service , index) in services" :key="index">
            <img
              :src="`/storage/homepage/icons/${service.image}`"
              class="card-img"
              width="100%" height="auto"
            >
            <div class="text-white">
            <h4>{{ service.name }}</h4>
            <p>{{ service.description}}</p>
          </div>
        </div> -->
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
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="heading my-5">Most Popular Dishes</h3>
        <router-link to="/menu" class="nav-link">View Full Menu</router-link>
      </div>      
      <Productslider />
    </div>    

  </div>
</template>

<script>
import { ref } from 'vue'
import Carousel from './components/Carousel.vue'
import Productslider from './components/Productslider.vue'
import Info from './components/Info.vue'
// importing swiper components
import { Swiper , SwiperSlide } from 'swiper/vue'
import { EffectFlip , Pagination , Navigation} from 'swiper'

export default {
    name: 'home',
    components: {
      Carousel,
      Productslider,
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
      const services = [
        {
          id:1,
          name: 'Delivery',
          description: 'We provide timely delivery',
          image: 'delivery.png'
        },
        {
          id: 2,
          name: 'Digital Payment',
          description: 'Esewa, Khalti, Fonepay',
          image: 'digital-payment.png'
        }, 
        {
          id: 3,
          name: 'Excellent Service',
          description: 'You will be returning here soon',
          image: 'service.png',
        },
      ]
      let slides = ref([])
      let isLoading = ref(false)
      return{
        items,
        img:'cafe',
        services,
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
.img-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #AAD8FA;
  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
}
</style>
<!-- css for swiper -->
<style>
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
}
.inner-card:hover .info {
  height: 100%;
  padding-top: 40px;
}
.swiper-slide .inner-card:hover .specials-img {
  transform: scale(1.1);
  filter: blur(2px);
} 
.specials-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
}
</style>


