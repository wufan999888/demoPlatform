<template>
  <div class="container">
    <ul class="list">
      <li class="list-item">111</li>
      <li class="list-item">222</li>
      <li class="list-item">333</li>
      <li class="list-item">444</li>
      <li class="list-item">555</li>
      <li class="list-item">666</li>
      <li class="list-item">777</li>
      <li class="list-item">888</li>
      <li class="list-item">999</li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
</script>

<style lang='less' scoped>
.container {
  width: 400px;
  margin: 0 auto;
  background: pink;
  padding: 20px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.list-item {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  background: #fff;
  line-height: 100px;
  text-align: center;
  list-style: none;
  user-select: none;
}

.active {
  background: skyblue;
}

.clone-item {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  background: #fff;
  line-height: 100px;
  text-align: center;
  list-style: none;
  user-select: none;
  pointer-events: none;
  opacity: 0.8;
}
</style>