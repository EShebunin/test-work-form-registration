<template>
  <button :disabled="disabled" class="ui-button">
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
  },
};
</script>
