<template>
  <div>
    <div class="q-pa-md row justify-center q-gutter-md">
          <q-card class="my-card" v-for="card in cards" :key="card.id">
            <card-foto :foto="card.foto"/>
            <div v-if="mode == 'press'" class="text-white text-uppercase text-h6 press">{{card.press }}</div>
            <q-card-section>
              <div class="text-h6 text-uppercase  hov">{{ card.info }}</div>
              <div  v-if="mode == 'news'" class="text-subtitle2 hov" >{{ card.date }}</div>
              <div v-else class="text-h7">{{ card.subInfo }}</div>
            </q-card-section>
          <div v-if="showReadMore" class="read-more">
            Read More 
            <q-btn 
              outline 
              round 
              size="0.4rem" 
              class="arrow" 
              icon="arrow_forward">
            </q-btn>
          </div>
          </q-card>
    </div>
</div>
</template>

<script>
import CardFoto from 'components/Cards/assist/CardFoto';

export default {
    name: 'card-news',
    components:{
        CardFoto,
    },
    props:{
      cards: Array,

      readMore: {
        type: Boolean,
        default: true
      },

      mode: {
        type: String,
        default: 'news',
        validator: (value) => {
          return ['news', 'press'].indexOf(value) !== -1
        }
      }
    },
    computed:{
      showReadMore(){
        return this.readMore
      }
    }
}
</script>

<style scoped>
    .my-card {
        width: 100%;
        min-height:396px;
        max-width: 300px;    
    }
    /* .my-card:first-child{
      float: left;
       width: 100%;
        height:700px;
        max-width: 600px;
    } */
    .hov {
      color:rgb(63, 60, 60);
        transition: color 0.2s ease-out;
    }
    
    .hov:hover {
        color: red;
    }
    .read-more{
      position: absolute;
      bottom: 0;
      color: red;
      margin:0px 0px 10px 10px;
    }

    .read-more:hover .arrow {
        color:rgb(63, 60, 60);
        margin-left: 5px;
    }

     .read-more:hover {
        color:rgb(63, 60, 60);
    }
    
    .arrow {
      transition: 0.2s all;
    }

    .press {
        position:absolute; 
        top: 105px; 
        padding: .7rem;
        background-color: black;
    }

    .my-card:hover .press {
      background-color: red;
    }
</style>