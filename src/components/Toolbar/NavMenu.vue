<template>
    <q-tabs
           inline-label
           class="flat text-black text-uppercase"
           shrink
        >
          <q-route-tab to='/a' name="news" label="News" class="hov"/>
          <q-btn-dropdown auto-close flat stretch label="company" class="hov">
            <q-list >
                <q-item :to="{name: 'about'}" clickable>
                    <q-item-section class="text-black" >About</q-item-section>
                </q-item>
              
                <q-item :to="{name: 'contact'}" clickable>
                    <q-item-section class="text-black" >Contact</q-item-section>
                </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown auto-close flat stretch label="company" class="hov">
            <q-list>
              <q-item clickable>
                  <q-item-section>The last of us</q-item-section>
              </q-item>
              <q-item clickable>
                  <q-item-section>Uncharted</q-item-section>
              </q-item>
              <q-item clickable>
                  <q-item-section>Jax & Dexter</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-tab name="support" label="Support" class="hov"/>
          <q-btn-dropdown auto-close flat stretch label="Gear Store" class="hov">
            <q-list>
              <q-item clickable>
                  <q-item-section>The last of us</q-item-section>
              </q-item>
              <q-item clickable>
                  <q-item-section>Uncharted</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn class="text-white bg-grey-9" label="carrers" ></q-btn>
        </q-tabs>
</template>

<script>
export default {
    name:'nav-menu',
    methods:{
    }
}
</script>

<style>
   
</style>