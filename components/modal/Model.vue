<template>
  <div class="bg-white absolute mileModal z-10">
    <div class="px-8 py-6">
      <div class="flex item-center justify-between">
        <span class="text-primary text-3xl">{{ title }}</span>
        <button @click="$emit('close')">
          <fa :icon="['fas', 'times']" class="text-text" />
        </button>
      </div>
      <div>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style scoped>
.mileModal {
  top: -100px;
  width: 700px;
  box-shadow: 1px 2px 4px rgba(153, 155, 160, 0.12);
  border-radius: 2px;
  background: white;
}
</style>
