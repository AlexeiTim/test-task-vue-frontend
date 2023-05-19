<template>
  <footer class="footer">
    <div class="footer__input">
      <AppInput placeholder="Enter your Email and get notified" />
      <div class="footer__button">
        <AppArrowIcon />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppArrowIcon from "../components/AppArrowIcon.vue";
import AppInput from "../components/AppInput.vue";
</script>

<style lang="scss" scoped>
.footer {
  padding: 61px 0 72px 0;
  background-color: #162c4e;
  display: flex;
  align-items: center;
  justify-content: center;
  &__input {
    display: inline-block;
    position: relative;
  }
  &__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    width: 43px;
    height: 43px;
    background-color: #df2224;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
