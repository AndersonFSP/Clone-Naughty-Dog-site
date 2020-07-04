<template>
  <div style="margin-bottom:0px;">
    <h4 class="text-left text-uppercase text-grey-9" style="border-bottom:1px solid;">{{titulo}}</h4>
  </div>
</template>

<script>
export default {
   name: 'title-space',
    props:{
        titulo: String,
        default: 'Titulo'
    }
}
</script>

<style>

</style>