<template>
    <div>
        <b-container v-for="(item,index) in blogs" :key="index">
            <b-row>
                <b-col>
                    <router-link :to="{name : 'blog',params : {'slug' : item.slug}}">
                        <h2 class="font-weight-bold">{{ item.title }}</h2>
                    </router-link>
                    <span v-html="readMore(item.description)" class="text-left"></span>
                    
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name:"BlogItemComponent",
    props:{
        blogs: {
            type:Array,
            default : () =>{
                return []
            }
        },
    },
    methods:{
        readMore(text){
           let newText = text.slice(0,500)
           if(newText.length >= 500){
                newText = `${newText}...`
           }
           return newText
        }
    }
}
</script>
<style scoped>
h2{
    color: var(--text-primary-color);
}
.container{
   background-color: var(--background-color-primary);
}
</style>