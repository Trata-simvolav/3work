<template>
    <div class="main-page">
        <h1>Добро пожаловать в мой Магазин!</h1>

        <p class="catalog">
            <router-link :to="{name: 'catalog'}">
            Вход в Каталог
            </router-link>
        </p>

        <p class="text-muted">
            Кишибаев Нуржан П-21-57к
        </p>

        <div class="img">
            <img src="../assets/images/logo.jpg" alt="">
        </div>
        
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    h1 {
        text-align: center;
    }

    .img {
        text-align: center;
    }

    .catalog {
        text-align: center;
        font-size: 20px;
    }

    .text-muted {
        text-align: center;
    }
</style>