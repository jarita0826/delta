<template>
  <div>
    <div v-if="title" :class="boxClass">
      {{ title }}
    </div>
    <div class="flex" :class="inputClass">
      <input type="checkbox" :id="id" :value="value" v-model="currentValue" />
      {{ currentValue }}
      <label :class="labelClass" :for="label">
        {{ label }}
      </label>

      <a v-if="icon" class="ml-2 cursor-pointer" @click="showModal = true">
        <fa :icon="[iconTitle, iconStyle]" :class="faClass" />
        <Model
          v-show="showModal"
          @close="showModal = false"
          :title="modelTitle"
          :description="description"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: undefined,
    },
    modelTitle: {
      type: String,
      default: undefined,
    },
    id: {
      type: String,
      default: undefined,
    },
    value: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: undefined,
    },
    labelClass: {
      type: String,
      default: "text-white ml-6",
    },
    faClass: {
      type: String,
      default: "text-xl",
    },
    iconTitle: {
      type: String,
      default: "far",
    },
    iconStyle: {
      type: String,
      default: "question-circle",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    boxClass: {
      type: String,
      default: "mb-4",
    },
    title: {
      type: Boolean,
      default: undefined,
    },
    inputClass: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      currentValue: [],
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style>
input[type="checkbox"] {
  position: relative;
  cursor: pointer;
}
input[type="checkbox"]:before {
  content: "";
  display: block;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 0;
  left: 0;
  border: 2px solid #7d8388;
  background-color: #11172b;
}
input[type="checkbox"]:checked:after {
  content: "";
  display: block;
  width: 8px;
  height: 13px;
  border: solid #7d8388;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(42deg);
  -ms-transform: rotate(42deg);
  transform: rotate(42deg);
  position: absolute;
  top: 3px;
  left: 8px;
}
</style>
