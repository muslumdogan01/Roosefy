<template>
  <div class="post__page">
    <div class="post__page__svg__area">
      <div class="post__page__svg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M0 12C0 12.3978 0.158035 12.7794 0.43934 13.0607C0.720644 13.342 1.10218 13.5 1.5 13.5H10.25C10.3163 13.5 10.3799 13.5263 10.4268 13.5732C10.4737 13.6201 10.5 13.6837 10.5 13.75V22.5C10.5 22.8978 10.658 23.2794 10.9393 23.5607C11.2206 23.842 11.6022 24 12 24C12.3978 24 12.7794 23.842 13.0607 23.5607C13.342 23.2794 13.5 22.8978 13.5 22.5V13.75C13.5 13.6837 13.5263 13.6201 13.5732 13.5732C13.6201 13.5263 13.6837 13.5 13.75 13.5H22.5C22.8978 13.5 23.2794 13.342 23.5607 13.0607C23.842 12.7794 24 12.3978 24 12C24 11.6022 23.842 11.2206 23.5607 10.9393C23.2794 10.658 22.8978 10.5 22.5 10.5H13.75C13.6837 10.5 13.6201 10.4737 13.5732 10.4268C13.5263 10.3799 13.5 10.3163 13.5 10.25V1.5C13.5 1.10218 13.342 0.720644 13.0607 0.43934C12.7794 0.158035 12.3978 0 12 0C11.6022 0 11.2206 0.158035 10.9393 0.43934C10.658 0.720644 10.5 1.10218 10.5 1.5V10.25C10.5 10.3163 10.4737 10.3799 10.4268 10.4268C10.3799 10.4737 10.3163 10.5 10.25 10.5H1.5C1.10218 10.5 0.720644 10.658 0.43934 10.9393C0.158035 11.2206 0 11.6022 0 12H0Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="post__page__text">
      <span>Post Template</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.post__page {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
 background: #9384E7;
border-radius: 10px;

}
.post__page__svg__area {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.post__page__svg {
  display: flex;
  justify-content: center;
  align-items: center;
}
.post__page__text {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.post__page__text span{
padding-bottom: 40px;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
text-align: center;
color: #FFFFFF;
}

/* media screen  */

@media (max-width: 1400px) {
  .post__page {
  width: 200px;
  height: 200px;
}
}
@media (max-width: 1200px) {}
@media (max-width: 1024px) {}
@media (max-width: 860px) {}

</style>