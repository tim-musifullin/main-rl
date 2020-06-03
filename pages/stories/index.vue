<template>
  <div>
    all stories
    <my-header></my-header>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  components: {
    'my-header': Header, // переименовал Header
  },
};
</script>

<style scoped></style>
