<!-- ここで各Viewを作っている -->
<template>
  <div class="hello">
    <h1>{{ product }}</h1>
    <p>{{ description }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <a v-bind:href="url">アマゾンへ</a>
    <div v-for="post in postIndex" :key="post.id">
      <p>{{ post.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      product: 'Nike Socks',
      description: 'The product is most popular shoes in this country!',
      url: 'https://amazon.com',
      postIndex: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    reverseMessage() {
      this.product = this.product.split('').reverse().join('');
    },
    fetchPosts() {
      const url = 'http://localhost:3000/api/v1/posts';
      axios.get(url).then(
        (response) => {
          this.postIndex = response.data.data;
        }).catch((e) => {
        alert(e);
      });
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
