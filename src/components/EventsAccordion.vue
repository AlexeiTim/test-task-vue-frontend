<template>
  <div class="events__accordion accordion">
    <EventsAccordionItem
      v-for="(event, index) in props.events"
      :key="index"
      :class="`accordion__item`"
      @click="emits('changeActiveEvent', index + 1)"
      :activeEvent="props.activeEvent"
      :event="event"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import {IEvent} from "../types/event.interface";
import EventsAccordionItem from "./EventsAccordionItem.vue";
const props = defineProps<{
  events: IEvent[];
  activeEvent: number;
}>();

const emits = defineEmits<{
  (e: "changeActiveEvent", value: number): void;
}>();
</script>

<style lang="scss" scoped>
.accordion {
  display: flex;
  align-items: start;
  gap: 4px;
  transition: all 0.4s;
}

@media (max-width: 1140px) {
  .accordion {
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: all 0.4s;
  }
}
</style>
