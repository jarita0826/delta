<template>
  <!-- @click.prevent="triggerCalendar" -->
  <div class="border-b-1 border-text">
    <button class="w-full px-4 py-2 flex justify-between items-center">
      <span ref="" class="text-text text-3xl">Depart</span>
      <fa :icon="['far', 'calendar-minus']" class="text-text text-2xl" />
    </button>
  </div>
</template>

<script>
export default {};
</script>
