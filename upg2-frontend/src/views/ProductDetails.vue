<template lang="">
 <div class="row">        
   
   <div class="card h-100 d-flex justify-content-center align-items-center">
     <div>
        <img :src="product.data.imageURL" alt="Fly kicks d00d">        
      </div>
      <div class="card-body text-center">
        <h1 class="card-title text-center">{{ product.data.name }}</h1>
        <p class="card-text text-center">$&nbsp;{{ product.data.price }}</p>
        <p class="card-text text-center">{{ product.data.desc }}</p>
        <h6>Order soon!</h6>
        <router-link type="button"  class="mt-3 btn btn-rounded text-light btn-dark" to="/products"><i class="fa-solid fa-arrow-left"></i></router-link>
        <!-- Fick skriva product.data på samtliga för 
        det blir problem med defaultstaten -->

        </div>
    </div>

 </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  props:  ['id'],
  methods:  {
    ...mapActions(['getProductById'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created()  {
    this.getProductById(this.id)
  }
}
</script>
<style lang="">
  
</style>