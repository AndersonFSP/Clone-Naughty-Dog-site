<template>
  <div class="q-pa-md">
      <div class="row justify-around" style="height:100px">
        <div class="col-sm-4">
          <h4 class="text-center text-uppercase text-grey-9">{{titulo}}</h4>
        </div>
        <div class="col-sm-4"></div>
      </div>
      <div class="row">
          <q-separator color="grey" size="10px"/>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        titulo: String
    }
}
</script>

<style>

</style>