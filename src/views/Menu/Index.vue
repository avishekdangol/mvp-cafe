<template>
  <section class="menus">
    <!-- sticky side categoires menu -->
    <nav 
      id="menu-icons"
      class="categories-menu d-flex flex-column text-white gap-4 align-items-center"
    >
      <a 
        v-for="(category, index) in categories" :key="category.name"
        :href="`#${getCategoryId(category.name)}`"
        class="nav-link d-flex justify-content-evenly align-items-center pl-3"
        data-bs-toggle="tooltip"
        :title="category.name"
      >
        <font-icon :icon="{ prefix: 'fas' , iconName: category.icon }" />
        <span class="text-start">{{ category.iconName }}</span>
      </a>
    </nav>

    <!-- Menu Header -->
    <div class="header-text centralize text-white placeholder-wave">
      <div class="description centralize text-center py-4">
        <div class="w-50">
          <h1 class="fw-bold">{{ detail.title }}</h1>
          <p class="fw-bold">{{ detail.description }}</p>
        </div>
      </div>
    </div>
     
    <!-- Special Offer -->
    <div class="special-offer mb-5">
      <div class="wrapper">
        <h1 class="offer-title text-dark">Special Offer</h1>
        <p>Get free delivery when you spend more than Rs. 600</p>
      </div>
    </div>

    <!-- Menu -->
    <div
      class="container" 
      data-bs-spy="scroll" 
      data-bs-target="#menu-icons" 
      data-bs-offset="0"
    >
      <div class="categories row my-3"
        v-for="( category , index ) in categories" :key="index"
        :id="getCategoryId(category.name)"
      >
        <div class="col-md-6 col-sm-12 category-img-wrap">
          <img :src="`${category.image}`" alt="categories"
            class="category-img border-5 border-warning"
            :class="index % 2 == 0 ? 'border-top border-start' : 'border-bottom border-end'"
          />
        </div>
        <div class="col-md-6 col-sm-12 category-details mt-2 px-5">
            <h1 
              :class="{ 'text-right': index % 2 !== 0 }"
            >
              {{ category.name }}
            </h1>
            
            <div class="items"
              v-for="list in category.products" :key="list"
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
                  <div class="position-relative d-flex justify-content-between align-items-baseline">
                    <div class="dots"></div>
                     <h5 class="z-1 mb-0 bg-light pe-1">{{ list.name }}</h5>
                    <span class="z-1 bg-light ps-1">{{ list.price }}</span>
                  </div>
                  <p class="mb-1 muted">{{ list.description }}</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive , ref } from 'vue'
import { Tooltip, ScrollSpy } from 'bootstrap'

