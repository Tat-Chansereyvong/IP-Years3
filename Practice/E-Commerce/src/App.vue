<script>
import CategoryComponent from './components/CategoryComponent.vue'
import PromotionComponent from './components/PromotionComponent.vue'
const burgerImage = new URL('@/assets/Burger.png', import.meta.url).href
const peachImage = new URL('@/assets/Peach.png', import.meta.url).href
const kiwiImage = new URL('@/assets/Kiwi.png', import.meta.url).href
const appleImage = new URL('@/assets/Apple.png', import.meta.url).href
const snackImage = new URL('@/assets/Snack.png', import.meta.url).href
const plumImage = new URL('@/assets/Plum.png', import.meta.url).href
const cabbageImage = new URL('@/assets/Cabbage.png', import.meta.url).href
const headphoneImage = new URL('@/assets/Headphone.png', import.meta.url).href
const cakeandmilkImage = new URL('@/assets/Cake & Milk.png', import.meta.url).href
const orangeImage = new URL('@/assets/Orange.png', import.meta.url).href
const onionImage = new URL('@/assets/Onion.jpg', import.meta.url).href
const strawberryjuiceImage = new URL('@/assets/Strawberryjuice.png', import.meta.url).href
const vegetablesImage = new URL('@/assets/Vegetables.jpg', import.meta.url).href

export default {
  name: 'App',
  data() {
    return {
      burgerImage,
      peachImage,
      kiwiImage,
      appleImage,
      snackImage,
      plumImage,
      cabbageImage,
      headphoneImage,
      cakeandmilkImage,
      orangeImage,
      onionImage,
      strawberryjuiceImage,
      vegetablesImage,
    }
  },

  components: {
    CategoryComponent,
    PromotionComponent,
  },
}

</script>
<template>
  <div class="main-container">
    <div class="category-wrapper">
      <CategoryComponent title="Burger" :product-count="14" :image="burgerImage" container-color="#F2FCE4"/>
      <CategoryComponent title="Peach" :product-count="17" :image="peachImage" container-color="#FFFCEB"/>
      <CategoryComponent title="Organic Wiki" :product-count="21" :image="kiwiImage" container-color="#ECFFEC"/>
      <CategoryComponent title="Red Apple" :product-count="68" :image="appleImage" container-color="#FEEFEA"/>
      <CategoryComponent title="Snack" :product-count="34" :image="snackImage" container-color="#FFF3EB"/>
      <CategoryComponent title="Black Plum" :product-count="25" :image="plumImage" container-color="#FFF3FF"/>
      <CategoryComponent title="Cabbage" :product-count="65" :image="cabbageImage" container-color="#F2FCE4"/>
      <CategoryComponent title="Headphone" :product-count="33" :image="headphoneImage" container-color="#FFFCEB"/>
      <CategoryComponent title="Cake & Milk" :product-count="54" :image="cakeandmilkImage" container-color="#F2FCE4"/>
      <CategoryComponent title="Orange" :product-count="63" :image="orangeImage" container-color="#FFF3FF"/>
    </div>
    <div class="promotion-wrapper">
      <PromotionComponent title="Everyday Fresh & Clean with Our Products" :image="onionImage" container-color="#F0E8D5" />
      <PromotionComponent title="Make your Breakfast Healthy and Easy" :image="strawberryjuiceImage" container-color="#F3E8E8" />
      <PromotionComponent title="The best Organic Products Online" :image="vegetablesImage" container-color="#E7EAF3" button-color = "#FDC040" />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.category-wrapper {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: flex-start;
}

.promotion-wrapper {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 24px;
}
</style>