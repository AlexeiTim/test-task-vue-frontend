<template>
  <div class="timer__item">
    <p class="item__time">{{ clock.time }}</p>
    <AppTextBackground>{{ clock.name }}</AppTextBackground>
  </div>
</template>

<script setup lang="ts">
import AppTextBackground from "./AppTextBackground.vue";
interface Props {
  clock: {
    time: number;
    name: string;
  };
}
const {clock} = defineProps<Props>();
</script>

<style lang="scss" scoped>
.timer__item {
  text-align: center;
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 100%;
    color: #162c4e;
    margin-bottom: 3px;
  }
}
</style>
