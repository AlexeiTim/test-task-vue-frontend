<template>
  <div class="timer__item">
    <p class="item__time">{{ props.clock.time }}</p>
    <AppTextBackground class="item__bg">{{
      props.clock.name
    }}</AppTextBackground>
  </div>
</template>

<script setup lang="ts">
import { IClock } from "../types/clock.interface";
import AppTextBackground from "./AppTextBackground.vue";
interface Props {
  clock: IClock;
}
const props = defineProps<Props>();
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

@media (max-width: 768px) {
  .timer__item {
    text-align: center;
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 100%;
      color: #162c4e;
      margin-bottom: 3px;
    }
  }
  .item__bg {
    width: 64px;
    height: 40px;
  }
}
</style>
