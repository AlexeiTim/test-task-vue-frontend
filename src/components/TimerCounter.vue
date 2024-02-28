<template>
  <div class="timer">
    <template v-for="(clock, index) in clocks" :key="clock.name">
      <span class="timer__quotes" v-if="index !== 0">:</span>
      <TimerItem :clock="clock" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TimerItem from "./TimerItem.vue";
import calculateTimeFromDeadline from "../utils/calculateTimeFromDeadline";
import { convertToShortDate } from "../utils/convertToShortDate";
import { IClock } from "../types/clock.interface";
import { DEADLINE } from "../constants/deadline";

const clocks = ref<IClock[]>([]);
const initTimer = () => {
  const { days, hours, minutes, seconds } = calculateTimeFromDeadline(DEADLINE);
  clocks.value = [
    {
      time: days,
      name: "Days",
    },
    {
      time: hours,
      name: "Hours",
    },
    {
      time: minutes,
      name: "Minutes",
    },
    {
      time: seconds,
      name: "Seconds",
    },
  ];
};

initTimer();
const converterTime = () => {
  if (document.body.offsetWidth < 769) {
    for (let key in clocks.value) {
      if (clocks.value[key].name) {
        const param = clocks.value[key].name as string;
        clocks.value[key].name = convertToShortDate(param);
      }
    }
  }
};

setInterval(() => {
  initTimer();
  converterTime();
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

@media (max-width: 768px) {
  .timer {
    display: inline-flex;
    align-items: center;
    margin-bottom: 40px;
    &__quotes {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 100%;
      margin-bottom: 57px;
      margin-right: 12px;
      margin-left: 12px;
      color: #162c4e;
    }
  }
}

@media (max-width: 360px) {
  .timer {
    display: inline-flex;
    align-items: center;
    margin-bottom: 40px;
    &__quotes {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 100%;
      margin-bottom: 57px;
      margin-right: 4px;
      margin-left: 4px;
      color: #162c4e;
    }
  }
}
</style>
