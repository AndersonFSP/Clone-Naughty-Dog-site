<template>
  <div>
    <div class="q-pa-md row justify-center q-gutter-md">
          <q-card class="my-card" v-for="card in cards" :key="card.id">
            <CardFoto :foto="card.foto"/>
            <q-card-section>
              <div class="text-h6 text-uppercase  hov">{{ card.info }}</div>
              <div class="text-subtitle2 hov" >{{ card.date }}</div>
              <div style="margin-top:50px;" class="hov">Read More <q-icon name="arrow_forward"></q-icon></div>
            </q-card-section>
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
    .hov{
      color:rgb(63, 60, 60);
        transition: color 0.2s ease-out;
    }
    
    .hov:hover{
        color: red;
    }
</style>