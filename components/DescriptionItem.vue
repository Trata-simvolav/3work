<template>
    <div class="description">
        
                <div class="back">
                <router-link :to="{name:'catalog'}">
                        <button class="btn btn-secondary"
                            @click="deleteDesc"
                        >
                        Закрыть
                        
                        </button>
                
                </router-link>
        </div>

        <div class="description-item" v-for="item in DESC">
            <div class="img-desc">
                <img class="card-img-top" :src="require(`../assets/images/`+item.img)" alt="Card image cap">
            </div>
            
            <span>  </span>

            <div class="card text-start">
          <div class="card-body">
            <h4 class="card-title">{{ item.name }}</h4>
            <p class="card-text">Описания товара: {{item.description}}</p>
            <span><strong>Цена товара: {{ item.price }}$</strong></span> <br>
            <span class="text-muted">Дата публикации: {{ item.date }}</span>
          </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import CatologItemVue from './CatologItem.vue';
import {mapGetters, mapActions} from "vuex"

export default {
    name: "description",
    components: {
        CatologItemVue
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
    computed: {
        ...mapGetters([
            "DESC"
        ])
    },
    methods: {
        ...mapActions ([
            "DELETE_DESC",
        ]),

        deleteDesc(data) {
            this.DELETE_DESC(data)
        },
    }
}
</script>

<style scoped>
    
    .description-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .img-desc img {
        width: 300px;
        height: auto;
        padding: 20px;
        margin: 20px 0px;
        border: 1px solid rgb(223, 223, 223);
        border-radius: 10px;
    }


</style>