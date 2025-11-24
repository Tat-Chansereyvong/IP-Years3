<script>
import CategoryComponent from './components/CategoryComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
import PromotionComponent from './components/PromotionComponent.vue'
import ProductComponent from './components/ProductComponent.vue'
import { useProductStore } from './stores/product'

export default {
  name: 'App',
  data() {
    return {}
  },

  components: {
    CategoryComponent,
    PromotionComponent,
    MenuComponent,
    ProductComponent,
  },
  methods: {
    normalizeImage(path) {
      if (!path) return ''
      // replace backslashes, trim leading slashes, and URL-encode special chars/spaces
      const fixed = path.replace(/\\/g, '/').replace(/^\/+/, '')
      return 'http://localhost:3000/' + encodeURI(fixed)
    },
  },
  setup() {
    const productStore = useProductStore()
    return {
      productStore,
    }
  },

  async mounted() {
    await this.productStore.fetchCategories()
  },
}
</script>
<template>
  <div class="main-container">
    <div class="menu-component1">
      <menu-component
        title="Featured Categories"
        :filters="[
          'All',
          'Milks & Dairies',
          'Coffee & Teas',
          'Pet Foods',
          'Meats',
          'Vegetables',
          'Fruits',
        ]"
        :active-filter="'All'"
        @filter-change="
          (filter) => {
            console.log('Selected filter:', filter)
          }
        "
      />
    </div>
    <div class="category-wrapper">
      <CategoryComponent
        v-for="category in productStore.categories"
        :key="category['id']"
        :title="category['name']"
        :productCount="category['productCount']"
        :image="normalizeImage(category['image'])"
        :containerColor="category['color']"
      />
    </div>
    <div class="promotion-wrapper">
      <PromotionComponent
        v-for="category in productStore.promotions"
        :key="category['id']"
        :title="category['title']"
        :image="normalizeImage(category['image'])"
        :containerColor="category['color']"
        :buttonColor="category['buttonColor']"
        :imageWidth="'70%'"
      />
    </div>
    <div class="menu-component2">
      <menu-component
        title="Popular Products"
        :filters="[
          'All',
          'Milks & Dairies',
          'Coffees & Teas',
          'Pet Foods',
          'Meats',
          'Vegetables',
          'Fruits',
        ]"
        :active-filter="'All'"
        @filter-change="
          (filter) => {
            console.log('Selected filter:', filter)
          }
        "
      />
    </div>
    <div class="product-wrapper">
      <ProductComponent
        v-for="product in productStore.filteredProducts"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :category="product.category"
        :price="product.price"
        :original-price="product.originalPrice"
        :rating="product.rating"
        :weight="product.weight"
        :image="'http://localhost:3000/' + product.image"
        :badge="product.badge"
        :badge-type="product.badgeType"
      />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
  padding: 12px 16px;
}

.category-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  justify-items: center;
}

.promotion-wrapper {
  margin-top: 40px;
  display: flex;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-bottom: 30px;
}

.menu-component1 {
  max-width: 1900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-family: 'Quicksand', sans-serif;
}

.menu-component2 {
  max-width: 1900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  font-family: 'Quicksand', sans-serif;
}

/* Tablet (640px+) */
@media (min-width: 640px) {
  .main-container {
    padding: 16px 20px;
  }

  .category-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .promotion-wrapper {
    gap: 18px;
  }
}

/* Large Tablet / Small Desktop (1024px+) */
@media (min-width: 1024px) {
  .main-container {
    padding: 20px 30px;
  }

  .category-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 20px;
  }

  .promotion-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
  }

  .menu-component1 {
    margin-bottom: 20px;
  }

  .menu-component2 {
    margin-top: 40px;
  }
}

/* Desktop (1400px+) */
@media (min-width: 1400px) {
  .main-container {
    padding: 20px 40px;
  }

  .category-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  .promotion-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
