<template>
  <header class="header">
    <div class="header-text">Header</div>
    <div class="header-buttons">
      <router-link to="/page_one" class="nav-button" active-class="active">Page 1</router-link>
      <router-link to="/page_two" class="nav-button" active-class="active">Page 2</router-link>
      <router-link to="/page_three" class="nav-button" active-class="active">Page 3</router-link>
    </div>
  </header>
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
  border: 1px solid black;
}

.header-text {
  font-size: 20px;
}

.header-buttons {
  display: flex;
  margin-left: auto;
  gap: 30px;
}

.nav-button {
  background-color: transparent;
  color: black;
  font-size: 18px;
  border: none;
  text-decoration: none;
  padding: 0;
}
.nav-button.active {
  color: red;
}
</style>
