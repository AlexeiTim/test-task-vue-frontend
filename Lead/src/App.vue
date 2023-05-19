<script setup lang="ts">
import AppLogo from "./components/AppLogo.vue";
import AppButton from "./components/AppButton.vue";
import TheFooter from "./components/TheFooter.vue";
import AppArrowIcon from "./components/AppArrowIcon.vue";
import TimerCounter from "./components/TimerCounter.vue";
</script>

<template>
  <div class="app">
    <main class="main">
      <div class="content">
        <AppLogo class="content__logo" />
        <div class="content__titles">
          <h1 class="content__title">Under Construction</h1>
          <h3 class="content__subtitle">We're making lots of improvements and will be back soon</h3>
        </div>

        <TimerCounter class="content__timer" />
        <div class="content__event-info">
          <p>Check our event page when you wait:</p>
          <div class="event-button">
            <AppButton class="button">Go to the event</AppButton>
            <AppArrowIcon class="icon" />
          </div>
        </div>
      </div>
    </main>

    <div class="app__left-bg"></div>
    <div class="app__right-bg"></div>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__event-info {
    text-align: center;
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
    margin-top: 60px;
    margin-bottom: 93px;
  }
  &__titles {
    text-align: center;
    margin-bottom: 32px;
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
}
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
.app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__left-bg {
    height: 50vh;
    width: 25vw;
    position: absolute;
    background-image: url("./assets/images/left-top-bg.png");
    background-position: right bottom;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  &__right-bg {
    height: 35vh;
    width: 18vw;
    position: absolute;
    right: 0;
    background-image: url("./assets/images/right-top-bg.png");
    background-position: right bottom;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.main {
  flex-grow: 1;
}

@media (max-width: 1200px) {
  .app {
    &__left-bg {
      height: 25vh;
      width: 15vw;
    }

    &__right-bg {
      height: 25vh;
      width: 15vw;
    }
  }
}

@media (max-width: 768px) {
  .content {
    &__event-info {
      p {
      }
    }
    &__logo {
      margin-top: 100px;
      margin-bottom: 168px;
    }
    &__titles {
    }
    &__title {
    }
    &__subtitle {
    }
  }
}
</style>
