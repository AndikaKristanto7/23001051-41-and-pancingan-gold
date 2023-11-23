<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <h1>Selamat datang di Pancingan</h1>
        </b-col>
      </b-row>
    </b-container>
    <hr>
    <blog-item-component></blog-item-component>
  </div>
</template>

<script>
import BlogItemComponent from '@/components/BlogItemComponent.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    BlogItemComponent
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