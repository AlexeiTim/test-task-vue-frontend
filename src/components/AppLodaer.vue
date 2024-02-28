<template>
  <div class="loader">
    <div class="loader__text">LOADING ....</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.loader__text {
  font-size: 64px;
  color: #fff;
}
</style>
