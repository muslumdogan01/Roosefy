<template>
  <div class="popup__content">
    <div class="popup__items">
      <div class="popup__items__header">
        <span>
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="63" height="63" fill="white" />
          </svg>
        </span>
        <span>
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="63" height="63" rx="31.5" fill="white" />
          </svg>
        </span>
        <span>
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 0L63 63H0L32 0Z" fill="white" />
          </svg>
        </span>
      </div>
      <div class="popup__items__footer">
        <span>
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="62" height="62" stroke="white" />
          </svg>
        </span>
        <span>
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="62"
              height="62"
              rx="31"
              stroke="white"
            />
          </svg>
        </span>
        <span>
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.814771 62.5L31.9929 1.11806L62.1967 62.5H0.814771Z"
              stroke="white"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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