<template>
  <AppPopup class="popup" @close="emits('close')">
    <template v-if="result">
      <h3>SUCCESS!</h3>
      <p>You have successfully subscribed to the email newsletter</p>
    </template>
    <template v-else>
      <h3>ERROR!</h3>
      <p>Email is not correctly</p>
    </template>

    <AppButton width="200px" @click="emits('close')">Close</AppButton>
  </AppPopup>
</template>

<script lang="ts" setup>
import AppPopup from "./AppPopup.vue";
import AppButton from "./AppButton.vue";
const { result } = defineProps<{
  result: Boolean;
}>();

const emits = defineEmits<{
  (e: "close"): void;
}>();
</script>

<style lang="scss" scoped>
.popup {
  text-align: center;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 104%;
    text-transform: uppercase;
    color: #162c4e;
    margin-bottom: 29px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    max-width: 280px;
    margin-bottom: 30px;

    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
