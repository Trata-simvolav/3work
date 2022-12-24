import { createRouter, createWebHashHistory } from "vue-router"

import Catalog from "@/components/Catalog.vue"
import Cart from "@/components/Cart.vue"
import DescriptionItem from "@/components/DescriptionItem.vue"
import MainPage from "@/components/MainPage.vue"    

const router = createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            name: "main-page",
            path: "/",
            component: MainPage
        },
        {
            name: "catalog",
            path: "/catalog",
            component: Catalog
        },
        { 
            name: "cart",
            path: "/cart", 
            component: Cart,
            props: true
        },
        {
            name: "description",
            path: "/description",
            component: DescriptionItem,
            props: true
        }             
    ]
})





export default router