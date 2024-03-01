<template>
    <div class="new-blog container">
      <div class="form">
        <b-form @submit="onSubmit" @reset="onReset" >
          <b-form-group
            id="input-group-title"
            label="Title Blog:"
            label-for="input-title"
          >
            <b-form-input
              id="input-title"
              type="text"
              placeholder="Enter title"
              v-model="title" 
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-slug"
            label="Slug Blog:"
            label-for="input-slug"
          >
            <b-form-input
              id="input-slug"
              :value="slug"
              type="text"
              readonly="readonly"
              v-model="slug"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-description"
            label="Description:"
            label-for="input-description"
          >
          <editor :api-key=this.tinyMceApiKey  id="input-description" v-model="form.description"></editor>
          </b-form-group>
          <b-form-group
            id="input-group-description"
            label="Location:"
            label-for="input-description"
          >
          <div class="row">
            <div class="col-md-6">
              <gmap-map
                style="width: 600px; height: 300px;"
                :zoom="1"
                :center="{lat: 0, lng: 0}">
                <gmap-marker
                  v-for="(marker, index) in markers"
                  :key="index"
                  :position="marker.position"></gmap-marker>
                <gmap-marker v-if="this.place" :position="{
                    lat: this.place.geometry.location.lat(),
                    lng: this.place.geometry.location.lng(),
                  }"></gmap-marker>
              </gmap-map>
            </div>
            <div class="col-md-6">
              <gmap-autocomplete
                @place_changed="setPlace"
              >
              </gmap-autocomplete>
              <button @click="usePlace">Add</button>
          
            </div>
            
          </div>
          
          </b-form-group>
          <b-row>
            <b-col>
              <b-alert variant="success" v-model="successAlert" dismissible>Success create new blog!</b-alert>
              <b-alert v-model="errorAlert" variant="danger" dismissible>
                {{ errorMessage  }}
              </b-alert>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols="1"> <b-button type="submit" variant="primary">Submit</b-button></b-col>
            <b-col cols="1"> <b-button type="reset" variant="danger">Reset</b-button></b-col>
          </b-row>
        </b-form>
      </div>
    </div>
</template>
<style scoped>
form{
  color: var(--text-primary-color);
}
.container{
   background-color: var(--background-color-primary);
}
</style>
<script>
// es modules
import Editor from '@tinymce/tinymce-vue';
const Env = require('@/helpers/Env')
const env = new Env()
import BeApp from '@/helpers/api_call/BeApp'

export default {
 name: 'BlogView',
 data: function() {
   return {
     title:'',
     form : {
      title : "",
      slug : "",
      description : "",
      location : "",
     },
     tinyMceApiKey : env.getEnv('TINYMCE_API_KEY'),
     markers: [],
     place: null,
     successAlert : false,
     errorAlert :false
   }
},
components: {
  'editor': Editor 
},
computed: {
  slug: function () {
    return this.slugify(this.title)
  },
},
methods :{
    slugify (text, ampersand = 'and') {
      const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
      const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
      const p = new RegExp(a.split('').join('|'), 'g')

      return text.toString().toLowerCase()
        .replace(/[\s_]+/g, '-')
        .replace(p, c =>
          b.charAt(a.indexOf(c)))
        .replace(/&/g, `-${ampersand}-`)
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '')
    },
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place
    },
    usePlace(e) {
      e.preventDefault()
      if (this.place) {
        this.markers[0] = {
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        }
        this.place = null;
      }
    },
    onSubmit(event) {
        event.preventDefault()
        this.form.title = this.title
        this.form.slug = this.slug
        this.form.location = this.markers[0].position
        BeApp.postBlog(this.form)
        .then(()=>{
          this.successAlert = true
          setTimeout(()=>{
            this.$router.push({name:'home'})
          },3000)
        })
        .catch((error)=>{
          this.errorAlert = true
          this.errorMessage = error.response.data.message
        })
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.title = ''
        this.slug = ''
        this.form.title = ''
        this.form.slug = ''
        this.form.description = ''
        this.form.location = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
 },
 mounted() {
  
 }

}
</script>
  