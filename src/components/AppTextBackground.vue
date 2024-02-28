<template>
  <div
    :style="{
      backgroundImage: `url('${backgroundText}')`,
    }"
    class="cover"
  >
    <span class="text"><slot></slot></span>
  </div>
</template>

<script setup lang="ts">
import backgroundText from "../assets/images/Vector.png";
</script>

<style lang="scss" scoped>
.cover {
  position: relative;
  display: inline-block;
  width: 132px;
  height: 54px;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  .text {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 16px;
  }
}
</style>
