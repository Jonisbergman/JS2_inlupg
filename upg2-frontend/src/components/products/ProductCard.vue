<template lang="">
   <div class="col">
    <div class="card h-100">
      <div>
        <router-link :to="{  name: 'productDetails', params: { id: product._id}}">
          <img :src="product.imageURL" class="card-img-top" alt="Fly sneakers bro"/>          
        </router-link>
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">{{ product.name }}</h5>
        <p class="card-text text-center">$&nbsp;{{ product.price }}</p>
        <router-link type="button" class="d-flex justify-content-center align-center btn-rounded btn-outline-dark" :to="{  name: 'productDetails', params: { id: product._id}}">Cop these kicks</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:  ['product']
}
</script>
<style lang="">
  
</style>