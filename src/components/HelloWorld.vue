<!-- ここで各Viewを作っている -->
<template>
  <div class="hello">
    <h1>{{ product }}</h1>
    <p>{{ description }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      product: 'Nike Socks',
      description: 'The product is most popular shoes in this country!',
    };
  },
  methods: {
    reverseMessage() {
      this.product = this.product.split('').reverse().join('');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
