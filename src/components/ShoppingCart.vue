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
    <p><button :disabled="!products.length" @click="checkout()">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  computed: {
    checkoutStatus () {
      return undefined
    },
    products () {
      return this.$store.state.cart.selectedItems
    },
    total () {
      return this.$store.getters['cart/total']
    }
  },
  methods: {
    checkout () {
      const order = {
        user_id: 1,
        sub_total: this.$store.getters['cart/total'],
        order_items_attributes: []
      }
      this.products.forEach(item => {
        order.order_items_attributes.push({
          item_id: item.id,
          quantity: item.qty
        })
      })
      axios.post('https://botiquestore.herokuapp.com/api/v1/orders', order)
        .then(response => {
          console.log(response)
        })
        .catch(reason => {
          console.log(reason)
        })
    }

  }
}
</script>
