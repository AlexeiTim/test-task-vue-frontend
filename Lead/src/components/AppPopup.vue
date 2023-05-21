<template>
  <div
    class="cover"
    @click="closePopup"
  >
    <div
      @click.stop
      class="popup"
    >
      <div class="popup__header">
        <AppCloseIcon
          class="popup__close"
          @click="closePopup"
        />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCloseIcon from "./AppCloseIcon.vue";

const emits = defineEmits<{
  (e: "close"): void;
}>();

const closePopup = () => {
  emits("close");
};
</script>

<style lang="scss" scoped>
.cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(22, 44, 78, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  .popup {
    padding: 16px;
    background: #ffffff;
    border: 1px solid rgba(19, 89, 120, 0.07);
    border-radius: 2px;
    &__header {
      text-align: end;
      margin-bottom: 34px;
    }
    &__close {
      cursor: pointer;
    }
  }
}
</style>
