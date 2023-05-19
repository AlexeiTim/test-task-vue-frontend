<template>
  <div class="timer">
    <!-- <TimerItem
      v-for="clock in clocks"
      :clock="clock"
    /> -->
    <template
      v-for="(clock, index) in clocks"
      :key="clock.name"
    >
      <span
        class="timer__quotes"
        v-if="index !== 0"
        >:</span
      >

      <TimerItem :clock="clock" />
    </template>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import TimerItem from "./TimerItem.vue";
import calculateTimeFromDeadline from "../utils/calculateTimeFromDeadline";
const deadline = "2023-05-31";
interface IClock {
  time: string | number;
  name: string;
}
const clocks = ref<IClock[]>([]);

setInterval(() => {
  const {days, hours, minutes, seconds} = calculateTimeFromDeadline(deadline);
  clocks.value = [
    {
      time: days,
      name: "days",
    },
    {
      time: hours,
      name: "hours",
    },
    {
      time: minutes,
      name: "minutes",
    },
    {
      time: seconds,
      name: "seconds",
    },
  ];
}, 1000);
</script>

<style lang="scss" scoped>
.timer {
  display: inline-flex;
  align-items: center;

  &__quotes {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 100%;
    margin-bottom: 66px;
    color: #162c4e;
  }
}
</style>
