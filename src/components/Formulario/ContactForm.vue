<template>
   <q-form
        @submit.prevent="onSubmit"
        class="q-gutter-md"
        ref="myForm"
    >
        <q-select 
            v-model="contact.selectCategory" 
            :options="optionsCategory" 
            label="Please Select a Category for Your Inquiry" 
            outlined 
            style="margin-bottom:50px;"
        />
        <q-input
            outlined
            v-model="contact.name"
            label="Name *"
            ref="name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please specify your name. It is a required field.']"
        />
        <q-input
            outlined
            v-model="contact.company"
            label="Company *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please add your company. It is a required field.']"
        />
         <q-input
            outlined
            type="email"
            v-model="contact.email"
            label="Email *"
            lazy-rules
           :rules="[ val => val && val.length > 0 || 'We need your email address to contact you. It is a required field.']"
        />
        <q-input
            outlined
            v-model="contact.tel"
            label="Phone Number"
            mask="(##) #####-####"
            fill-mask
         />
         <q-input
            v-model="contact.textArea"
            outlined
            clearable
            type="textarea"
            placeholder="Topic of Inquiry. Please detail your request and its context"
            label="Topic of Inquiry *"
            :rules="[ val => val && val.length > 0 || 'Please detail your request and its context. It is a required field.']"
      />
        <q-btn 
            type="submit"
            label="submit" 
            class="text-uppercase" 
            text-color="black" 
            color="grey-4" 
            style="width: 150px"
        />    
        
    </q-form>
</template>

<script>
export default {
    name:'contact-form',
    data(){
        return {
            contact: {
                selectCategory: 'Media Inquiry',
                name: '',
                company: '',
                email: '',
                tel:'',
                textArea: ''
            },
            optionsCategory : [
                'Media Inquiry', 'Asset Request', 'Product Request', 'Permissions/Copyright Request'
            ]
        }
    },
    methods:{
        onSubmit(){
            this.$refs.myForm.validate().then(success => {
                if(success){
                    console.log(this.contact)
                }
            })
            
        }
    }

}
</script>

<style>

</style>