<template>
   <div>
      <Carousel :slides='slides'/>
      <div class="row justify-center">
        <div class="col-md-10">
          <section>
            <TitleSpace titulo="Latest News"/>
            <CardNews :cards='cards'/>
          </section>
        </div>
      </div>
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
   ...mapGetters('slides', ['slides', 'cards']),
  }
}
</script>

<style scoped>

  section {
    margin: 4rem 0;
  }
  
</style>
