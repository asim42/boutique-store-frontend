// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  selectedItems: [],
  checkoutStatus: null
}

// getters
const getters = {
  total (state) {
    let total = 0
    state.selectedItems.forEach(item => {
      total += item.price * item.qty
    })
    return total
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  UpdateItems (state, items) {
    state.items = items
  },
  addToCart (state, item) {
    const _item = state.selectedItems.find(_item => _item.id === item.id)
    item.stock--
    if (_item !== undefined) {
      _item.qty++
    } else {
      item.qty = 1
      state.selectedItems.push(item)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
