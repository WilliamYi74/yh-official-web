<template>
    <section class="layouts container-fluid">
        <AppHeader />
        <slot></slot>
        <AppFooter />
    </section>
</template>

<script lang="ts" setup>
import AppHeader from "../components/app-header/app-header.vue";
import AppFooter from "../components/app-footer/app-footer.vue";

</script>

<style lang="scss" scoped>
.layouts {
    padding: 0;
}
</style>