<template>
   <q-carousel
      arrows
      animated
      infinite
      v-model="firstImage"
      height="600px"
    >
      <q-carousel-slide v-for="slide in slides" :key="slide.name" :name="slide.name" :img-src="slide.foto" >
        <div class="absolute-bottom custom-caption text-uppercase">
          <div class="text-h4" style="margin-left:100px;">{{ slide.title }}</div>
          <div class="text-subtitle1" style="margin-left:110px;">{{slide.subtitle }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>

<script>
export default {
    name: 'carousel',
    props:{
        slides: Array,
    },
    data(){
        return{    
          firstImage: 'first'
        }
    },
}
</script>

<style scoped>
    .custom-caption{
        text-align: left;
        padding: 12px;
        color: white;
        background-color: rgba(0, 0, 0, .3)
    }
</style>