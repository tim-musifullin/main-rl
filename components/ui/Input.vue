<template>
    <input
      :class="['input',
        className, {
        'input_bottom-bordered': bottomBordered,
        input_disabled: disabled,
      }]"
      :type="inputType"
      :placeholder="inputPlaceholder"
      @input="handleInput"
      v-model="content"
    />
</template>

<script>
export default {
  props: {
    className: String,
    bottomBordered: Boolean,
    inputType: String,
    inputPlaceholder: String,
    value: String,
    disabled: Boolean,
  },
  data() {
    return {
      content: this.value
    }
  },
  watch: {
    value(newVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped>
.section {
  width: 100%;
}
.input {
  display: block;
  width: 100%;
  height: 52px;
  border: 1px solid #e8e8e8;
  outline: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  padding-left: 10px;
}
.input:focus {
  outline: 2px solid #613A93;
}
</style>
