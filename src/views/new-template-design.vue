<template>
  <div class="design__background">
    <div class="design__header">
      <designHeader />
    </div>

    <div class="design__content">
      <div
        class="design__storyBox"
        @click="$router.push('/template-canvas-story')"
      >
        <designStory />
      </div>
      <div
        class="design__postBox ml-5"
        @click="$router.push('/template-canvas-post')"
      >
        <designPost />
      </div>
    </div>
  </div>
</template>
<script>
import designHeader from "@/components/template-design-page/design-header";
import designPost from "@/components/template-design-page/design-post";
import designStory from "@/components/template-design-page/design-story";
export default {
  components: {
    designHeader,
    designPost,
    designStory,
  },
};
</script>

<style scoped>
/* html, body {
  height: 100%;
} */
.design__background {
  background: #202125;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0 100px 0 !important;
  height: 100vh;
}
.design__header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #202125 !important;
  padding-bottom: 50px;
}
.design__content {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #202125 !important;
}
.design__postBox {
  cursor: pointer;
  transition: 0.5s;
}
.design__storyBox {
  cursor: pointer;
  transition: 0.5s;
}
.design__storyBox:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.2);
  transform: scale(1.1);
  opacity: 0.5;
  
}
.design__postBox:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.2);
  transform: scale(1.1);
  opacity: 0.5;
}
</style>