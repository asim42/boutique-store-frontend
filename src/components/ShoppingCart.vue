<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }} x {{ product.qty }}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
export default {
  computed: {
    checkoutStatus () {
    },
    products () {
      return this.$store.state.cart.selectedItems
    },
    total () {
      let total = 0
      this.products.forEach(item => {
        const subtotal = item.price * item.qty
        total += subtotal
      })
      return total
    }
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>
