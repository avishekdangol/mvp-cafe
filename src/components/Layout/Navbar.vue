<template>
  <nav class="navbar navbar-expand-lg" :style="navbarCSS">
    <div class="header container-fluid">
      <router-link 
        class="navbar-brand"
        to="/"
      >
        <img 
          v-if="Number(theme.show_logo)"
          :src="info.logo" 
          alt="" width="30" height="24" 
          class="d-inline-block align-text-top"
        >
        <span 
          v-if="Number(theme.show_website_name)"
          class="fw-bold ms-2"
        >
          {{ info.website_name }}
        </span>
      </router-link>
    
      <div class="collapse navbar-collapse d-none d-sm-block" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menus" class="nav-link">Menu</router-link>
          </li><li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>

      <div class="wrapper-form d-flex">
        <router-link
          :to="{ name: 'query' }"
          class="nav-link"
        >
          <div class="py-2">
            <font-icon 
              class="search-icon me-2" 
              icon="magnifying-glass" 
            />
            Search Menu
          </div>
        </router-link>
        
        <!-- Theme Toggle -->
        <div 
          v-if="getTheme"
          class="nav-item toggle border cursor-pointer ms-4 mt-1 me-2"
          @click="toggle()"
        >
          <div :class="getTheme">
            <div class="inner border centralize">
              <font-icon 
                :icon="getTheme === 'light' ? 'sun' : 'moon'"
                class="theme-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    theme: {
      type: Object,
      default: () => [],
    },
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showSearchIcon: true,
    }
  },
  computed: {
    ...mapGetters(['getTheme']),
    navbarCSS() {
      return {
        '--bg-color': this.theme.navbar_bg,
        '--color': this.theme.navbar_color,
      }
    },  
  },
  methods:{
    ...mapActions(['setTheme']),
    searchbar(){
      this.showSearchIcon = !this.showSearchIcon
    },
    toggle(){
      if (this.getTheme === 'light')
        this.setTheme('dark')
      else this.setTheme('light')
    },
  }   
}
</script>


<style lang="scss" scoped>
  /* navbar content */
.navbar {
  background-color: var(--bg-color);
  color: var(--color);
  .search-btn,
  .navbar-brand {
    color: var(--color);
  }
  .router-link-active {
    color: var(--color) !important;
    opacity: 1 !important;
  }
  .nav-link {    
    color: var(--color);
    opacity: 0.6;
    transition: opacity 0.3s ease-in;
  }
  .nav-link:hover {
    opacity: 0.9;
  }
}
.header {
  position: relative;
}
.wrapper-form {
  position: absolute;
  top: 0;
  right: 0;
}
.search-icon {
  cursor: pointer;
  z-index: 1;
  transition: transform 0.3s ease;
}

.toggle{
  border-radius: 15px;
  width: 50px;
  height: 25px;

  .inner{
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    right: 35px;
    transition: all 0.4s ease-in-out;
    width: 22px;
    height: 22px;
  }
  .light {
    .theme-icon {
      height: 14px;
      width: 14px;
      color: rgb(219, 112, 11);
    }
  }
  .dark {
    .inner {
      right: 10px;
    }
    .theme-icon {
      height: 15px;
      width: 15px;
      color: #2a2a28;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .searchFullWidth {
    width: 100vw !important;
    right: -7px;
  }
  .navbar{
    position: relative;
    .navbar-collapse{
      position: absolute;
      left: 120px;
      top: 2px;
      .navbar-nav{
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
}
   
</style>

