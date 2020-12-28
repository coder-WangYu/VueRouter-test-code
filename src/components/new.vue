<template>
  <div class="new">
    <ul>
      <li 
        @click="handleClick" 
        v-for="item in list" 
        :key="item.index"
      >
        {{ `${item.index + 1}. ${item.content}` }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {index: 0, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, quos."},
        {index: 1, content: "Lorem ipsum dolor sit, amet consectetur adipisicing."},
        {index: 2, content: "Lorem ipsum dolor sit amet."},
        {index: 3, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
        {index: 4, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem."},
      ]
    }
  },
  methods: {
    handleClick (e) {
      let id = e.target.innerHTML.split(".")[0].trim()
      this.$router.push(`/news/${id}`)
    },
  },
}
</script>

<style scoped>
  li {
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
  }
  li:hover {
    color: #f0f;
  }
</style>