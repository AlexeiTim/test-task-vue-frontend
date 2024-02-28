<template>
  <button :style="buttonStyles" class="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const { width } = defineProps<{
  width: string;
}>();

const buttonStyles = {
  width: width ? width : "200px",
};
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  text-align: center;
  width: 240px;
  height: 60px;
  background: #1d4169;
  border-radius: 40px;
  color: #ffffff;
  padding: 17px 41px 16px 28px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
}
</style>
