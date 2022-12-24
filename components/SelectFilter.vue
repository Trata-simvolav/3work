<template>
    <div class="select">

        <div class="dropdown open">
            <a class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            @click="areOptionsVisible = !areOptionsVisible">
                {{selected}}
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId" >
                <a class="dropdown-item" 
                    v-for="option in options"
                    :key="option.value"
                    @click="selectOption(option)">
                    {{option.name}}
                </a>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    name: "select",
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default: ""
        }
    },
    methods: {
        selectOption(option) {
            this.$emit("select", option);
            this.areOptionsVisible = false;
        },
        hideSelect() {
            this.areOptionsVisible = false;
        }
    },
    mounted () {
        document.addEventListener("click", this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
        document.removeEventListener("click", this.hideSelect)
    }
}
</script>

<style>
    
    .select {
        width: 200px;
        cursor: pointer;
        text-align: left;
        margin-left: 10px;
    }
    
</style>