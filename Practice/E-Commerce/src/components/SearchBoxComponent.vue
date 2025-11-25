<template>
    <div class="search-box-component">
        <input
        type="text"
        class="search-input"
        :placeholder="placeholder"
        v-model="searchQuery"
        @input="handleInput"
        />
        <button class="search-button" @click="handleSearchClick">
        🔍
        </button>
    </div>
</template>
<script></script>