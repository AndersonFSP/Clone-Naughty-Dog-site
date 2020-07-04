<template>
    <div class="q-pa-md">
        <div class="row">
            <div class="col-md-7 offset-md-1 col-xs-12">
                <section>
                    <title-space titulo="Media relations"/>
                    <contact-form/>
                </section>
            </div>
             <div class="col-md-3 offset-md-1 col-xs-12" >
                 <section style="margin-right:50px;">
                     <contact-card/>
                 </section>
             </div>
        </div>
    </div>
</template>

<script>
import TitleSpace from 'components/Titulo/TitleSpace';
import ContactForm from 'components/Formulario/ContactForm';
import ContactCard from 'components/Formulario/ContactCard';

export default {
    components:{
        TitleSpace,
        ContactForm,
        ContactCard,
    },
}
</script>

<style>
    
  section {
    margin: 4rem 0;
  }
  
</style>