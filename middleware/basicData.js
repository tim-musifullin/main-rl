export default async function({ store }) {
  await store.dispatch('blocks/fetchBlocks');
  await store.dispatch('statistics/fetchStatistics');
  await store.dispatch('instagram/fetchPhotos');
  await store.dispatch('stories/fetchStories');
}
