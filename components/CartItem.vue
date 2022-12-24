<template>
    <div class="cart-item-list">

        <img class="cart-img" :src="require(`../assets/images/`+CartItemData.img)" alt="Card image cap">
        <div class="cart-info">
            <span class="lead"><strong>{{ CartItemData.name }}</strong></span> <br>
            <span class="lead">Цена: {{ CartItemData.price }}$</span> <br>
            <span class="lead">Категория: <strong>{{ CartItemData.category }}</strong></span>
        </div>

        <div class="cart-quantity">
            <h4 class="quan">
                <span class="minus" @click="minus">-</span>
                Количество: {{ CartItemData.quantity }}
                <span class="plus" @click="plus">+</span>
            </h4>
        </div>

        <button class="btn btn-danger" @click="deleteItemFromCart">Удалить</button>

    </div>
</template>

<script>

export default {
    name: "cart-item",
    props: {
        CartItemData: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        
        deleteItemFromCart () {
            this.$emit("deleteItemFromCart")
        },

        plus () {
            this.$emit("plusEmit")
        },

        minus () {
            this.$emit("minusEmit")
        }
    },
    
}

</script>

<style scoped>
    .cart-item-list {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        min-height: 100px;
        border: 1px solid rgb(208, 208, 208);
        border-radius: 5px;
        margin: 20px 0px;
        padding: 0px 10px;
        box-shadow: 0px 0px 8px 0px rgb(171, 171, 171);
    }
    .cart-img {
        max-width: 100px;
    }
    .btn {
        height: 50px;
    }

    span {
        /* При двойном нажатие на текст предотвращает выделение текста */
        user-select: none; 
        -webkit-user-select: none; 
        -moz-user-select: none; 
        -khtml-user-select: none;
        -ms-user-select: none;
    }
    .plus, .minus { 
        margin: 5px;
        cursor: pointer;
    } 

    .cart-quantity {
        margin-left: auto;
        margin-right: 30px;
    }
    .lead {
        margin-left: 10px;
    }

   
</style>