<template>
  <div class="demoPlatform">
    <h1 class="demoPlatform-title">Demo List</h1>
    <n-carousel effect="card" prev-slide-style="transform: translateX(-150%) translateZ(-800px);" next-slide-style="transform: translateX(50%) translateZ(-800px);" style="height: 500px" :show-dots="false" >
      <n-carousel-item :style="{ width: '300px' }">
        <div class="demoPlatform-carousel">
          <div class="demoPlatform-carousel-title">“前后对比”效果</div>
          <div class="demoPlatform-carousel-desc">修图前 / 修图后</div>
          <img src="https://media.macphun.com/img/uploads/uploads/skylum/l/hero-control-supercontrast-min-2.png" alt="">
          <!-- <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" /> -->
          <div class="demoPlatform-carousel-Mention">
            <n-gradient-text :size="16" type="success"> Vue3 / TypeScript / Less </n-gradient-text>
          </div>
          <div class="demoPlatform-carousel-button"><n-button @click="goPage('compareDemo')" style="width: 180px;height: 40px" strong secondary round type="success">预览</n-button></div>
        </div>
      </n-carousel-item>
      <n-carousel-item :style="{ width: '300px' }">
        <div class="demoPlatform-carousel"></div>
      </n-carousel-item>
      <n-carousel-item :style="{ width: '300px' }">
        <div class="demoPlatform-carousel"></div>
      </n-carousel-item>
    </n-carousel>
    <div class="demoPlatform-footer">@既为彷徨 ｜ 用心制作 ｜ Github</div>
  </div>
</template>

<script setup lang='ts'>
import { NList, NThing, NListItem, NSpace, NTag, NCarousel, NCarouselItem, NAvatar, NButton, NGradientText } from 'naive-ui'
import { useRouter } from 'vue-router'
const router = useRouter()
const goPage = function (url: string) {
  router.push('/'+url)
}
</script>

<style lang='less' scoped>
.demoPlatform {
  width: 100vw;
  height: 100vh;
  background-color: #CFE46E;
  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }
  &-list {
    width: 300px;
    margin: 0 auto;
    box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  }
  &-carousel {
    width: 99%;
    height: 490px;
    // box-shadow: -10px 0px 100px 1px rgba(0,0,0,0.6);
    background-color: white;
    border-radius: 12px;
    padding: 30px 20px;
    box-sizing: border-box;
    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
    }
    &-desc {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      margin: 12px 0;
      color: #333333;
    }
    & img {
      width: 100%;
      height: 230px;
      object-fit: cover;
      border-radius: 8px;
    }
    &-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    &-Mention {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      font-size: 24px;
    }
  }
  &-footer {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 220px;
    font-size: 14px;
    font-weight: 600;
    transform: translateX(-50%);
  }
  &-footer:hover {
    cursor: pointer;
    opacity: .6;
  }
}
</style>