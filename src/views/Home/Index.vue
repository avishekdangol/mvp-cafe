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
    
    <!-- Specials -->
    <categories-display />

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
import CategoriesDisplay from './components/CategoriesDisplay.vue'
// importing swiper components

export default {
    name: 'home',
    components: {
      Carousel,
      PopularDishes,
      Info,
      CategoriesDisplay,
    },
    setup() {
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
        img:'cafe',
        features,
        slides,
        isLoading,
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
// Dark Layout
.dark-layout {
  .img-wrapper {
    background-color: #AAD8FA !important;
  }
}
</style>


