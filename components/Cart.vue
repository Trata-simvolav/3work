<template>
    <div class="cart">

        <div class="catalog-link">
            <router-link :to="{name:'catalog'}">
            <button class="btn btn-outline-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                Назад
            </button>
            </router-link>
        </div>
        
        
        <div class="empty-cart" v-if="!CART.length">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>  <br>
                <br>
            <span class="text-muted">Тут пока пустовато...</span> <br>
                <br>
            <span class="text-muted">Давайте что-то добавим из Каталога!</span>
        </div>

        <h2 class="cart-name" v-if="CART.length">Корзина</h2>

        <CartItem
            v-for="(item, index) in CART"
            :key="item.id"
            :CartItemData="item"
            @deleteItemFromCart="deleteItemFromCart(index)"
            @plusEmit="plus(index)"
            @minusEmit="minus(index)"
        ></CartItem>

        <div class="cart-total-price" v-if="CART.length">
            
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center active">
                    Общая стоимость товаров:
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <strong>{{CartTotalPrice}}$</strong>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    props: {
        CartData: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        CartItem
    },
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions([
            "DELETE_FROM_CART",
            "PLUS",
            "MINUS"
        ]),
        plus (index) {
            this.PLUS(index)
        },
        minus (index) {
            this.MINUS(index)
        },
        deleteItemFromCart (index) {
            this.DELETE_FROM_CART(index)
        }
    },
    computed: {
        ...mapGetters([
            "CART"
        ]),
        CartTotalPrice () {
            let result = []
        
            for (let item of this.CART) {
                result.push(item.price * item.quantity) 
            }

            result = result.reduce(function(sum, el){
                return sum + el;
            })
            return result.toFixed(2)
        }
    }
}
</script>

<style scoped>
    
    .empty-cart {
        margin: 100px auto;
        text-align: center;
    }

    .text-muted {
        font-size: large;
    }

    .list-group-item {
        box-shadow: 0px 0px 8px 0px rgb(171, 171, 171);
    }

    .cart-total-price {
        bottom: 0px;
        right: 25%;
        left: 25%;
    }
    
</style>