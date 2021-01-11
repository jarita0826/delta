<template>
  <div class="bg-white" v-show="value">
    <div class="modal px-8 py-6">
      <div class="flex item-center justify-end">
        <button @click.prevent="close">
          <fa :icon="['fas', 'times']" class="text-text" />
        </button>
      </div>

      <div class="p-3">
        <ul class="border-b-2 border-text">
          <li>
            <button
              class="w-1/3 text-primary text-center font-bold border-b-2 border-red pb-2"
            >
              SEARCH
            </button>
          </li>
        </ul>

        <div class="mt-6 text-primary">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    value: {
      required: true,
    },
  },
  data() {},
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
  },

  computed: {},
};
</script>
