<template>
  <div class="container">
    <div class="content__detail">
      <div class="content__detail__items">
        <h1>Templates (34)</h1>
        <button @click="$router.push('/new-template-design')">
          New Template
        </button>
      </div>
      <div class="deneme mt-5">
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
        <p>Lorem ıpsum dolor sit amet</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content__detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 50px;
}
.content__detail__items {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.content__detail__items h1 {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 56px;
  color: #202125;
}
.content__detail__items button {
  background: #FBAB7E;
  border-radius: 5px;
  width: 164px;
  height: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  transition: 0.3s;
}
.content__detail__items button:hover{
  /* color: #ff7a59;
  border: #fbab7e solid 1px;
  background:#fff; */
   background-image: linear-gradient(to right, #fab790, #ff4d20);
   box-shadow: 2px 2px rgba(0,0,0,0.4);
}
</style>