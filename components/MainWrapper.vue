<template>
    <div class="main-wrapper">

        <SearchItemVue

        ></SearchItemVue>

        <RouterView></RouterView>

    </div>
</template>

<script>

import {mapGetters} from "vuex"
import SearchItemVue from "./SearchItem.vue"; 

export default {
    name: "main-wrapper",
    props: {

    },
    components: {
        SearchItemVue
    },
    data() {
        return {
            
        }
    },
    methods: {

    },
    computed: {
        ...mapGetters ([
            "CART",
            "DESC"
        ])
    }
}
</script>
<style>
    .main-wrapper {
        max-width: 900px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
    }
</style>