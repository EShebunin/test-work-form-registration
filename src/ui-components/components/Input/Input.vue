<template>
  <label class="ui-input">
    <span class="ui-input__label"> {{ label }} </span>
    <input 
      class="ui-input__input" 
      type="text" 
      :value="value"
      @input="inputHandler"
      :placeholder="placeholder"
      :readonly="readonly" 
    />
    <svg
      v-if="icon"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      class="ui-input__icon"
    >
      <path
        d="M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z"
        fill="black"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="7"
        y="11"
        width="16"
        height="9"
      >
        <path
          d="M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect width="30" height="30" fill="#0880AE" />
      </g>
    </svg>
    <span v-if="error && value.length" class="ui-input__error">
      {{ errorText }}
    </span>
  </label>
</template>
<script>
export default {
  props: {
    value: {
      type: String || Number,
      default: '',
    },
    placeholder: {
      type: String || Number,
      default: 'Placeholder',
    },
    label: {
      type: String || Number,
      default: 'Label',
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: 'Validation error message',
    },
    icon: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    inputHandler(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
