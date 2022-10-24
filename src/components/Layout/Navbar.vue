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
            <router-link to="/menu" class="nav-link">Menu</router-link>
          </li><li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>

      <!-- <div class="wrapper-form">
        <font-icon 
          class="search-icon" 
          :icon="showSearchIcon ? 'magnifying-glass' : 'times'" 
          :class="showSearchIcon ? 'search-btn' : 'text-dark'"
          @click="searchbar" 
        />
        <form class="d-flex">
          <input 
            class="searchbar form-control me-2" 
            :class="{ searchFullWidth: !showSearchIcon }"
            type="text"
            placeholder="Search" 
            aria-label="Search"
          >
        </form>
      </div> -->
    </div>
  </nav>
</template>

<script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
      navbarCSS() {
        return {
          '--bg-color': this.theme.navbar_bg,
          '--color': this.theme.navbar_color,
        }
      },  
    },
    methods:{
      searchbar(){
        this.showSearchIcon = !this.showSearchIcon
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
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.3s ease;
}
.search-icon:hover {
  transform: scale(1.2);
}
.searchbar {
  position: absolute;
  width: 0;
  right: -35px;
  transition: all 0.3s ease;
}
.searchFullWidth {
  width: 250px !important;
  right: 0;
}

@media only screen and (max-width: 1000px) {
  .searchFullWidth {
    width: 100vw !important;
    right: -7px;
  }
}
   
</style>

