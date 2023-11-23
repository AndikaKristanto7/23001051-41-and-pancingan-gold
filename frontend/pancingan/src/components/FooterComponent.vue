<template>
    <footer>
        <b-container class="footer-info">
            <b-row>
                <b-col>
                    <h6 class="text-uppercase bold">Pancingan</h6>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                </b-col>
                <b-col>
                    <h6 class="text-uppercase bold">Stack</h6>
                    <p>Vue</p>
                    <p>Express</p>
                </b-col>
                <b-col>
                    <h6 class="text-uppercase bold">Contact</h6>
                    <p>
                        <!-- <i class="fas fa-home me-3"></i> -->
                        <b-icon icon="house-door-fill"></b-icon>
                        Binar HQ, The Breeze
                    </p>
                    <p>
                        <b-icon icon="envelope-fill"></b-icon>
                        binar@hq.com
                    </p>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="12" md="12"><h6>&copy;2023</h6></b-col>
            </b-row>
        </b-container>
    </footer>
</template>
<script>
export default {
    name : "FooterComponent"
}
</script>
<style scoped>

footer{
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: lightgray;
}
p{
    color:black
}
</style>