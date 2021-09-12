<template>
  <div class="popup__content">
    <div class="popup__items">
      <span class="header">BACKGROUND COLOR</span>
      <div class="box__area">

         <!-- <button class="btn btn-success" @click="attachedClass = !attachedClass">burası button</button> -->
          <div class="white box" @click="bgColorBox" style="background: white"></div>
        <div class="black box" style="background: black"></div>
        <div class="green box" style="background: green"></div>
        <div class="red box" style="background: red"></div>
        <div class="yellow box" style="background: yellow"></div>
        <div class="brown box" style="background: brown"></div>
        <div class="blue box" style="background: blue"></div>
        <div class="grey box" style="background: grey"></div>
        <div class="purple box" style="background: purple"></div>
        <div class="orange box" style="background: orange"></div>
      </div>
      <p class="footer">CUSTOM COLOR</p>
      <div class="bg-input ml-2">
        <input type="color" v-model="bgColorModel" />
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'bgStyles',
  props:['value', 'valuee'],
  data(){
    return{
   attachedClass:false,
    }
  },
  computed:{
    bgColorModel:{
    get(){
      return this.value
    },
    set(value){
      this.$emit('input', value)
    }
    },
  bgColorBox:{
    get(){
      return this.valuee
    },
    set(valuee){
      this.$emit('white', valuee)
    }
  }
  },
};
</script>

<style scoped>
.red{
  background-color: red;
}
.blue{
  background-color: blue;
}
.popup__content {
  width: 270px;
  height: 250px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  padding: 20px 15px 5px 15px;
}
.popup__content span {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 0 5px 5px;
}
.box__area {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}
.box {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin: 5px;
  transition: 0.4s ease-out;
  cursor: pointer;
}
.box:hover {
  opacity: 0.5;
}
.footer {
  padding-top: 15px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 5px;
}
.bg-input {
  width: 40px;
  height: 40px;
  background: linear-gradient(225deg, #ff0202 9.21%, #bdff00 100%);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-input input {
  width: 34px;
  height: 36px;
  background: linear-gradient(225deg, #ff0202 9.21%, #bdff00 100%);
  border-radius: 3px;
}
.popup__content h1 {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;
  color: #ffffff;
}
.popup__content h2 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 30px;
  color: #ffffff;
}
.popup__content h4 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}
.popup__content h6 {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
</style>