<template>
    <div class="catalog-item">

        <div class="card">
            <img class="card-img-top" :src="require(`../assets/images/`+ProductData.img)" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">{{ ProductData.name }}</h4>  
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    Цена: {{ ProductData.price }}$
                </li>
                <li class="list-group-item">
                    <button class="btn btn-success" 
                    @click="addToCart">
                    Добавить
                    </button>
                </li>
                <li class="list-group-item">
                    <router-link :to="{name:'description'}">
                        <button class="btn btn-secondary"
                            @click="showDescInfo"
                        >
                        Подробнее
                        </button>
                    </router-link>
                        
                </li>
            </ul>
        </div>

    </div>
</template>
<script>


import { mapGetters } from 'vuex'

export default {
    name: "catalog-item",
    components: {

    },
    props: {
        ProductData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        addToCart () {
            this.$emit("addToCart", this.ProductData)
        },
        showDescInfo () {
            this.$emit("addDescInfo", this.ProductData);
            delete this.ProductData.quantity
        }
    },
    computed: {
        ...mapGetters([
            "DESC"
        ])
    },
    mounted () {
            this.ProductData["quantity"] = 1
    }   
}
</script>
<style>
    .catalog-item {
        flex-basis: 25%;
        padding: 15px;
        max-width: 220px;
    }

    .card {
        min-height: 470px;
        box-shadow: 0px 0px 8px 0px rgb(171, 171, 171);
    }
    .card-img-top {
        margin: 0;
        padding: 0;
        width: auto;
        height: 150px;
    }
</style>