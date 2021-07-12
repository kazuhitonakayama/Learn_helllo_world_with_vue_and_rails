<!-- ここで各Viewを作っている -->
<template>
  <div class="hello">
    <h1>{{ product }}</h1>
    <p>{{ description }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <a v-bind:href="url">アマゾンへ</a>
    <div class="wrapper__posts">
      <div v-for="post in diaryIndex" :key="post.id" class="each__post">
        <p>タイトル：{{ post.title }}</p>
        <div v-html="post.content"></div>
      </div>
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
      diaryIndex: [],
    };
  },
  mounted() {
    this.fetchDiaries();
  },
  methods: {
    reverseMessage() {
      this.product = this.product.split('').reverse().join('');
    },
    fetchDiaries() {
      const url = 'https://kazuhitonakayama.microcms.io/api/v1/diaries';
      axios.get(url, { headers: { 'X-API-KEY': process.env.VUE_APP_MICROCMS_API_KEY } }).then(
        (response) => {
          this.diaryIndex = response.data.contents;
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

.wrapper__posts {
  width: 80%;
  max-width: 1024px;
  margin: 60px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 40px;
}
.each__post {
  box-shadow: rgb(233 233 233 / 25%) 0px 0px 8px 0px, rgb(163 163 163 / 25%) 0px 2px 6px 0px;
}
</style>
