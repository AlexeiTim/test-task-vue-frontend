<template>
  <div>
    <input
      :placeholder="placeholder"
      class="input"
      type="text"
      :value="value"
      @change="changeValue"
    />
  </div>
</template>

<script setup lang="ts">
const { placeholder = "16px 73px" } = defineProps<{
  placeholder: string;
  value: string;
}>();

const emits = defineEmits<{
  (e: "changeValue", value: string): void;
}>();

const changeValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  return emits("changeValue", target.value);
};
</script>

<style lang="scss" scoped>
.input {
  font-family: "Roboto";
  width: 440px;
  height: 59px;
  padding: 16px 100px 16px 27px;
  border-radius: 40px;
  font-size: 18px;
  line-height: 150%;
}

@media (max-width: 768px) {
  .input {
    width: 360px;
  }
}

@media (max-width: 600px) {
  .input {
    width: 280px;
  }
}
</style>
