<template>
  <div>
    <input
      :placeholder="placeholder"
      class="input"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
const {placeholder = "16px 73px"} = defineProps<{
  placeholder: string;
}>();
</script>

<style lang="scss" scoped>
.input {
  font-family: "Roboto";
  width: 440px;
  height: 59px;
  padding: 16px 100px 16px 27px;
  border-radius: 40px;
  font-size: 18px;
  line-height: 150%;
}
</style>
