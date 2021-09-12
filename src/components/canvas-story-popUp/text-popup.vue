<template>
  <div class="popup__content">
    <div class="popup__items">
      <span class="header">ADD TEXT STYLE</span>
      <button @click="showTextStyle">Title</button>
   
      <h4>Subheadline</h4>
      <h6>Normal Text</h6>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
        childMessage:' <h1> SELAM </H1> '
    }
  },
  methods:{
    showTextStyle(){
      this.$parent.$data.parentMessage = this.childMessage;
    }
  }
};
</script>

<style scoped>
.popup__content {
  width: 270px;
  height: 250px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding-left: 20px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.popup__content span {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
}
.popup__content h1 {
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 56px;
color: #FFFFFF;
cursor: pointer;
}
.popup__content h2 {
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 30px;
color: #FFFFFF;
cursor: pointer;
}
.popup__content h4 {
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
cursor: pointer;
}
.popup__content h6 {
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
cursor: pointer;
}
</style>