<template>
  <div>
    <Preloader class="Preloader" />
    <Navbar 
      :theme="navbar"
      :info="info"
    />

    <div class="content">
      <RouterView />
    </div>

    <Footer 
      :info="info"
      :theme="footer"
    />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import Preloader from '../Preloader/Preloader.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    Footer,
    Preloader
  },
  setup() {
    const info = {
      website_name: "Cafe",
      logo: "/storage/layout/logo.jpg",
      location: "Kathmandu, Nepal",
      phone: "+977-9812345678",
      email: "info@gmail.com",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      tiktok: "#",
      youtube: "#",
      opening_hours: "7 AM - 7 PM",
      opening_days: "Sunday - Friday",
    }
    const navbar = {
      navbar_bg: "#221811",
      navbar_color: "#ffffff",
      show_logo: "1",
      show_website_name: "1",
    }
    const footer = {
      footer_bg: "#212529",
      footer_color: "#f1f1f1",
    }

    return {
      info,
      navbar,
      footer,
    }
  },
  mounted() {
    const theme = localStorage.getItem('theme')
    if (theme) {
      this.setTheme(theme)
    } else {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
      darkThemeMq.matches ? this.setTheme('dark') : this.setTheme('light')
    }
  },
  methods: {
    ...mapActions(['setTheme']),
  },
}
</script>

<style scoped>
  .content {
    min-height: 72vh;    
  }
</style>