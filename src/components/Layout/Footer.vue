<template>
  <footer class="container-fluid navbar-dark bg-dark text-light pt-4">
    <div class="container pt-4">
      <div class="row justify-content-around">
        <div class="col-md-4 col-6 container-opening-hours mb-4">
            <h5>Opening Hours</h5>
            <div class="d-flex align-items-baseline">
              <font-icon class="icon" icon="calendar" />
              <p class="mb-1 ms-2"> {{ info.opening_days }}</p>
            </div>
            <div class="d-flex align-items-baseline">
              <font-icon class="icon" icon="clock" />
              <p class="mb-1 ms-2"> {{ info.opening_hours }}</p>
            </div>
        </div>
        <div class="col-md-4 d-none d-sm-block text-center mb-4">
          <h5 v-if="info.website_name">{{ info.website_name }}</h5>
          <p 
            v-if="info.location"
            class="mb-1"
          >
            {{ info.location }}
          </p>
        </div>
        <div class="col-md-4 col-6 mb-4 d-flex flex-column align-items-end">
          <div class="">
            <h5>Contact us</h5>
            <div class="d-flex align-items-baseline">
              <font-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" />
              <p class="mb-1 ms-2">{{ info.email }}</p>
            </div>
            <div class="d-flex align-items-baseline">
              <font-icon :icon="{ prefix: 'fas' , iconName: 'phone'}" />
              <p class="mb-1 ms-2">{{ info.phone }}</p>
            </div>
          </div>
        </div>
      </div>
    
      <!-- navbar in desktop -->
      <div class="footer-nav d-none d-sm-block align-items-end align-self-center">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-end">
          <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link :to="{ name: 'menus' }" class="nav-link">Menu</router-link>
          </li>
          <li class="nav-item">
              <router-link :to="{ name: 'menus' }" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
              <router-link :to="{ name: 'menus' }" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div> 
    </div>

    <!-- Navigation menu for mobile -->
    <section class="navbar-bottom navbar-expand d-block d-sm-none">
      <ul class="navbar-nav d-flex justify-content-around">
        <li class="nav-item text-center">
          <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">
            <font-icon :icon="{ prefix: 'fas', iconName: 'home' }" />
            <p class="small mb-0">Home</p>
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link :to="{ name: 'menus' }" class="nav-link">
            <font-icon :icon="{ prefix: 'fas', iconName: 'mug-hot' }" />
            <p class="small mb-0">Menu</p>
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link :to="{ name: 'menus' }" class="nav-link">
            <font-icon :icon="{ prefix: 'fas', iconName: 'info-circle' }" />
            <p class="small mb-0">About Us</p>
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link :to="{ name: 'menus' }" class="nav-link">
            <font-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" />
            <p class="small mb-0">Contact</p>
          </router-link>
        </li>
      </ul>
    </section>

    <!-- Social Medias -->
    <div class="social_media d-flex justify-content-center mb-4">
      <div
        v-for="social in socials"
        :key="social.id"
        class="items"
      >
        <a
          v-if="social.value" 
          :href="social.value"
          :class="social.key"
        >
          <font-icon 
            class="icon"
            :icon="{ prefix: 'fab', iconName: social.key}"
          />
        </a>
      </div>
    </div> 

    <div class="auther">
      <p class="mb-0 pb-3">
        Copyright by {{ `${info.website_name} ${y}` }}.  All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Footer',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
    theme: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const y = new Date().getFullYear()
    let socials = ref([
      { key: 'facebook', value: '#' },
      { key: 'instagram', value: '#' },
      { key: 'twitter', value: '#' },
      { key: 'tiktok', value: '#' },
      { key: 'youtube', value: '#' },
    ])

    return {
      y,
      socials
    }
  },
  computed: {
    footerCSS() {
      return {
        '--bg-color': this.theme.footer_bg,
        'color': this.theme.footer_color,
      }
    },
  },

}
</script>
<style lang="scss" scoped>
footer {
  background-color: var(--bg-color);
  @media only screen and (max-width: 576px) {
    padding: 0;
  }
  .router-link-active {
    color: #fafaf8;
  }
  .auther
  {
      font-size: 0.6rem;
      text-align: center;
  }
  .social_media
  {
    gap: 3rem;
    margin: auto;
    .items
    {
      font-size: 1.4rem;
      transition: all 0.3s ease-in;

      a {
        color: var(--color) !important;
      }
    }
    .items:hover
    {
      transform: translateY(-5px);
    }
    .facebook:hover
    {
      color: #2C6A93 !important;
    }
    .twitter:hover
    {
      color: #00B6F1 !important;
    }
    .instagram:hover
    {
      color: #fd5949 !important;
    }
    .tiktok:hover
    {
      color: #EE1D52 !important;
    }
    .youtube:hover
    {
      color: #d40000 !important;
    }
  }
}
.footer-nav ul
{
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 3rem;
}

.navbar-bottom {
  background-color: #221811;
}
@media screen and (max-width: 976px) {
  footer {
    padding-bottom: 48px !important;
  }
}
</style>