<template>
  <section class="menu">
    <div class="header-text centralize text-white">
      <div class="description centralize text-center py-4">
        <div class="w-50">
          <h1 class="fw-bold">{{ detail.title }}</h1>
          <p class="fw-bold">{{ detail.description }}</p>
        </div>
      </div>
    </div>
    <!-- sticky side categoires menu -->
    <nav 
      id="menu-icons"
      class="categories-menu d-flex flex-column text-white text-center gap-4 align-items-center"
    >
      <a 
        v-for="category in categories" :key="category.name"
        :href="`#${category.name.charAt(0)}-${category.id}`"
        class="nav-link d-flex justify-content-evenly align-items-center"
        data-bs-toggle="tooltip"
        :title="category.name"
      >
        <font-icon :icon="{ prefix: 'fas' , iconName: category.icon }" />
        <span class="text-start">{{ category.iconName }}</span>
      </a>
    </nav>
     
    <!-- Menu -->
    <div class="special-offer mb-5">
      <div class="wrapper">
        <h1 class="text-dark">Special Offer</h1>
        <p>Get free delivery when you spend more than Rs. 600</p>
      </div>
    </div>
    <div
      class="container" 
      data-bs-spy="scroll" 
      data-bs-target="#menu-icons" 
      data-bs-offset="0"
    >
      <div class="categories d-flex gap-3 my-3 p-3"
        v-for="( category , index ) in categories" :key="index"
        :id="`${category.name.charAt(0)}-${category.id}`"
        :class="{ alternate: index % 2 === 0 }"
      >
        <div class="category-details w-50 mt-2">
            <h1 
              :class="{ 'text-right': index % 2 !== 0 }"
            >
              {{ category.name }}
            </h1>
            
            <div class="items"
              v-for="list in category.list" :key="list"
            >
              <div 
                :class="list.recommended ? 'recomendation border-3 border-gold rounded mb-2': ''"
              >
                <div 
                  v-if="list.recommended"
                  class="fw-bold bg-gold p-1"
                >
                  <font-icon :icon="{ prefix: 'fas' , iconName:'star'}" />
                  Recommended
                </div>
                <div class="detail p-2">
                  <div class="position-relative d-flex justify-content-between">
                    <div class="dots"></div>
                    <h5 class="z-1 mb-0 bg-light pe-1">{{ list.name }}</h5>
                    <span class="z-1 bg-light ps-1">{{ list.price }}</span>
                  </div>
                  <p class="mb-1">{{ list.description }}</p>
                </div>
              </div>
           </div>
        </div>
        <img :src="`${category.url}`" alt="categories"
          class="w-50 category-img border-5 border-warning"
          :class="index % 2 == 0 ? 'border-top border-start' : 'border-bottom border-end'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { reactive , ref } from 'vue'
import { Tooltip, ScrollSpy } from 'bootstrap'

