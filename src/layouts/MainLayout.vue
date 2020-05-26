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


  <q-footer bordered class="bg-grey-9 text-white">
      <q-toolbar>
         <div class="q-pa-md">
           <div class="row">
              <div class="col-md-12 text-h5">NAUGHTY DOG, LLC.</div>
           </div>
            <div class="row">
              <div class="col-md-12" style="height:30px;"><span class="footer-link">Privacy Policy</span> | <span class="footer-link">Terms of Use</span></div>
           </div>
           <div class="row">
              <div class="col-md-12 footer-link" style="height:30px;">California Privacy Rights</div>
           </div>
           <div class="row">
              <div class="col-md-12 footer-link">© 2020 Sony Interactive Entertainment LLC.</div>
           </div>
         </div>
      </q-toolbar>
      
    </q-footer>
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