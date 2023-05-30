<template>
  <div class="compareDemo" ref="compareBox">
    <div class="compareDemo-line" ref="lineDiv">
    </div>
    <div class="compareDemo-backgroundImg img1"></div>
    <div class="compareDemo-backgroundImg img2" ref="newImg"></div>
  </div>
</template>

<script setup lang='ts'>
import Scan from "./object/scan"
import {onMounted} from 'vue'
import {ref} from 'vue'
const compareBox = ref<HTMLDivElement>()
const lineDiv = ref<HTMLDivElement>()
const newImg = ref<HTMLDivElement>()

onMounted(()=>{
  new Scan(compareBox.value, lineDiv.value, newImg.value)
})

</script>

<style lang='less' scoped>
.compareDemo {
  width: 900px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &-backgroundImg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
  }
  .img1 {
    background-image: url(https://media.macphun.com/img/uploads/uploads/skylum/luminar-neo/supercontrast-after-min-new-2.jpeg?f=webp);
    // background-image: url(https://media.macphun.com/img/uploads/uploads/skylum/luminar-neo/AtmosphereAI-after-min.jpg?f=webp);
    // https://media.macphun.com/img/uploads/uploads/skylum/l/before-supercontrast-min-2.png
  }
  .img2 {
    background-image: url(https://media.macphun.com/img/uploads/uploads/skylum/luminar-neo/supercontrast-before-min-new-2.jpeg?f=webp);
    // background-image: url(https://media.macphun.com/img/uploads/uploads/skylum/luminar-neo/AtmosphereAI-before-min.jpg?f=webp);
    // https://media.macphun.com/img/uploads/uploads/skylum/l/after-supercontrast-min-2.png
  }
  &-line {
    position: absolute;
    width: 1px;
    height: 100%;
    left: 0;
    background-color: white;
    z-index: 9;
  }
  &-line::before{
    content: 'BEFORE';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
    top: 10px;
    color: white;
    opacity: .8;
    font-size: 12px;
    left: -55px;
  }
  &-line::after{
    content: 'AFTER';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
    opacity: .8;
    top: 10px;
    font-size: 12px;
    color: white;
    left: 8px;
  }
}
</style>