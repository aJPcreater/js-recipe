//section #app
Vue.createApp({
  data() {
    return {
      count: 0,
    }
  },

  methods: {
    countUp: function () {
      this.count += 1
    },
  },
}).mount("#app")

// section #v-if
Vue.createApp({
  data() {
    return {
      seen: false,
    }
  },
  methods: {
    hyouji: function () {
      this.seen = true
    },
  },
}).mount("#v-if")

// section #v-if-sign-in
Vue.createApp({
  data() {
    return {
      user: null,
    }
  },
  methods: {
    signIn() {
      this.user = {
        name: "ギーク太郎",
      }
    },
    signOut() {
      this.user = null
    },
  },
}).mount("#v-if-sign-in")

// section #v-for
Vue.createApp({
  data() {
    return {
      animals: ["ふらみんご", "ごりら", "らいおん"],
    }
  },
}).mount("#v-for")

// section #v-for-push
Vue.createApp({
  data() {
    return {
      animals: ["ふらみんご", "ごりら", "らいおん"],
    }
  },
  methods: {
    addAnimal: function () {
      this.animals.push("んらいおん")
    },
  },
}).mount("#v-for-push")

// section #v-bind
Vue.createApp({
  data() {
    return {
      helloClass: "hello",
    }
  },
}).mount("#v-bind")

//section #computed
Vue.createApp({
  data() {
    return {
      items: [
        {
          name: "りんご",
          price: 150,
          amount: 3,
        },
        {
          name: "みかん",
          price: 100,
          amount: 5,
        },
        {
          name: "ぶどう",
          price: 400,
          amount: 1,
        },
      ],
    }
  },
  computed: {
    totalPrice: function () {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
}).mount("#computed")

// section #computed-recalcurated
Vue.createApp({
  data() {
    return {
      items: [
        {
          name: "りんご",
          price: 150,
          amount: 3,
        },
        {
          name: "みかん",
          price: 100,
          amount: 5,
        },
        {
          name: "ぶどう",
          price: 400,
          amount: 1,
        },
      ],
    }
  },
  computed: {
    totalPrice: function () {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
  methods: {
    addItem: function (item) {
      item.amount += 1
    },
  },
}).mount("#computed-recalculated")

// section #v-model
Vue.createApp({
  data() {
    return {
      inputValue: "",
    }
  },
}).mount("#v-model")

//section #created
Vue.createApp({
  data() {
    return {
      inputvalue: "",
      memo: "",
    }
  },
  created: function () {
    const storedMemo = localStorage.memo
    if (storedMemo) {
      this.memo = storedMemo
    }
  },
  methods: {
    save: function () {
      localStorage.memo = this.inputValue
    },
  },
}).mount("#created")
