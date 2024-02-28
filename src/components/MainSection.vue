<template>
  <section class="main">
    <div class="content">
      <a href="/"
        ><AppLogo :class="`content__logo ${props.giveShowClass}`"
      /></a>

      <div :class="`content__titles ${props.giveShowClass}`">
        <h1 class="content__title">Under Construction</h1>
        <h3 class="content__subtitle">
          We're making lots of improvements and will be back soon
        </h3>
      </div>

      <TimerCounter :class="`content__timer ${props.giveShowClass}`" />
      <div :class="`content__event-info ${props.giveShowClass}`">
        <p>Check our event page when you wait:</p>
        <div class="event-button">
          <a href="https://egorovagency.by/#main" target="_blank">
            <AppButton class="button" width="240px">Go to the event</AppButton>
            <AppArrowIcon class="icon"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppArrowIcon from "./AppArrowIcon.vue";
import AppButton from "./AppButton.vue";
import AppLogo from "./AppLogo.vue";
import TimerCounter from "./TimerCounter.vue";
const props = defineProps<{
  giveShowClass: string;
}>();
</script>

<style lang="scss" scoped>
.event-button {
  margin-bottom: 76px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  .button {
    cursor: pointer;
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 20px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__event-info {
    text-align: center;
    &.show {
      animation: show-opacity 1.4s ease;
    }
    p {
      margin-bottom: 12px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  &__logo {
    height: 0;
    margin-top: 0px;
    // margin-bottom: 93px;
    transition: all 0.7s;
  }
  &__logo.show {
    animation: show-opacity 0.5s ease;
    width: 100%;
    height: 100%;
    margin-top: 60px;
  }

  &__titles {
    text-align: center;
    transition: all 2;
    margin-top: 0;
  }

  &__titles.show {
    height: 100%;
    margin-top: 93px;
    animation: show-opacity 0.7s ease;
  }

  &__title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 104%;
    /* identical to box height, or 75px */

    text-align: center;
    text-transform: uppercase;

    color: #162c4e;

    opacity: 0.39;
    margin-bottom: 8px;
  }

  &__subtitle {
    text-align: center;
    max-width: 424px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    margin: 0 auto;
    /* or 27px */
    color: rgba(0, 0, 0, 0.8);
  }
}

.content__timer {
  margin-bottom: 72px;
  transition: all 0.5s;
  &.show {
    margin-top: 32px;
    animation: show-opacity 1.2s ease;
  }
}

.main {
  flex-grow: 1;
}

@keyframes show-opacity {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .content__titles.show {
    margin-top: 166px;
  }
  .content__title {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .timer.content__timer.show {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .content__event-info.show {
    p {
      margin-bottom: 15px;
    }
    div {
      margin-bottom: 169px;
    }
  }
}

@media (max-width: 600px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__event-info {
      text-align: center;
      &.show {
        animation: show-opacity 1.4s ease;
      }
      p {
        margin-bottom: 12px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: rgba(0, 0, 0, 0.8);
      }
    }

    &__logo {
      height: 0;
      margin-top: 0px;
      // margin-bottom: 93px;
      transition: all 0.7s;
    }
    &__logo.show {
      animation: show-opacity 0.5s ease;
      width: 100%;
      height: 100%;
      margin-top: 80px;
    }

    &__titles {
      text-align: center;
      transition: all 2;
      margin-top: 0;
    }

    &__titles.show {
      height: 100%;
      margin-top: 66px;
      animation: show-opacity 0.7s ease;
    }

    &__title {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 104%;
      max-width: 320px;
      text-align: center;
      /* identical to box height, or 75px */

      text-align: center;
      text-transform: uppercase;

      color: #162c4e;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.39;
      margin-bottom: 16px;
    }

    &__subtitle {
      text-align: center;
      max-width: 424px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      margin: 0 auto;
      /* or 27px */
      color: rgba(0, 0, 0, 0.8);
    }
  }
}

@media (max-width: 360px) {
  .content__event-info.show {
    div {
      margin-bottom: 120px;
    }
  }
}
</style>
