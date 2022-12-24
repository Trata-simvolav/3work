<template>
    <div class="catalog">

        <div class="catalog-link">
            <router-link :to="{name:'cart'}">
            <button class="btn btn-outline-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket2" viewBox="0 0 16 16">
                <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
                </svg>
                Корзина: {{CART.length}}
            </button>
            </router-link>
        </div>

        <h2 class="lead">Список Товаров</h2>

        <p class="category-p">Категория</p>
        <SelectFilter
            :selected="selected"
            :options="categories"
            @select="sortCategories"
        ></SelectFilter>

        <div class="catalog-list">
            <CatologItemVue
            v-for="product in filteredProducts"
            :key="product.id"
            :ProductData="product"
            @addToCart="pushToCart"
            @addDescInfo="pushToDesc"
            ></CatologItemVue>
        </div>

    </div>
</template>

<script>
import CatologItemVue from './CatologItem.vue';
import SelectFilter from "./SelectFilter.vue"
import {mapActions, mapGetters} from "vuex"

export default {
    name: "catalog",
    components: {
        CatologItemVue,
        SelectFilter
    },
    props: {

    },
    data() {
        return {
            categories: [
                {name: "Все", value: "В"},
                {name: "Бесполезная вещь", value: "БВ"},
                {name: "Супер Бесполезная вещь", value: "СБВ"},
                {name: "Мусор", value: "М"}
            ],
            selected: "Все",
            sortedProducts: []
        }
    },
    computed: {
        ...mapGetters([
            "PRODUCTS",
            "CART",
            "SEARCH_VALUE"
        ]),
    filteredProducts () {
        if (this.sortedProducts.length) {
            return this.sortedProducts
        }
        else
            return this.PRODUCTS
    }
    },
    methods: {
        ...mapActions([
            "GET_PRODUCTS_FROM_API",
            "ADD_TO_CART",
            "ADD_TO_DESC"
        ]),
        pushToCart(item) {
            this.ADD_TO_CART(item)
        },
        pushToDesc (item) {
            this.ADD_TO_DESC(item)
        },
        sortCategories (category) {
            this.sortedProducts = []
            let vm = this;
            this.PRODUCTS.map(function(item) {
                if (item.category === category.name) {
                    vm.sortedProducts.push(item);
                }
            })
            this.selected = category.name
        },
        sordProductsBySearchValue(value) {
            this.sortedProducts = [...this.PRODUCTS]
            if (value) {
                this.sortedProducts = this.sortedProducts.filter(function(item){
                return item.name.toLowerCase().includes(value.toLowerCase())
                })
            }
            else 
            this.sortedProducts = this.PRODUCTS;
            
        }
    },
    watch: {
        SEARCH_VALUE() {
            this.sordProductsBySearchValue(this.SEARCH_VALUE);
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if (response.data) {
                    this.sordProductsBySearchValue(this.SEARCH_VALUE)
                }
            })
    }
}

</script>

<style>

    .catalog-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        
    }

    h2 {
        text-align: center;
        margin-bottom: 20px
    }

    .catalog-link {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1;
    }

    .btn-outline-success {
        width: 130px;
        height: 50px;
    }
    .category-p {
        margin: 0px 0px 0px 10px
    }


</style>