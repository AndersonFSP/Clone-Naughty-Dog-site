<template>
   <div>
      <carousel :slides='slides'/>
      <div class="row justify-center">
        <div class="col-md-10">
          <section>
            <title-space titulo="Latest News"/>
            <card-news :cards='cards' />
          </section>
          <section>
             <title-space titulo="in the press"/>
            <card-news 
              :cards='cardsPress' 
              :readMore="false" 
               mode="press"
            />
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
   ...mapGetters('slides', ['slides', 'cards', 'cardsPress']),
  }
}
</script>

<style scoped>

</style>
