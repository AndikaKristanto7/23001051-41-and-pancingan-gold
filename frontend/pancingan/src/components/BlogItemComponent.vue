<template>
    <div>
        <b-container v-for="(item,index) in blogs" :key="index">
            <b-row>
                <b-col>
                    <h2 class="font-weight-bold">{{ item.title }}</h2>
                    <p class="text-left">{{ item.description }}</p>
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
            type:Object,
            default : () =>{
                return {
                    id:'',
                    slug:'',
                    title:'',
                    description:''
                }
            }
        },
        test : {
            type:String,
            default : "test"
        }
    },
    mounted(){
        console.log(this.props)
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