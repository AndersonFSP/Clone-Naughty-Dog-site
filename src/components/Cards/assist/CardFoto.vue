<template>
    <div class="foto-area" :class="vertical? 'vertical' : 'horizontal'">
        <img :src="foto" :width="vertical? '210': ''">
    </div>
</template>

<script>
export default {
    name: 'card-foto',
    props:{
        foto: String,
        vertical: {
            type: Boolean,
            default: false,

        }
    }
}
</script>

<style>
    .foto-area{
      overflow: hidden;
       transition: transform .3s ease;
    }
    .vertical{
            height: 210px;
      width: 210px;
    }
    .horizontal{
         height: 166px;
    }
    .horizontal:hover{
       border-bottom:4px red solid;
    }
    .vertical:hover{
       border-left:4px red solid;
    }
     img{
      cursor: pointer;
       transition: transform .3s ease;
    }
  
    img:hover{
       transform: scale(1.1);  
    }
</style>