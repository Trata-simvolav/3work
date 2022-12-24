import axios from 'axios'
import { createStore } from 'vuex'


export const store = createStore({
    state: {
        searchValue: "",
        products: [],
        cart: [],
        desc: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let secondProduct = false;
                state.cart.map(function (item){
                    if (item.id === product.id) {
                        secondProduct = true;
                        item.quantity++;
                    }
                })
                if (!secondProduct) {
                    state.cart.push({...product, quantity: 1})
                } 
            }
            else 
            state.cart.push({...product, quantity: 1})
        },
        PUSH_TO_DESC: (state, product) => {
            state.desc.push(product)
        },
        REMOVE_DESC: (state, product) => {
                state.desc.pop(product)
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },

        PLUS_ITEM: (state, index) => {
            state.cart[index].quantity++
        },
        MINUS_ITEM: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        },
        SET_SEARCH_VALUE: (state, value) => {
            state.searchValue = value;
        }
        

    },
    actions: {
        async GET_PRODUCTS_FROM_API({commit}) {
            return axios("http://localhost:3000/products", {
            method: "GET"
            })
            .then((products) => {
                commit("SET_PRODUCTS_TO_STATE", products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        },
        ADD_TO_CART({commit}, product) {
            commit("SET_CART", product)
        },
        ADD_TO_DESC({commit}, product) {
            commit("PUSH_TO_DESC", product)
        },
        DELETE_DESC({commit}, product)  {
            commit("REMOVE_DESC", product)
        },
        DELETE_FROM_CART({commit}, index) {
            commit("REMOVE_FROM_CART", index)
        },
        PLUS({commit}, index) {
            commit("PLUS_ITEM", index)
        },
        MINUS({commit}, index) {
            commit("MINUS_ITEM", index)
        },
        GET_SEARCH_VALUE ({commit}, value) {
            commit("SET_SEARCH_VALUE", value)
        }
    },
    getters: {
        SEARCH_VALUE (state) {
            return state.searchValue 
        },
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        },
        DESC(state) {
            return state.desc
        }
    }
})