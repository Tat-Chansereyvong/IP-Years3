<script>
import HeaderSection from '@/components/HeaderSection.vue'
export default {
  name: 'PageThreeView',
  methods: {
    goPage2() {
      this.$router.push('/page_two')
    },
    goPage3() {
      this.$router.push('/page_three')
    },
    goSection1() {
      this.$router.push('/page_three/sections/1')
    },
    goSection2() {
      this.$router.push('/page_three/sections/2')
    },
    goSection3() {
      this.$router.push('/page_three/sections/3')
    },
    goSection4() {
      this.$router.push('/page_three/sections/4')
    },
  },
  computed: {
    activeSectionId() {
      if (this.$route.name === 'PageThree_Section') {
        return Number(this.$route.params.sectionId)
      }
      return 0
    },
  },
  components: {
    HeaderSection,
  },
}
</script>

<template>
  <HeaderSection />
  <main>
    <div class="main-container">
      <div class="menu">
        <div class="menu-title">Menu</div>
        <button @click="goSection1" :class="{ 'active-section': activeSectionId === 1 }">
          Section1
        </button>
        <button @click="goSection2" :class="{ 'active-section': activeSectionId === 2 }">
          Section2
        </button>
        <button @click="goSection3" :class="{ 'active-section': activeSectionId === 3 }">
          Section3
        </button>
        <button @click="goSection4" :class="{ 'active-section': activeSectionId === 4 }">
          Section4
        </button>
      </div>
      <div class="page-container">
        Welcome to Page 3
        <router-view></router-view>
      </div>
    </div>
  </main>
  <footer class="footer">Footer</footer>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-left: 300px;
  margin-right: 300px;
  margin-top: 20px;

  border: 2px solid black;
}

.header-text {
  font-size: 20px;
}

.header-buttons {
  display: flex;
  margin-left: auto;
  gap: 30px;
}

.header-buttons button {
  background-color: transparent;
  color: red;
  font-size: 18px;
  border: none;
}

.main-container {
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  margin-left: 300px;
  margin-right: 300px;
}
.page-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-size: 20px;
}

.menu {
  display: flex;
  flex-direction: column;
  font-size: 18px;
}

.menu-title {
  padding: 30px;
  border: 1px solid black;
}

.menu button {
  background-color: transparent;
  font-size: 18px;
  border: 1px solid black;
  padding: 30px;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 30px;
  font-size: 20px;
  margin-left: 300px;
  margin-right: 300px;
  border: 2px solid black;
}

.active-section {
  background-color: #62b7f0 !important;
}
</style>
