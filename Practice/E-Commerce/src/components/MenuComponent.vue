<template>
  <div class="menu-component">
    <h2 class="menu-title">{{ title }}</h2>
    <div class="filter-tabs">
      <button
        v-for="(filter, index) in filters"
        :key="index"
        :class="['filter-btn', { active: filter === activeFilter }]"
        @click="handleFilterClick(filter)"
      >
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    },
    activeFilter: {
      type: String,
      default: 'All',
    },
  },
  methods: {
    handleFilterClick(filter) {
      this.$emit('filter-change', filter)
    },
  },
}
</script>

<style scoped>
.menu-component {
  width: 100%;
  max-width: 1900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-family: 'Quicksand', sans-serif;
  /* margin-left: 250px; */
}

.menu-title {
  font-size: 32px;
  font-weight: 700;
  color: #253d4e;
  margin: 0;
}

.filter-tabs {
  display: flex;
  gap: 20px;
  align-items: center;
}

.filter-btn {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #7e7e7e;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s ease;
  position: relative;
}

.filter-btn:hover {
  color: #3bb77e;
}

.filter-btn.active {
  color: #3bb77e;
  font-weight: 700;
}

.filter-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3bb77e;
}

/* Mobile (< 640px) */
@media (max-width: 639px) {
  .menu-component {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 20px;
    padding: 0 4px;
  }

  .menu-title {
    font-size: 22px;
  }

  .filter-tabs {
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
  }

  .filter-btn {
    font-size: 12px;
    padding: 6px 10px;
  }
}

/* Tablet (640px - 1023px) */
@media (min-width: 640px) and (max-width: 1023px) {
  .menu-component {
    flex-wrap: wrap;
    gap: 16px;
    align-items: flex-start;
  }

  .menu-title {
    flex: 1 100%;
    font-size: 28px;
    margin-bottom: 8px;
  }

  .filter-tabs {
    flex-wrap: wrap;
    gap: 12px;
  }

  .filter-btn {
    font-size: 14px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .menu-component {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .filter-tabs {
    gap: 20px;
  }

  .filter-btn {
    font-size: 16px;
  }
}
</style>
