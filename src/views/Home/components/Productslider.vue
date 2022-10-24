<template>
  <div class="productSlider"> 
    <div class="row justify-content-between">
      <div 
        v-for="item in items"
        :key="item"
        class="col-6 mb-2"
      >
        <div class="row justify-content-between">
          <div class="col-10">
            <div class="d-flex">
              <div class="image-wrapper">
                <img v-if="item.img" :src="item.img" alt="">
              </div>
              <div class="product-details ms-2">
                <h5>{{ item.name }}</h5>
                <p
                  v-if="item.description"
                  class="description"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="col-2">
            <h5>{{ item.price }}</h5>
            <span 
              v-if="item.category"
              class="badge bg-brown"
            >
              {{ item.category }}
            </span>
          </div>
        </div>
      </div>
    </div>
 </div>
    
</template>

<script>
 export default {
    setup(){
       const items = [  
             {
               name: 'lambchop',
               img: '/storage/homepage/menu/lambchop.jpg',
               description:"Lamb loin, white wine, lemon juice, garlic, lemon zest",
               category: "Category",
               price: 'Rs 400'
             },
             {
               name: "Matcha latte",
               img: '/storage/homepage/menu/matcha-latte.jpg',
               description:"Lamb loin, white wine, lemon juice, garlic, lemon zest",
               category: "Category",
               price: 'Rs 400'
             },
             {
               name: 'Spaghetti',
               img: '/storage/homepage/menu/spaghetti.jpg',
               description:"Lamb loin, white wine, lemon juice, garlic, lemon zest",
               category: "Category",
               price: 'Rs 400'
             },
             {
               name: 'Matcha',
               img:'/storage/homepage/menu/matcha.jpg',
               description:"Lamb loin, white wine, lemon juice, garlic, lemon zest",
               category: "Category",
               price: 'Rs 400'
             },
             {
              name: 'Chocolate Cake',
              img: '/storage/homepage/menu/chocolate-cake.jpg',
              description:"Lamb loin, white wine, lemon juice, garlic, lemon zest",
              category: "Category",
              price: 'Rs 400'
             },
             {
              name: 'Momo',
              img: '/storage/homepage/menu/momo.jpg',
              description:"Lamb loin, white wine, lemon juice, garlic, lemon zest",
              category: "Category",
              price: 'Rs 500'
             },
          ];

       return{
         items,
        }
    }
   }
    
    
 
</script>
<style scoped>
 .productSlider{
  position: relative;
  overflow: hidden;
 }
 .productSlider .inner{
  position: relative;
 }
 .productSlider .inner .card{
  margin-left: 0.5rem;
  width: 3rem;
 }
 .productSlider .inner .card:hover{
  background: #eee;
  box-shadow: 0 8px 8px -4px lightblue;
  cursor: pointer;
 }
 .productSlider .inner .card .card-img-top{
  height: 13rem;
  object-fit: cover;
 }
 .productSlider .inner .card .card-body .price{
  position: absolute;
  right: 10px;
  top: 15px;
 }
 .image-wrapper {
  width: 120px;
  height: 120px;
 }
 .image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
 }
 .description {
  color: #9a9a9a;
 }
</style>