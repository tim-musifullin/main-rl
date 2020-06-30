<template>
  <div class="insta-grid">
    <InstaCard
      v-for="photo in instagram"
      :key="instagram.indexOf(photo)"
      :link="photo.url"
      :photo="`background-image:url('${photo.display_url}')`"
    />
  </div>
</template>

<script>
import InstaCard from '@/components/ui/InstaCard';
export default {
  components: {
    InstaCard
  },
  data() {
    return {
      storiesName: '',
      itemsPerPage: 8,
      startIndex: 0
    }
  },
  computed: {
    instagram () {
        const { instagram } = this.$store.state
        return instagram.photos.filter((item, idx) => idx >= this.startIndex && idx <= (this.startIndex + this.itemsPerPage - 1))
      }
  },
};
</script>

<style scoped>
.insta-grid {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 195px));
  grid-template-rows: repeat(2, minmax(140px, 195px));
  column-gap: 40px;
  row-gap: 40px;
}
</style>
