<template>
  <div class="home d-flex flex-column min-vh-100">
    <b-container>
      <b-row>
        <b-col>
          <h1>Selamat datang di Pancingan</h1>
        </b-col>
      </b-row>
    <hr>
    <blog-item-component :blogs="this.blogs"></blog-item-component>
    </b-container>
  </div>
</template>

<script>
import BlogItemComponent from '@/components/BlogItemComponent.vue'
// @ is an alias to /src
import BeApp from '@/helpers/api_call/BeApp'

export default {
 
  name: 'HomeView',
  data: function() {
    return {
      blogs:null
    };
},
  components: {
    BlogItemComponent
  },
  methods :{
     getBlogs(){
      BeApp.getBlogs().then((data)=>{
        this.blogs = data.data.data
      })
      
    }
  },
  mounted() {
    this.getBlogs();
  }

}
</script>
<style scoped>
h1{
  color: var(--text-primary-color);
}
.container{
   background-color: var(--background-color-primary);
}
</style>