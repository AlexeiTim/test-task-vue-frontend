<template>
  <div class="cover">
    <div
      @click.stop
      class="modal"
    >
      <div class="modal__header">
        <AppCloseIcon />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCloseIcon from "./AppCloseIcon.vue";
</script>

<style scoped></style>
