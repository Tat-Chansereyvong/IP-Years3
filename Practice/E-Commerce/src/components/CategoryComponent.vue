<template>
  <div class="container">
    <img :src="image" />
    <h3 class="title">{{ title }}</h3>
    <span class="count">{{ productCount }} items</span>
  </div>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    productCount: {
      type: Number,
      required: true,
    },
    image: {
      required: true,
    },
    containerColor: {
      type: String,
      default: '#81b13d99',
    },
  },
}
</script>

<style scoped>
.container {
  border: 1px solid #81b13d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  background-color: v-bind ('containerColor');
  flex: 1;
  min-width: 120px;
  transition: transform 0.2s ease;
}

.container:hover {
  transform: translateY(-2px);
}

.container img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.count {
  color: #818080;
  font-size: 11px;
  font-family: 'Lato';
  margin-top: 4px;
}

.title {
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 6px 0 0 0;
}

@media (min-width: 640px) {
  .container {
    padding: 12px;
    min-width: 140px;
  }
  .title {
    font-size: 15px;
  }
  .count {
    font-size: 12px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 15px;
    min-width: 160px;
  }
  .title {
    font-size: 16px;
  }
}
</style>
