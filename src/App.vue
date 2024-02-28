<script setup lang="ts">
import {ref, onMounted} from "vue";
import TheFooter from "./components/TheFooter.vue";
import SubscribePopup from "./components/SubscribePopup.vue";
import AppLoader from "./components/AppLodaer.vue";
import emailService from "./services/email.service";
import EventsSection from "./components/EventsSection.vue";
import MainSection from "./components/MainSection.vue";
const isLoading = ref(false);
const isShowPopup = ref(false);
const stopAnimation = ref(false);
const email = ref("");
const valideEmail = ref();

const togglePopup = () => {
  isShowPopup.value = !isShowPopup.value;
};

const changeEmailValue = (value: string) => {
  email.value = value;
};

const fetchValidateEmail = async () => {
  if (!email.value.length) {
    isShowPopup.value = true;
    valideEmail.value = false;
    return;
  }
  isLoading.value = true;
  await emailService
    .validateEmail(email.value)
    .then((result) => {
      togglePopup();
      valideEmail.value = result;
      email.value = "";
    })
    .finally(() => (isLoading.value = false));
};

const giveShowClass = () => {
  return stopAnimation.value == true ? "show" : "";
};

onMounted(() => {
  stopAnimation.value = true;
});
</script>

<template>
  <div
    class="app"
    :class="isShowPopup ? 'overflow' : ''"
  >
    <AppLoader v-show="isLoading" />
    <Transition>
      <SubscribePopup
        :result="valideEmail"
        v-if="isShowPopup"
        @close="togglePopup"
      />
    </Transition>

    <MainSection :giveShowClass="giveShowClass()" />
    <div :class="`app__left-bg ${giveShowClass()}`"></div>
    <div :class="`app__right-bg ${giveShowClass()}`"></div>
    <TheFooter
      :email="email"
      @changeEmail="changeEmailValue"
      @fetchData="fetchValidateEmail"
    />
    <EventsSection />
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__left-bg {
    position: absolute;
    background-image: url("./assets/images/left-top-bg.png");
    background-position: right bottom;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 0;
    width: 0;
    transition: all 1.7s;
    height: 50vh;
    width: 25vw;
  }
  &__left-bg.show {
    height: 50vh;
    width: 25vw;
    animation: show-width-left 1.7s ease;
  }
  &__right-bg {
    position: absolute;
    right: 0;
    height: 0;
    width: 0;
    background-image: url("./assets/images/right-top-bg.png");
    background-position: right bottom;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: all 0.8s;
    height: 35vh;
    width: 18vw;
  }
  &__right-bg.show {
    height: 35vh;
    width: 18vw;
    animation: show-width-right 1.7s ease;
  }
}
@keyframes show-width-right {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 0;
  }
  100% {
    height: 35vh;
    width: 18vw;
  }
}

@keyframes show-width-left {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 0;
  }
  100% {
    height: 50vh;
    width: 25vw;
  }
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
@media (max-width: 1200px) {
  .app {
    &__left-bg.show {
      height: 20vh;
    }

    &__right-bg.show {
      height: 25vh;
      width: 25vw;
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
      font-size: 36px;
      line-height: 104%;
    }

    &__subtitle {
    }
  }
}

@media (max-width: 600px) {
  .app {
    &__left-bg.show {
      height: 14vh;
      width: 40vw;
      background-size: 100% 113%;
    }

    &__right-bg.show {
      height: 18vh;
      width: 46vw;
    }
  }

  .content {
    &__event-info {
      p {
      }
    }

    &__logo.show {
      margin-top: 80px;
      margin-bottom: 168px;
    }

    &__titles {
    }

    &__title {
      font-size: 36px;
      line-height: 104%;
    }

    &__subtitle {
    }
  }
}

@media (max-width: 360px) {
  .app {
    &__left-bg.show {
      height: 16vh;
      width: 49vw;
      background-size: 100% 128%;
    }

    &__right-bg.show {
      height: 18vh;
      width: 44vw;
    }
  }

  .content {
    &__event-info {
      p {
      }
    }

    &__logo.show {
      margin-top: 80px;
    }

    &__titles {
      margin-top: 66px;
    }

    &__title {
      font-size: 36px;
      line-height: 104%;
      margin-bottom: 16px;
    }

    &__subtitle {
    }
  }
}
</style>
