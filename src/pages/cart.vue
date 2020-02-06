<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>

<script>

    import OrderHeader from "../components/OrderHeader";
    import NavFooter from "../components/NavFooter";
    export default {
        name: "nav-home",
        components: {
            NavFooter,
            OrderHeader

        }
    }
</script>

<style scoped>

</style>