export default {
  name: 'menu',
  setup(){
    const background = ref('url("/storage/menu/header/background.jpg")')
    const detail = reactive({
      title: 'Our Menu',
      description: 'At vero eos et u. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente erendis doloribus asperiores repellat.'
    })
    const categories =[
      { 
        id: 0,
        name: 'Appetizer',
        url: '/storage/menu/categories/appetizer.jpg',
        description:'Starter cultures are an essential component of nearly all commercially produced fermented foods. Simply defined, starter cultures consist of microorganisms that are inoculated directly into food materials in order to bring about desired and predictable changes in the finished product',
        icon: 'bacon',
        list: [
          {
            name: 'French fries',
            price: 'Rs 200',
            image: '/storage/menu/categories/starter/french.jpg',
            description: 'lorem lorem lorem lorem lorem lroem',
            recommended: true,
          },
          {
            name: 'French fries',
            price: 'Rs 200',
            image: '/storage/menu/categories/starter/french.jpg',
            description: 'lorem lorem lorem lorem lorem lroem',
            recommended: true,
          },
          {
            name: 'Corndog',
            price: 'Rs 100',
            image: '/storage/menu/categories/starter/corndog.jpg',
            description:'lorem lorem lorem lorem lorem lroem',
            recommended: false,
          },
          {
            name: 'Salad',
            price: 'Rs 130',
            image: '',
            description: 'lorem lorem lorem lorem lorem lroem',
            recommended: false,
          },
          {
            name: 'Chicken Sausage',
            price: 'Rs 40',
            image: '',
            description: 'lorem lorem lorem lorem lorem lroem',
            recommended: false,
          }
        ]
      },
      {
        id: 1,
        name: 'Cold Beverages',
        url: '/storage/menu/categories/cold-beverage.jpg',
        description: 'COLD BEVERAGES means all carbonated or non-carbonated naturally or artificially flavored beverages, bottled drinking water and bottled 100% juice as defined below, which are dispensed from refrigerated vending machines',
        icon: 'cocktail',
        list:[
          {
            name: 'Iced late',
            price: 'Rs 300',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lroem',
            recommended: false,
          },
          {
            name: 'Iced Americano',
            price: 'Rs 100',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lroem',
            recommended: false,
          },
          {
            name: 'Iced Tea',
            price: 'Rs 60',
            image: '',
            description: 'lorem lorem lorem lorem lorem lorem lroem ',
            recommended: true,
          },
          {
            name: 'Coke/Fanta/Sprite',
            price: 'Rs 50',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lorem',
            recommended: false,
          }
        ]
      },
      {
        id: 2,
        name: 'Dining',
        url: '/storage/menu/categories/cold-beverage.jpg',
        description: 'COLD BEVERAGES means all carbonated or non-carbonated naturally or artificially flavored beverages, bottled drinking water and bottled 100% juice as defined below, which are dispensed from refrigerated vending machines',
        icon: 'utensils',
        list:[
          {
            name: 'Iced late',
            price: 'Rs 300',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lroem',
            recommended: false,
          },
          {
            name: 'Iced Americano',
            price: 'Rs 100',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lroem',
            recommended: false,
          },
          {
            name: 'Iced Tea',
            price: 'Rs 60',
            image: '',
            description: 'lorem lorem lorem lorem lorem lorem lroem ',
            recommended: false,
          },
          {
            name: 'Coke/Fanta/Sprite',
            price: 'Rs 50',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lorem',
            recommended: false,
          }
        ]
      },
      {
        id: 1,
        name: 'Deserts',
        url: '/storage/menu/categories/cold-beverage.jpg',
        description: 'COLD BEVERAGES means all carbonated or non-carbonated naturally or artificially flavored beverages, bottled drinking water and bottled 100% juice as defined below, which are dispensed from refrigerated vending machines',
        icon: 'ice-cream',
        list:[
          {
            name: 'Iced late',
            price: 'Rs 300',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lroem'
          },
          {
            name: 'Iced Americano',
            price: 'Rs 100',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lroem'
          },
          {
            name: 'Iced Tea',
            price: 'Rs 60',
            image: '',
            description: 'lorem lorem lorem lorem lorem lorem lroem '
          },
          {
            name: 'Coke/Fanta/Sprite',
            price: 'Rs 50',
            image: '',
            description: 'lorem lorem lorem lorem lorem  lorem lorem'
          }
        ]
      }
    ]

    return{
      background,
      detail,
      categories,
    }
  },
  computed: {
    sortCategories() {
      return this.categories.map(category => {
        return {
          name: category.name,
          icon: category.icon,
        }
      })
    },
  },
  mounted() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl)
    })

    new ScrollSpy(document.body, {
      target: '#menu-icons'
    })
  },
}

</script>
<style lang="scss" scoped>
 .menu {
  .header-text {
    background-image: v-bind(background);
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    height: 400px;
    overflow-y: hidden;
    .description{
      background-color: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(2px);
      width: 100%;  
      border-radius: 5px;
    }
  }
  .container .categories {
    margin-bottom: 96px !important;
    .category-details {
      height: 480px;
      overflow-y: auto;
    }
    .category-img {
      height: 480px;
      object-fit: cover;
    }
    .dots {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 7px;
      border-bottom: 2px dotted;
    }
  }
  .categories-menu {
    position: fixed;
    background-color: #222;
    width: 60px;
    font-size: 1.2rem;
    border-radius: 0 8px 8px 0;
    bottom: 50vh;
    padding: 20px 10px;
    opacity: 0.8;
    transition: opacity 0.3s ease-in;
    z-index: 10;
  }
  .categories-menu:hover {
    opacity: 1;
  }
  .nav-link {
    width: 100%;
    transition: all 0.3s ease-in;
  }
  .nav-link:hover,
  .active {
    color: #ff9900;
    transform: scale(1.15);
  }
  .alternate{
    flex-direction: row-reverse;
  }
  .special-offer {
    background: url('/storage/menu/header/special-bg.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    height: 350px;
    position: relative;
    .wrapper {
      position: absolute;
      top: 10%;
      right: 10%;

      h1 {
        font-family: Lunar;
        font-size: 74px;
      }
      p {
        font-size: 28px;
        font-family: Heart;
      }
    }
  }
 }
</style>