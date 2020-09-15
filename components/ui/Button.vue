<template>
  <button
    :class="['button', `button_theme_${theme}`, { button_disabled: disabled }]"
    @click="$emit('btnClick')"
    :disabled="disabled"
    :type="buttonType"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: { type: String, default: 'purple' },
    buttonType: { type: String, required: true },
    disabled: Boolean,
  },
};
</script>

<style scoped>
.button {
  border: none;
  outline: none;
  max-width: 226px;
  width: 100%;
  height: 52px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}

.button_theme_white {
  background-color: #fbfbfb;
  color: #000;
}

.button_theme_purple {
  background-color: #613a93;
  color: #fff;
}
</style>