export default {
  name: 'menus',
  setup(){
    const background = ref('url("/storage/menu/header/background.jpg")')
    const detail = reactive({
      title: 'Our Menu',
      description: 'At vero eos et u. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente erendis doloribus asperiores repellat.'
    })
    const categories = [
      {
        id: 1,
        name: 'Starters',
        image: '/storage/menu/categories/starter.jpg',
        icon: 'bacon',
        description: 'Starter cultures are an essential component of nearly all commercially produced fermented foods. Simply defined, starter cultures consist of microorganisms that are inoculated directly into food materials in order to bring about desired and predictable changes in the finished product',
        products: [
          {
            name: 'Wild Mushroom Arancini',
            category_id: 1,
            price: 180,
            description: 'Porcini purée, parmesan, basil.',
            recommended: 0,
          },
          {
            name: 'Purple Corn Tostada',
            category_id: 1,
            price: 200,
            description: 'Ricotta, goat cheese, beetroot and datterini.',
            recommended: 1,
          },
          {
            name: 'Salt & Pepper Calamari',
            category_id: 1,
            price: 180,
            description: 'Squid, lime, soy mayo.',
            recommended: 0,
          },
          {
            name: 'Fresh Oysters Dozen',
            category_id: 1,
            price: 380,
            description: 'Our selection of fresh oysters, limes.',
            recommended: 1,
          },
          {
            name: 'Bread with Smoked Wagyu Butter',
            category_id: 1,
            price: 150,
            description: 'Sonoma Signature Miche sourdough, lava salt.',
            recommended: 0,
          },
        ],
      },
      {
        id: 2,
        name: 'Sandwiches',
        image: '/storage/menu/categories/sandwich.jpeg',
        icon: 'hotdog',
        description: 'Starter cultures are an essential component of nearly all commercially produced fermented foods. Simply defined, starter cultures consist of microorganisms that are inoculated directly into food materials in order to bring about desired and predictable changes in the finished product',
        products: [
          {
            name: 'Turkey Salad Sandwich',
            category_id: 2,
            price: 250,
            description: 'with mustard, mayonnaise, crispy iceberg lettuce and ripe roma tomatoes',
            recommended: 0,
          },
          {
            name: 'Tuna Salad Sandwich',
            category_id: 2,
            price: 220,
            description: 'with mustard, mayonnaise, crispy iceberg lettuce and ripe roma tomatoes',
            recommended: 0,
          },
          {
            name: 'Turkey Meat Loaf Sandwich',
            category_id: 2,
            price: 260,
            description: 'with mustard, mayonnaise, crispy iceberg lettuce and ripe roma tomatoes',
            recommended: 1,
          },
          {
            name: 'Vegetarian Sandwich',
            category_id: 2,
            price: 180,
            description: 'with goat cheese, marinated eggplant, and roma tomatoes',
            recommended: 0,
          },
        ],
      },
      {
        id: 3,
        name: 'Main Course',
        image: '/storage/menu/categories/dining.jpg',
        icon: 'cutlery',
        description: 'Starter cultures are an essential component of nearly all commercially produced fermented foods. Simply defined, starter cultures consist of microorganisms that are inoculated directly into food materials in order to bring about desired and predictable changes in the finished product',
        products: [
          {
            name: 'Vegetable Lasagna And Dinner Salad',
            category_id: 3,
            price: 545,
            description: 'lasagna noodles, broccoli, italian squash, spinach, assorted cheeses and ricotta, served with a dinner salad',
            recommended: 1,
          },
          {
            name: 'Roasted Chicken',
            category_id: 3,
            price: 925,
            description: 'on half of a roasted chicken served with real mashed potatoes, carrots and broccoli',
            recommended: 0,
          },
          {
            name: 'Lamb Shank',
            category_id: 3,
            price: 750,
            description: 'large lamb shank cooked in special sauce and served with real mashed potatoes, broccoli and carrots',
            recommended: 0,
          },
          {
            name: 'Spicy Shrimp',
            category_id: 3,
            price: 600,
            description: 'fresh sauteed shrimp served on a bed of linguini in a spicy tomato cream sauce',
            recommended: 1,
          },
        ],
      },
      {
        id: 4,
        name: 'Drinks',
        image: '/storage/menu/categories/cold-beverage.jpg',
        icon: 'cocktail',
        description: 'Starter cultures are an essential component of nearly all commercially produced fermented foods. Simply defined, starter cultures consist of microorganisms that are inoculated directly into food materials in order to bring about desired and predictable changes in the finished product',
        products: [
          {
            name: 'Gourmet Tea',
            category_id: 4,
            price: 200,
            description: '',
            recommended: 0,
          },
          {
            name: 'Gourmet Coffee',
            category_id: 4,
            price: 250,
            description: '',
            recommended: 1,
          },
          {
            name: 'Cappuccino, Latte',
            category_id: 4,
            price: 200,
            description: '',
            recommended: 0,
          },
          {
            name: 'Soft Drinks',
            category_id: 4,
            price: 90,
            description: 'Coke/ Fanta/ Sprite/ Slice',
            recommended: 0,
          },
          {
            name: 'Fresh Squeezed Lemonade',
            category_id: 4,
            price: 180,
            description: '',
            recommended: 0,
          },
        ],
      },
      {
        id: 5,
        name: 'Desserts',
        image: '/storage/menu/categories/desserts.jpg',
        icon: 'ice-cream',
        description: 'Starter cultures are an essential component of nearly all commercially produced fermented foods. Simply defined, starter cultures consist of microorganisms that are inoculated directly into food materials in order to bring about desired and predictable changes in the finished product',
        products: [
          {
            name: 'Hot Chocolate Pot',
            category_id: 5,
            price: 800,
            description: 'Chocolate, Egg, Butter',
            recommended: 0,
          },
          {
            name: 'Raspberry Almond Tart',
            category_id: 5,
            price: 675,
            description: 'Butter cookie tart shell layered with raspberry jam and almond creme filling',
            recommended: 0,
          },
          {
            name: 'Red Velvet Cake',
            category_id: 5,
            price: 800,
            description: 'Smooth as velvet! A rich, red, mild chocolate flavored cake topped with cream cheese frosting',
            recommended: 0,
          },
          {
            name: 'Banana Bash',
            category_id: 5,
            price: 750,
            description: 'Soft chocolate chip cake filled with flavorful banana pudding, topped with custard filled cream puffs.',
            recommended: 1,
          },
        ],
      },
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
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new Tooltip(tooltipTriggerEl)
    // })

    if (this.$route.name === 'menus') {
      new ScrollSpy(document.body, {
        target: '#menu-icons'
      })
    }
  },
  methods: {
    getCategoryId(category) {
      return category.split(" ")[0]
    }
  },
}

</script>
<style lang="scss" scoped>
 .menus {
  .header-text {
    background-image: v-bind(background);
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    height: 50vh;
    overflow-y: hidden;
    .description{
      background-color: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(2px);
      width: 100%;  
      border-radius: 5px;
    }
  }
  .container .categories {
    .category-details {
      height: 480px;
      overflow-y: auto;
    }

    .category-img-wrap {
      height: 480px;
      width: 50%;
      text-align: right;
      img {
        object-fit: cover;
        width: 95%;
        height: 95%;
      }
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
  .special-offer {
    background: url('/storage/menu/header/special-bg.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    height: 45vh;
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
        color: #222;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .categories {
      margin-bottom: 96px !important;
    }
    .categories:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }

  @media screen and (max-width: 1200px) {
    .categories-menu {
      width: 40px;
    }
    .category-img-wrap {
      width: 100% !important;
    }
    .category-details {
      h1 {
        margin-top: 18px;
      }
    }
    .detail {
      h1 {
        font-size: calc(1rem + 1.5vw)
      }
      h5 {
        font-size: 0.9rem;
      }
      p {
        font-size: 0.6rem;
      }
    }
  }
 }
</style>