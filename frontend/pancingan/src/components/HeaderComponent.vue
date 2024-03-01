<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#" class="float-end">Pancingan</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item><router-link :to="{name:'home'}">Home</router-link></b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" style="">
                    <b-nav-item><router-link :to="{name:'new-blog'}">New Blog</router-link></b-nav-item>
                    <dark-mode-toggle-component></dark-mode-toggle-component>
                   
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import DarkModeToggleComponent from './DarkModeToggleComponent.vue'
    export default {
        name: 'HeaderComponent',
        components:{
            DarkModeToggleComponent
        }
    }
</script>
<style scoped>
</style>