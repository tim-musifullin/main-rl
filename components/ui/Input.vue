<template>
  <label class="section">
    {{ labelText }}
    <input
      :class="['input', className]"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :required="required"
      v-model="content"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    labelText: String,
    placeholder: String,
    name: String,
    required: String,
    type: String,
    className: String
  },
  data() {
    return {
      content: this.value
    }
  }
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
