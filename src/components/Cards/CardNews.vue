<template>
  <div>
    <div class="q-pa-md row justify-center q-gutter-md">
          <q-card class="my-card" v-for="card in cards" :key="card.id">
            <CardFoto :foto="card.foto"/>
            <q-card-section>
              <div class="text-h6 text-uppercase  hov">{{ card.info }}</div>
              <div class="text-subtitle2 hov" >{{ card.date }}</div>
            </q-card-section>
              <div class="hov read-more">Read More <q-icon name="arrow_forward"></q-icon></div>
          </q-card>
    </div>
</div>
</template>

<script>
import CardFoto from 'components/Cards/assist/CardFoto';

export default {
    name: 'cardnews',
    components:{
        CardFoto,
    },
    props:{
      cards: Array,
    }
}
</script>

<style>
    .my-card{
        width: 100%;
        height:380px;
        max-width: 300px;    
    }
    /* .my-card:first-child{
      float: left;
       width: 100%;
        height:700px;
        max-width: 600px;
    } */
    .hov{
      color:rgb(63, 60, 60);
        transition: color 0.2s ease-out;
    }
    
    .hov:hover{
        color: red;
    }
    .read-more{
      position: absolute;
      bottom: 0;
      margin:0px 0px 10px 10px;
    }
</style>