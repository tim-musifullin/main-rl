<template>
  <div class="pagination">
    <div
      v-for="index in pagesCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        {
          'pagination__item_active': index === active,
        },
      ]"
    >
      {{index}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0
    },
    itemsPerPage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    },
  },
  methods: {
    setActive(index) {
      this.active = index
      this.$emit('onPageChanged', index)
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination__item {
  width: 58px;
  height: 58px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #fbfbfb;
  user-select: none;
  justify-content: center;
  margin-left: 10px;
  transition: background 0.3s;
}

.pagination__item:last-child {
  margin-right: 0px;
}

.pagination__item_active,
.pagination__item:hover {
  background: #F4F4F4;
}
</style>
