<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
   .hov{
        transition: color 0.5s ease-out;
    }
    
    .hov:hover{
        color: red;
    }
</style>
