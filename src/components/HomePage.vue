<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <h1>All Products</h1>
                <a @click="showCheckout()" class="btn btn-primary">Checkout</a>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4" v-for="item in items" :key="item.id">
                <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="https://ae01.alicdn.com/kf/HTB1QmR7MpXXXXcxXFXXq6xXFXXXp/Summer-Teen-Girls-Fashion-Boutique-Dresses-White-Cotton-Asymmetrical-Child-Party-Dress-Simple-Kids-Dress-Child.jpg_640x640.jpg" :alt="item.name">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <a @click="addToCart(item)" class="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  computed: {
    itemsHavingImages () {
      return this.items.filter(item => item.image.url !== null)
    },
    items () {
      return this.$store.state.cart.items
    }
  },
  created () {
    const that = this
    if (this.items.length === 0) {
      axios.get('https://botiquestore.herokuapp.com/api/v1/items')
        .then(response => {
          that.$store.commit('cart/UpdateItems', response.data)
        })
    }
  },
  methods: {
    addToCart (item) {
      if (item.stock > 0) {
        this.$store.commit('cart/addToCart', item)
      }
    },
    showCheckout () {
      this.$router.push('/Cart')
    }
  }
}
</script>

<style scoped>
  /* Make the image fully responsive */
  .carousel-inner img {
    width: 100%;
    height: 100%;
  }
</style>
