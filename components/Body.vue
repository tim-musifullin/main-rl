<template>
  <div class="page">
    <Cover />
    <Video />
    <Strap>и в отличие от рака,</Strap>
    <Stories />
    <Strap>рассказывайте ваши истории в инстаграмм</Strap>
    <Insta />
    <History />
    <Statistics />
    <About />
  </div>
</template>

<script>
import Cover from '@/components/Cover';
import Video from '@/components/Video';
import Strap from '@/components/Strap';
import Stories from '@/components/Stories';
import Insta from '@/components/Insta';
import History from '@/components/History';
import Statistics from '@/components/Statistics';
import About from '@/components/About';

export default {
  components: {
    Cover,
    Video,
    Strap,
    Stories,
    Insta,
    History,
    Statistics,
    About,
  },
};
</script>

<style scoped>
.page {
  margin: 0 auto;
}
</style>
