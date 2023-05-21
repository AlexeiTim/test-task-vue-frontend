<template>
  <footer class="footer">
    <div class="row-1"></div>
    <div class="row-2">
      <div class="footer__input">
        <AppInput
          :value="email"
          @keyup.enter="emits('fetchData')"
          @changeValue="changeValue"
          placeholder="Enter your Email and get notified"
        />
        <div class="footer__button">
          <AppArrowIcon @click="emits('fetchData')" />
        </div>
      </div>
    </div>
    <div class="row-3">
      <a href="#events">
        <div class="footer__scroll">
          <span class="footer__scroll-text">Other Events</span>
          <AppArrowIcon class="arrow" />
        </div>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppArrowIcon from "../components/AppArrowIcon.vue";
import AppInput from "../components/AppInput.vue";
const {email} = defineProps<{
  email: string;
}>();
const emits = defineEmits<{
  (e: "fetchData"): void;
  (e: "changeEmail", value: string): void;
}>();

const changeValue = (value: string) => {
  emits("changeEmail", value);
};
</script>

<style lang="scss" scoped>
.arrow {
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
}

.row-2 {
  text-align: center;
}

.row-3 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer {
  &__scroll {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      color: #ffffff;
    }
  }
  padding: 61px 0 72px 0;
  background-color: #162c4e;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  &__input {
    display: inline-block;
    position: relative;
    margin: auto;
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

@media (max-width: 768px) {
  .footer {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .row-1 {
    display: none;
  }
  .row-3 {
    .footer__scroll-text {
      font-size: 16px;
    }
  }
}
</style>
