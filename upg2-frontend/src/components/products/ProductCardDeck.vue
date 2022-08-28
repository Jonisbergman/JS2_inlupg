<template lang="">
 <div class="row row-cols-1 row-cols-md-3 g-4">
    <ProductCard v-for="product in products"  :key="product._id" :product="product" />  
</div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>
<style lang="">
  
</style>