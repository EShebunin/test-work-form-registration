<template>
  <div class="ui-select">
    <div 
      @click="open" 
      class="ui-select__input"
    >
      <ui-input icon readonly :value="value" />
    </div>
    <div 
      v-if="openDropdown" 
      v-click-outside="close"
      class="ui-select__dropdown"
    >
      <div
        class="ui-select__dropdown__item"
        v-for="(item, index) in items"
        :key="index"
        @click="pickItem(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String || Number,
      default: '',
    },
  },
  data() {
    return {
      openDropdown: false,
    };
  },
  methods: {
    open() {
      this.openDropdown = true;
    },
    close() {
      this.openDropdown = false;
    },
    pickItem(item) {
      this.$emit('input', item);
    },
  },
};
</script>
