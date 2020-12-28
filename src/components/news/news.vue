<template>
  <div class="news">
    <div class="wrapper clearfix">
      <div class="article">
        <div class="title">{{ currentArt.title }}</div>
        <div class="content">{{ currentArt.content }}</div>
      </div>
      <div class="bottom-left" @click="handlePrev">{{ currentArt.prev }}</div>
      <div class="bottom-right" @click="handleNext">{{ currentArt.next }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: undefined,
      articles: [
        {index: 1, title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, quos.", content: "文章1", prev: "", prevId: "", next: "Lorem ipsum dolor sit, amet consectetur adipisicing.", nextId: "2"},
        {index: 2, title: "Lorem ipsum dolor sit, amet consectetur adipisicing.", content: "文章2", prev: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, quos.", prevId: "1", next: "Lorem ipsum dolor sit amet.", nextId: "3"},
        {index: 3, title: "Lorem ipsum dolor sit amet.", content: "文章3", prev: "Lorem ipsum dolor sit, amet consectetur adipisicing.", prevId: "2", next: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", nextId: "4"},
        {index: 4, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", content: "文章4", prev: "Lorem ipsum dolor sit amet.", prevId: "3", next: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem.", nextId: "5"},
        {index: 5, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem.", content: "文章5", prev: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prevId: "4", next: "", nextId: ""},
      ],
      currentArt: {},
    }
  },
  methods: {
    getCurrentArt () {
      this.articles.forEach(ele => {
        if (ele.index == this.index) {
          this.currentArt = ele
        }
      })
    },
    handlePrev(e) {
      this.articles.forEach(ele => {
        if (ele.prev == e.target.innerHTML) {
          this.$router.push(`/news/${parseInt(ele.prevId)}`)
        }
      })
    },
    handleNext(e) {
      this.articles.forEach(ele => {
        if (ele.next == e.target.innerHTML) {
          this.$router.push(`/news/${parseInt(ele.nextId)}`)
        }
      })
    },
  },
  mounted () {
    this.index = this.$route.params.id
    this.getCurrentArt()
  },
  watch: {
    '$route' () {
      this.index = this.$route.params.id
      this.getCurrentArt()
    }
  }
}
</script>

<style scoped>
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .content {
    padding: 10px;
    width: 100%;
    height: 200px;
  }
  .bottom-left {
    color: lightcoral;
    cursor: pointer;
    width: 300px;
    font-size: 18px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .bottom-left:hover {
    color: #0ff;
  }
  .bottom-right {
    color: lightcoral;
    cursor: pointer;
    width: 300px;
    font-size: 18px;
    float: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .bottom-right:hover {
    color: #f0f;
  }
</style>