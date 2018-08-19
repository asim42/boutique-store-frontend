<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ul class="carousel-indicators">
              <li data-target="#demo" v-for="(item, index) in itemsHavingImages" :key="item.id" :data-slide-to="item.id" :class="{ 'active': index === 0 }"></li>
            </ul>
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div :class="{ 'carousel-item':  index !== 0, 'carousel-item active': index === 0 }" v-for="(item, index) in itemsHavingImages" :key="item.id">
                <img src="https://ae01.alicdn.com/kf/HTB1QmR7MpXXXXcxXFXXq6xXFXXXp/Summer-Teen-Girls-Fashion-Boutique-Dresses-White-Cotton-Asymmetrical-Child-Party-Dress-Simple-Kids-Dress-Child.jpg_640x640.jpg" :alt="item.name">
              </div>
            </div>
            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <h1>All Products</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4" v-for="item in items" :key="item.id">
                <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="https://ae01.alicdn.com/kf/HTB1QmR7MpXXXXcxXFXXq6xXFXXXp/Summer-Teen-Girls-Fashion-Boutique-Dresses-White-Cotton-Asymmetrical-Child-Party-Dress-Simple-Kids-Dress-Child.jpg_640x640.jpg" :alt="item.name">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
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
      items: []
    }
  },
  computed: {
    itemsHavingImages () {
      return this.items.filter(item => item.image.url !== null)
    }
  },
  created () {
    const that = this
    axios.get('https://botiquestore.herokuapp.com/api/v1/items')
      .then(response => {
        that.items = response.data
      })
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
