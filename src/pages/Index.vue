<template>
   <div >
     <Carousel :slides='slides' />
     <CardNews :cards='cards' titulo="Latest News" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carousel from 'components/Carousel/Carousel';
import CardNews from 'components/Cards/CardNews';

export default {
  name: 'PageIndex',
  components: {
    Carousel,
    CardNews,
  },
  data(){
    return{
      
    }
  },
  computed: {
   ...mapGetters('slides', ['slides']),
   ...mapGetters('slides', ['cards'])
  }
}
</script>
<style scoped>
 
</style>
