<template>
  <div class="container">
    <img class="image" :src="image" />
    <div class="text-overlay">
      <h4 class="title">{{ title }}</h4>
      <div>
        <ButtonComponent :button-color="buttonColor" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
  name: 'PromotionComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      required: true,
    },
    containerColor: {
      type: String,
      default: '#81b13d99',
    },
    buttonColor: {
      type: String,
      default: '#3BB77E',
    },
    imageWidth: {
      type: String,
      default: '60%',
    },
  },
  components: {
    ButtonComponent,
  },
}
</script>

<style scoped>
.container {
  border-radius: 10px;
  padding: 20px;
  background-color: v-bind('containerColor');
  min-height: 240px;
  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.image {
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: v-bind('imageWidth');
  height: auto;
  object-fit: contain;
}

.mini-container {
  display: flex;
  flex-direction: column;
}

.text-overlay {
  position: relative;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 140px;
  z-index: 2;
}

.title {
  font-size: 18px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #253d4e;
  line-height: 1.3;
}

@media (min-width: 640px) {
  .container {
    padding: 25px;
    min-height: 260px;
    min-width: 320px;
  }
  .title {
    font-size: 20px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 45px;
    padding-top: 70px;
    min-width: 420px;
    min-height: 300px;
  }
  .title {
    font-size: 24px;
  }
  .image {
    max-width: v-bind('imageWidth');
  }
}

@media (min-width: 1400px) {
  .container {
    min-width: 527px;
  }
}
</style>
