<template>
   <div >
      <Carousel :slides='slides'/>
      <TitleSpace titulo="Latest News"/>
      <CardNews :cards='cards'/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carousel from 'components/Carousel/Carousel';
import CardNews from 'components/Cards/CardNews';
import TitleSpace from 'components/Titulo/TitleSpace';

export default {
  name: 'PageIndex',
  components: {
    Carousel,
    CardNews,
    TitleSpace,
  },
  computed: {
   ...mapGetters('slides', ['slides']),
   ...mapGetters('slides', ['cards'])
  }
}
</script>
<style scoped>
 
</style>
