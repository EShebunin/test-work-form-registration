<template>
  <label class="ui-checkbox">
    <input
      type="checkbox"
      class="ui-checkbox__native"
      :checked="value"
      @change="checkedHandler"
    />
    <div class="ui-checkbox__custom">
      <svg class="ui-checkbox__icon" viewBox="0 0 24 24" fill="none">
        <path
          d="M18.6343 6.63431C18.9467 6.32189 19.4533 6.32189 19.7657 6.63431C20.0781 6.94673 20.0781 7.45326 19.7657 7.76568L10.1657 17.3657C9.85325 17.6781 9.34672 17.6781 9.0343 17.3657L5.0343 13.3657C4.72188 13.0533 4.72188 12.5467 5.0343 12.2343C5.34672 11.9219 5.85325 11.9219 6.16567 12.2343L9.59999 15.6686L18.6343 6.63431Z"
        />
      </svg>
    </div>
  </label>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    checkedHandler(e) {
      this.$emit('change', e.target.checked);
    },
  },
};
</script>
