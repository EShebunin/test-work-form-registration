<template>
  <button 
    :disabled="disabled" 
    :type="type"
    @click="clickHandler"
    class="ui-button"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit('click', e)
    }
  }
};
</script>
