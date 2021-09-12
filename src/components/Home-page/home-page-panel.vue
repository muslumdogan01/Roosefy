<template>
  <div class="panel__detail">
    <div class="panel__detail__items">
      <ul class="panel__detail__items__list">
        <li v-for="panelItem in panelItems" :key="panelItem">
          {{ panelItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panelItems: ["Panel", "Templates", "Category", "Users"],
    };
  },
};
</script>

<style scoped>
.panel__detail {
  background: rgba(32, 33, 37, 0.05);
  width: 300px;
  height: 100vh;
}
.panel__detail__items__list {
  padding-top: 50px;
  padding-left: 30px;
}
.panel__detail__items__list li:nth-child(1) {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 56px;
  color: #202125;
  cursor: pointer;
}
.panel__detail__items__list li:nth-child(2) {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 56px;
  color: #202125;
  cursor: pointer;
}
.panel__detail__items__list li:nth-child(3) {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: rgba(32, 33, 37, 0.5);
  cursor: pointer;
}
.panel__detail__items__list li:nth-child(4) {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: rgba(32, 33, 37, 0.5);
  cursor: pointer;
}

</style>