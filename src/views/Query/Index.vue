<template>
  <section class="searchPage d-flex flex-column card align-items-center pt-4">
    <div class="container-fluid row justify-content-between">
      <div class="filter col-md-3 card shadow p-2 mb-5">
        <div class="row px-2">
          <div class="card-title p-2 mb-4 d-flex justify-content-between align-items-start">
            <h4>
              Filters
            </h4>
            <button
              class="btn btn-secondary lil-btn"
              title="Reset Filters"
              @click="clearFilter"
            >
              <font-icon :icon="['fa', 'refresh']" />
            </button>
          </div>
          <div class="price mb-4">
            <h5>Price</h5>
            <form
              class="indicator ms-2"
              @submit.prevent
            >
              <input
                v-model="min"
                type="number"
                class="w-35 form-control d-inline"
                placeholder="min"
              >
              <span> - </span>
              <input
                v-model="max"
                type="number"
                class="w-35 mb-2 form-control d-inline"
                placeholder="max"
              >
              <button
                type="submit"
                class="btn btn-outline-success ms-2"
                @click="filter"
              >
                Filter
              </button>
            </form>
          </div>

          <div class="catogories mb-4">
            <h5>Categories</h5>
            <form
              v-for=" (data , index) in categories"
              :key="index"
              class="row d-flex ps-3"
            >
              <div class="d-flex gap-1">
                <input
                  :id="index"
                  v-model="selectedCategories"
                  type="checkbox"
                  :value="data.id"
                  @change="filter"
                >
                <label :for="index"> {{ data.name }}</label>
              </div>
            </form>
          </div>
          <div class="recommendation mb-4">
            <h5>
              <!-- <font-icon :icon="{ prefix: 'fas' , iconName: 'star'}" /> -->
              <input
                id="recommended"
                v-model="recommended"
                type="checkbox"
                name="recommended"
                @change="filter"
              >
              <label
                for="recommended"
                class="ms-2"
              > Recommended</label>
            </h5>
          </div>
        </div>
      </div>

      <div class="contain col-md-9">
        <div class="card w-100 mb-4 px-0">
          <div class="d-flex">
            <input
              v-model="query"
              type="search"
              class="searchbar searchbar-dyn border-0 form-control my-1"
              placeholder="Search here..."
              @change.prevent="() => { $router.push({ name: 'query', query: { query }})}"
            >
            <button class="search-btn bg-info border-0 text-white">
              <font-icon
                icon="magnifying-glass"
                class="icon"
              />
            </button>
          </div>
        </div>
        <div
          v-if="filteredResults && !filteredResults.length"
          class="card shadow mb-4"
        >
          <div class="card-body text-center">
            <h5>No results found</h5>
          </div>
        </div>
        <div v-else-if="searchResults.length">
          <div
            v-for="category in categories"
            :key="category.id"
          >
            <div
              v-if="filterInnerItems[category.name]"
              class="card product-card shadow mb-4"
            >
              <img
                :src="category.image"
                alt=""
                class="card-img-top mb-2"
              >
              <div class="ribbon-1 left">{{ category.name }}</div>
              <div class="card-body">
                <div
                  v-for="inneritems in filterInnerItems[category.name]"
                  :key="inneritems.id"
                  class="mb-2"
                >
                  <div
                    :class="inneritems.recommended
                      ? 'recomendation border border-3 border-gold rounded mb-2': ''"
                  >
                    <div
                      v-if="inneritems.recommended"
                      class="fw-bold bg-gold p-1"
                    >
                      <font-icon :icon="{ prefix: 'fas' , iconName:'star'}" />
                      Recommended
                    </div>
                    <div class="p-2">
                      <div
                        class="position-relative d-flex justify-content-between"
                      >
                        <div class="dots" />
                        <h5 class="bg-light-dark z-1 px-1">
                          {{ inneritems.name }}
                        </h5>
                        <h5 class="bg-light-dark z-1 px-1">Rs {{ inneritems.price }}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="card shadow mb-3"
        >
          <div class="card-body text-center">
            <h5>No results found</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SearchPages',
  setup() {
    const searchResults = ref({})
    const filteredResults = ref(null)
    const products = ref([])
    const categories = ref([
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
        products: [],
      },
    ])
    const query = ref('')
    const selectedCategories = ref([])
    const recommended = ref(false)
    // price filter
    const min = ref(0)
    const max = ref(null)

    return {
      searchResults,
      filteredResults,
      categories,
      query,
      min,
      max,
      products,
      selectedCategories,
      recommended,
    }
  },
  computed: {
    filterInnerItems() {
      let result = ''
      if (this.filteredResults) result = 'filteredResults'
      else result = 'searchResults'
      return this[result].reduce((group, item) => {
        // eslint-disable-next-line no-param-reassign
        group[item.category] = group[item.category] || []
        group[item.category].push(item)
        return group
      }, Object.create(null))
    },
  },
  watch: {
    '$route.query.query': {
      handler() {
        this.query = this.$route.query.query
        if (this.query === '') return
        this.search()
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    search() {
      let result = []
      
      this.categories.forEach(cat => {
        const products = cat.products.filter(pr => pr.name.toLowerCase().indexOf(this.query.toLowerCase()) != -1).map(
          product => ({
            ...product,
            category: cat.name,
          })
        )
        if (products.length) result.push(...products)
      })
      this.searchResults = result
    },
    filter() {
      let result = []

      // price filter
      result = this.searchResults.filter(item => item.price >= this.min && (this.max ? item.price <= this.max : 1))

      // category filter
      if (this.selectedCategories.length) {
        result = result.filter(product => this.selectedCategories.includes(product.category_id))
      }

      // recommended filter
      if (this.recommended) result = result.filter(product => product.recommended)
      this.filteredResults = result
    },
    clearFilter() {
      this.filteredResults = null
      this.min = 0
      this.max = null
      this.selectedCategories = []
      this.recommended = false
    },
  },
}
</script>
<style lang="scss" scoped>
.dark-layout {
  .bg-light-dark {
    background-color: #262631 !important;
  }
}
.searchPage{
  min-height: 80vh;
  padding: 0 28px;
  .card {
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
  }
  .dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    border-bottom: 2px dotted;
  }
  .w-35 {
    width: 35%;
  }
  .title-wrap {
    background-color: rgba(33, 33, 44, 0.5);
    backdrop-filter: blur(2px);
    width: 100%;
    border-radius: 5px;
    min-height: 120px;
  }
  .searchbar {
    background-color: transparent;
  }
  .searchbar:focus {
    box-shadow: none;
  }
  .search-btn{
    border-radius: 0 6px 6px 0;
    width: 60px;
  }

  .container-fluid{
    .filter{
      height: 80vh;
    }
    .contain{
      .product-card{
        overflow: hidden;
        margin-bottom: 2rem;
        img{
          object-fit: cover;
          height: 310px;
        }
      }
    }
  }
  .ribbon-1 {
    position: fixed;
    background: #ae441e;
    color: #f1f1f1;
    box-shadow: 0 0 6px 30px #ae441e;
    clip-path: inset(0 -100%);
  }
  .left {
    inset: 0 auto auto 0;
    transform-origin: 100% 0;
    transform: translate(-29.3%) rotate(-45deg);
  }
}

</style>
