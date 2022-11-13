<template>
  <section class="about row justify-content-between align-items-center" :style="infoTheme">
    <div class="info col-md-6 col-sm-12 container">
      <h3 class="heading">Cozy and Fresh Experience</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed, debitis rem placeat numquam accusamus praesentium sequi labore sapiente odio. Assumenda fugit temporibus impedit nostrum repudiandae dolorem rem natus beatae??</p>
    </div>
    <img 
      class="cafe-img col-md-6 col-sm-12 p-0"
      src="/storage/homepage/Information/cafe.jpg"
      alt="cafe"
    />
  </section>
</template>

<script>

export default {
  setup() {
    const homepage_info_bg = '#F9D9AA'
    const homepage_info_color = '#101010'

    return {
      homepage_info_bg,
      homepage_info_color,
    }
  },
  computed: {
    infoTheme() {
      return {
        '--bg-color': this.homepage_info_bg,
        '--color': this.homepage_info_color,
      }
    }
  },
  mounted() {
  },
  methods: {
    getInfo() {
      axios.get('/home-info').then(response => {
        const data = response.data
        this.title = data.find(info => info.type === 'title').value
        this.description = data.find(info => info.type === 'description').value
        this.image = data.find(info => info.type === 'image').value
      })
    }, 
    getTheme() {
      axios.get('/theme/homepage').then(response => {
        const data = response.data
        this.homepage_info_bg = data.homepage_info_bg
        this.homepage_info_color = data.homepage_info_color
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  background-color: var(--bg-color);
  color: var(--color);
  height: 320px;  
  
  .cafe-img {
    width:  50%;
    height: 100%;
    object-fit: cover;
    filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.16));
  }
  .info { 
    height: 320px;
    display: flex;
    flex-flow: column;
    justify-content: center;

    p{
      margin-top: 18px ;
      width: 80%;
    }  
  }
  @media only screen and (max-width: 540px) {
    .cafe-img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1280px) {
    .info {
      padding-left: 60px;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .info {
    width: 480px;

    p {
      margin-top: 48px !important;
    }
  }
}

@media only screen and (max-width: 760px) {
  .about{
    margin-bottom: 300px;
  }
}
</style>
