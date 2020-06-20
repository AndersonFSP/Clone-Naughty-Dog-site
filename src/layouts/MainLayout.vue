<template>
  <q-layout view="lHh Lpr lff">
    <q-header >
      <q-toolbar class="bg-white text-black" style="padding:25px;">

        <q-toolbar-title >
          
          <q-img
           src="https://s3.us-east-1.amazonaws.com/nd.images/uploads/NaughtyDog_LogoRGB_WHT_Web_600x95_01.png"
           title="Naughty dog"
           style="width:350px; height: 54px; cursor:pointer;" 
           @click='redirectHome'
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
  },
  methods:{
    redirectHome(){
      this.$router.push({name: 'index'})
    }
  }
}
</script>
<style >

</style>