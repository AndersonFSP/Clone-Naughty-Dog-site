<template>
  <q-layout view="lHh Lpr lff">
    <q-header >
      <q-toolbar class="bg-white text-black" >

        <q-toolbar-title >
          <q-img
           src="https://allvectorlogo.com/img/2016/04/naughty-dog-logo.png"
           title="Naughty dog"
           style="height: 100px; max-width: 300px" 
          />
        </q-toolbar-title>
        <NavMenu/>
      </q-toolbar>
    </q-header>


  <!-- <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
      
    </q-footer> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavMenu from 'components/Toolbar/NavMenu';

export default {
  name: 'MainLayout',

  components: {
    NavMenu,
  },

  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
<style >

</style>