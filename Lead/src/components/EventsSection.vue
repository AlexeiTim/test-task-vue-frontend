<template>
  <section
    id="events"
    class="events"
  >
    <h2 class="events__title">All events</h2>
    <EventsAccordion
      @changeActiveEvent="setActiveEvent"
      :events="events"
      :activeEvent="activeEvent"
    />
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {
  partyImage1,
  partyImage2,
  partyImage3,
  partyImage4,
  partyImage5,
  partyImage6,
  partyImage7,
  partyImage8,
} from "../constants/images";
import EventsAccordion from "./EventsAccordion.vue";
import {IEvent} from "../types/event.interface";
const events = ref<IEvent[]>([
  {
    name: "Hawaiian party",
    image: partyImage1,
    date: "13.02.2023",
  },
  {
    name: "Мafia party",
    image: partyImage2,
    date: "13.02.2023",
  },
  {
    name: "Party",
    image: partyImage3,
    date: "13.02.2023",
  },
  {
    name: "Party on the beach",
    image: partyImage4,
    date: "13.02.2023",
  },
  {
    name: "Home Security",
    image: partyImage5,
    date: "13.02.2023",
  },
  {
    name: "Network Design & Implementation",
    image: partyImage6,
    date: "13.02.2023",
  },
  {
    name: "System Design & Engineering",
    image: partyImage7,
    date: "13.02.2023",
  },
  {
    name: "Client Care Plans",
    image: partyImage8,
    date: "13.02.2023",
  },
]);
const activeEvent = ref<number>(1);

const setActiveEvent = (value: number) => {
  activeEvent.value = value;
};
</script>

<style lang="scss" scoped>
.events {
  padding: 110px 108px 99px 107px;

  &__title {
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 104%;
    text-align: center;
    text-transform: uppercase;
    color: #162c4e;
    opacity: 0.39;
    margin-bottom: 40px;
  }

  &__accordion {
    width: 1705px;
    height: 682px;
  }
}

@media (max-width: 1705px) {
  .events {
    padding: 110px 108px 99px 107px;

    &__title {
      text-align: center;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 72px;
      line-height: 104%;
      text-align: center;
      text-transform: uppercase;
      color: #162c4e;
      opacity: 0.39;
      margin-bottom: 40px;
    }

    &__accordion {
      width: 100%;
      height: 682px;
    }
  }
}

@media (max-width: 1140px) {
  .events {
    padding: 40px;
    &__title {
      text-align: center;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 104%;
      text-align: center;
      text-transform: uppercase;
      color: #162c4e;
      opacity: 0.39;
      margin-bottom: 40px;
    }

    &__accordion {
      width: auto;
      height: 100%;
    }
  }
}

@media (max-width: 460px) {
  .events {
    padding: 20px;
  }
}

@media (max-width: 360px) {
  .events {
    padding-top: 59px;
    padding-bottom: 52px;
  }
  .events__title {
    font-size: 36px;
    margin-bottom: 20px;
  }
}
</style>
