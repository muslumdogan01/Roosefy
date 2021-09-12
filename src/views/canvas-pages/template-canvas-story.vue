<template>
  <div class="detail__page">
    <div class="detail__page__header">
      <div class="detail__page__header__exit">
        <b-button id="show-btn" @click="showModal">X</b-button>

        <b-modal
          ref="my-modal"
          class="d-flex justify-content-end"
          hide-footer
          title="Are you sure you want to Exit?"
        >
          <b-button variant="outline-primary" @click="exitTemplate()">
            Continue
          </b-button>

          <b-button
            variant="outline-primary"
            class="ml-3"
            @click="$router.push('/')"
          >
            Close
          </b-button>
        </b-modal>
      </div>
      <div class="detail__page__header__download">
        <button type="button" class="btn btn-light" @click="onUpload()">
          Dowload
        </button>
      </div>
    </div>
    <div class="detail__page__header__bar">
      <select id="selectFamily" class="mr-4" v-model="selectedFont">
        <option
          class="bg-dark"
          style="color: white"
          v-for="fontFamily in fontFamilys"
          :key="fontFamily.id"
        >
          {{ fontFamily.value }}
        </option>
      </select>

      <div class="d-flex align-items-center">
        <input
          type="text"
          class="inputFontSize text-white"
          v-model="fontSize"
        />

        <select class="dropFontSize text-white" v-model="fontSize">
          <option
            class="bg-dark text-white"
            style="color: white"
            v-for="fontSize in fontSizes"
            :key="fontSize.id"
            selected="selected"
          >
            {{ fontSize }}
          </option>
        </select>

        <div class="textCenterArea ml-4">
          <span class="deneme1" @click="leftFunction">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
              id="left"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"
              />
            </svg>
          </span>
          <span class="material-icons-outlined" @click="centerFunction">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
              id="center"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"
              />
            </svg>
          </span>
          <span class="material-icons-outlined" @click="rightFunction">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="selectColorArea d-flex ml-4">
        <input v-model="textColor" type="color" class="selectColor" />

        <p class="p-2 mt-3 text-white" style="font-weight: normal">
          {{ textColor }}
        </p>
      </div>
    </div>
    <div class="detail__page__hero">
      <div class="detail__page__leftBar__items">
        <div class="textShow" v-if="isTextShow">
            <text-popup/>
        
          <!-- <div class="popup__content" @click="showDraggable">
            <div class="popup__items">
              <span class="header">ADD TEXT STYLE</span>
              <h1>Title</h1>
              <h2>Headline</h2>
              <h4>Subheadline</h4>
              <h6>Normal Text</h6>
            </div>
          </div> -->
        </div>
        <div class="shapeShow" v-if="isTextShow1">
          <shapeStyles />
        </div>
        <div class="bgShow" v-if="isTextShow4">
          <bg-styles @white="changeWhiteColor" :valuee="whiteBg" @input="changeBgColor" :value="bgColor"/>
        </div>
        <div class="detail__page__leftBar">
          <ul class="leftBar__center">
            <li>
              <p
                class="circle"
                @click="showTextBar"
                :class="{ active: isActive }"
              >
                <svg
                  class="svgText"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.556 0.358994H2.444C1.86243 0.360578 1.30515 0.592377 0.894005 1.0037C0.482865 1.41503 0.25132 1.97242 0.25 2.55399V4.44299C0.25 4.77451 0.381696 5.09246 0.616117 5.32688C0.850537 5.5613 1.16848 5.69299 1.5 5.69299C1.83152 5.69299 2.14946 5.5613 2.38388 5.32688C2.6183 5.09246 2.75 4.77451 2.75 4.44299V3.10899C2.75 3.04269 2.77634 2.9791 2.82322 2.93222C2.87011 2.88533 2.9337 2.85899 3 2.85899H8.5C8.5663 2.85899 8.62989 2.88533 8.67678 2.93222C8.72366 2.9791 8.75 3.04269 8.75 3.10899V20.887C8.75 20.9533 8.72366 21.0169 8.67678 21.0638C8.62989 21.1107 8.5663 21.137 8.5 21.137H6.694C6.36248 21.137 6.04454 21.2687 5.81012 21.5031C5.5757 21.7375 5.444 22.0555 5.444 22.387C5.444 22.7185 5.5757 23.0365 5.81012 23.2709C6.04454 23.5053 6.36248 23.637 6.694 23.637H13.306C13.6375 23.637 13.9555 23.5053 14.1899 23.2709C14.4243 23.0365 14.556 22.7185 14.556 22.387C14.556 22.0555 14.4243 21.7375 14.1899 21.5031C13.9555 21.2687 13.6375 21.137 13.306 21.137H11.5C11.4337 21.137 11.3701 21.1107 11.3232 21.0638C11.2763 21.0169 11.25 20.9533 11.25 20.887V3.10899C11.25 3.04269 11.2763 2.9791 11.3232 2.93222C11.3701 2.88533 11.4337 2.85899 11.5 2.85899H17C17.0663 2.85899 17.1299 2.88533 17.1768 2.93222C17.2237 2.9791 17.25 3.04269 17.25 3.10899V4.44299C17.25 4.77451 17.3817 5.09246 17.6161 5.32688C17.8505 5.5613 18.1685 5.69299 18.5 5.69299C18.8315 5.69299 19.1495 5.5613 19.3839 5.32688C19.6183 5.09246 19.75 4.77451 19.75 4.44299V2.55399C19.7487 1.97242 19.5171 1.41503 19.106 1.0037C18.6949 0.592377 18.1376 0.360578 17.556 0.358994Z"
                    fill="white"
                  />
                </svg>
              </p>
            </li>
            <li>
              <p
                class="circle"
                @click="showShapeBar"
                :class="{ active1: isActive1 }"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M22.5 -0.00299835H14.5C13.6716 -0.00299835 13 0.668575 13 1.497V9.497C13 10.3254 13.6716 10.997 14.5 10.997H22.5C23.3284 10.997 24 10.3254 24 9.497V1.497C24 0.668575 23.3284 -0.00299835 22.5 -0.00299835Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M9.5 12.997H1.5C0.671573 12.997 0 13.6686 0 14.497V22.497C0 23.3254 0.671573 23.997 1.5 23.997H9.5C10.3284 23.997 11 23.3254 11 22.497V14.497C11 13.6686 10.3284 12.997 9.5 12.997Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <rect
                      width="11"
                      height="11"
                      rx="5.5"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M13 13H24V18.5C24 21.5376 21.5376 24 18.5 24C15.4624 24 13 21.5376 13 18.5V13Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </li>
            <li>
              <p class="circle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M12.8 8.2C12.7595 8.00711 12.655 7.83357 12.5034 7.70763C12.3518 7.58168 12.1621 7.51073 11.9651 7.50633C11.768 7.50192 11.5753 7.56432 11.4182 7.68337C11.2612 7.80242 11.149 7.97111 11.1 8.162L9.49997 11.666C9.48243 11.7046 9.45537 11.738 9.42135 11.7632C9.38733 11.7885 9.34746 11.8046 9.30547 11.8102C9.26349 11.8158 9.22077 11.8107 9.18132 11.7952C9.14188 11.7798 9.10701 11.7546 9.07997 11.722L7.98797 10.408C7.87079 10.2492 7.71514 10.1229 7.53566 10.0409C7.35618 9.95884 7.15879 9.92383 6.96205 9.93914C6.76532 9.95444 6.57571 10.0195 6.41107 10.1283C6.24644 10.2371 6.11219 10.386 6.02097 10.561L3.53497 14.7C3.4895 14.7759 3.46498 14.8625 3.4639 14.9509C3.46283 15.0394 3.48525 15.1266 3.52886 15.2035C3.57248 15.2805 3.63574 15.3445 3.71218 15.389C3.78862 15.4336 3.87551 15.457 3.96397 15.457H14.964C15.0457 15.457 15.1262 15.4369 15.1984 15.3986C15.2705 15.3603 15.3322 15.3048 15.378 15.2371C15.4238 15.1694 15.4523 15.0915 15.461 15.0103C15.4697 14.929 15.4584 14.8469 15.428 14.771L12.8 8.2Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M5.96411 7.5C7.06868 7.5 7.96411 6.60457 7.96411 5.5C7.96411 4.39543 7.06868 3.5 5.96411 3.5C4.85954 3.5 3.96411 4.39543 3.96411 5.5C3.96411 6.60457 4.85954 7.5 5.96411 7.5Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V2C19 1.46957 18.7893 0.960859 18.4142 0.585786C18.0391 0.210714 17.5304 0 17 0L2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 17C0 17.5304 0.210714 18.0391 0.585786 18.4142C0.960859 18.7893 1.46957 19 2 19H17ZM2 2.5C2 2.36739 2.05268 2.24021 2.14645 2.14645C2.24021 2.05268 2.36739 2 2.5 2H16.5C16.6326 2 16.7598 2.05268 16.8536 2.14645C16.9473 2.24021 17 2.36739 17 2.5V16.5C17 16.6326 16.9473 16.7598 16.8536 16.8536C16.7598 16.9473 16.6326 17 16.5 17H2.5C2.36739 17 2.24021 16.9473 2.14645 16.8536C2.05268 16.7598 2 16.6326 2 16.5V2.5Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M23.9919 9.235C24.0155 8.97341 23.9874 8.70971 23.9092 8.45898C23.8309 8.20825 23.704 7.97539 23.5358 7.77369C23.3675 7.572 23.1611 7.40543 22.9285 7.28349C22.6959 7.16155 22.4415 7.08663 22.1799 7.063L21.1799 6.972C20.9157 6.94813 20.6529 7.03018 20.4492 7.20008C20.2456 7.36999 20.1178 7.61385 20.0939 7.878C20.07 8.14216 20.1521 8.40498 20.322 8.60864C20.4919 8.81231 20.7357 8.94013 20.9999 8.964L21.4999 9.008C21.5654 9.0139 21.6291 9.03267 21.6873 9.06322C21.7455 9.09376 21.7971 9.1355 21.8392 9.18603C21.8813 9.23656 21.913 9.2949 21.9325 9.3577C21.952 9.42049 21.9589 9.48652 21.9529 9.552L20.8629 21.5C20.8507 21.6319 20.7867 21.7536 20.6849 21.8383C20.5831 21.9231 20.4518 21.964 20.3199 21.952L6.87688 20.728C6.74371 20.7116 6.60861 20.7222 6.47961 20.7591C6.35061 20.796 6.23036 20.8585 6.12601 20.9428C6.02166 21.0271 5.93535 21.1316 5.87223 21.25C5.8091 21.3684 5.77045 21.4983 5.75857 21.632C5.74669 21.7656 5.76182 21.9003 5.80307 22.0279C5.84432 22.1556 5.91084 22.2737 5.99868 22.3751C6.08651 22.4765 6.19385 22.5593 6.31432 22.6183C6.43479 22.6774 6.56591 22.7117 6.69988 22.719L20.6409 23.993C20.9026 24.0169 21.1664 23.9891 21.4173 23.911C21.6682 23.8329 21.9013 23.7062 22.1031 23.538C22.305 23.3698 22.4718 23.1635 22.5939 22.9308C22.7161 22.6981 22.7911 22.4437 22.8149 22.182L23.9919 9.235Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </li>
            <li>
              <p class="circle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.631 22.139C10.6309 22.0802 10.6102 22.0233 10.5723 21.9783C10.5344 21.9333 10.4819 21.9031 10.424 21.893C8.66289 21.5828 7.01739 20.8054 5.65947 19.6419C4.30155 18.4784 3.28104 16.9715 2.7046 15.2787C2.12815 13.586 2.01693 11.7695 2.38254 10.019C2.74816 8.26856 3.57719 6.64844 4.78302 5.32794C5.98884 4.00745 7.52719 3.03504 9.23732 2.51235C10.9474 1.98965 12.7666 1.93585 14.5046 2.35657C16.2426 2.77728 17.8357 3.65707 19.1175 4.904C20.3992 6.15093 21.3226 7.71922 21.791 9.445C21.8063 9.50166 21.841 9.55114 21.8891 9.58478C21.9372 9.61842 21.9955 9.63407 22.054 9.629C22.411 9.598 22.771 9.583 23.136 9.583C23.2683 9.5827 23.4003 9.59577 23.53 9.622C23.5709 9.63018 23.6131 9.62802 23.6529 9.61572C23.6927 9.60341 23.7288 9.58135 23.758 9.55155C23.7871 9.52174 23.8083 9.48512 23.8196 9.44503C23.831 9.40494 23.8322 9.36265 23.823 9.322C23.3249 7.20008 22.2576 5.25417 20.7359 3.69367C19.2142 2.13318 17.2958 1.01718 15.1871 0.465791C13.0784 -0.0856006 10.8593 -0.0515122 8.76851 0.564387C6.67774 1.18029 4.79451 2.35468 3.32148 3.96118C1.84845 5.56767 0.841405 7.54545 0.40871 9.68167C-0.0239857 11.8179 0.134055 14.0317 0.865825 16.0847C1.59759 18.1378 2.87539 19.9525 4.56169 21.3334C6.24799 22.7144 8.27895 23.6094 10.436 23.922C10.4775 23.9282 10.5198 23.9237 10.5592 23.9091C10.5985 23.8946 10.6335 23.8703 10.6609 23.8386C10.6883 23.8069 10.7073 23.7687 10.7161 23.7277C10.7248 23.6867 10.7231 23.6442 10.711 23.604C10.6579 23.4224 10.631 23.2342 10.631 23.045V22.139Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M8.09412 7.763C7.76339 7.763 7.44008 7.86109 7.1651 8.04485C6.89012 8.22862 6.67582 8.48981 6.5493 8.79539C6.42278 9.10096 6.38972 9.4372 6.45432 9.76156C6.51892 10.0859 6.67826 10.3838 6.91219 10.6176C7.14612 10.8514 7.44414 11.0106 7.76854 11.075C8.09294 11.1394 8.42916 11.1061 8.73466 10.9794C9.04016 10.8527 9.30122 10.6383 9.48482 10.3632C9.66842 10.0881 9.76632 9.76473 9.76612 9.434C9.76612 9.21448 9.72286 8.99711 9.63883 8.79431C9.55479 8.59151 9.43161 8.40725 9.27634 8.25207C9.12107 8.09689 8.93674 7.97383 8.73389 7.88991C8.53104 7.80599 8.31364 7.76287 8.09412 7.763Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M6.48299 15.052C6.43867 14.9621 6.37677 14.882 6.30096 14.8164C6.22515 14.7508 6.13696 14.7011 6.04161 14.6702C5.94626 14.6393 5.84567 14.6278 5.74581 14.6364C5.64594 14.645 5.54881 14.6736 5.46017 14.7204C5.37152 14.7672 5.29316 14.8313 5.2297 14.9089C5.16625 14.9865 5.119 15.076 5.09073 15.1722C5.06247 15.2683 5.05377 15.3692 5.06515 15.4688C5.07653 15.5684 5.10776 15.6647 5.15699 15.752C5.70304 16.7892 6.47304 17.6919 7.41119 18.3947C8.34934 19.0974 9.43211 19.5826 10.581 19.815C10.6132 19.8215 10.6464 19.8216 10.6787 19.8152C10.7109 19.8089 10.7416 19.7962 10.769 19.778C10.8239 19.7409 10.8623 19.6839 10.876 19.619C10.9427 19.2937 11.0203 18.9737 11.109 18.659C11.1185 18.6257 11.121 18.5909 11.1163 18.5566C11.1117 18.5223 11.1 18.4894 11.0819 18.4599C11.0639 18.4303 11.0399 18.4049 11.0115 18.3851C10.9831 18.3654 10.9509 18.3517 10.917 18.345C9.98048 18.1579 9.09709 17.7656 8.33039 17.1962C7.5637 16.6268 6.93276 15.8945 6.48299 15.052Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M12.1311 23.043C12.1329 23.1744 12.1864 23.2998 12.28 23.392C12.3736 23.4843 12.4997 23.536 12.6311 23.536C12.7024 23.5357 12.7728 23.5208 12.838 23.492C12.9032 23.4633 12.9618 23.4214 13.0101 23.369L23.4941 11.932L23.5081 11.916C23.5908 11.8249 23.6365 11.7061 23.6361 11.583C23.6361 11.4504 23.5834 11.3232 23.4897 11.2294C23.3959 11.1357 23.2687 11.083 23.1361 11.083C20.2192 11.0875 17.4232 12.2486 15.3611 14.3116C13.2991 16.3746 12.1393 19.1711 12.1361 22.088L12.1311 23.043Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M19.0169 9.411C18.7562 8.96376 18.3809 8.59422 17.9296 8.34055C17.4783 8.08687 16.9675 7.95826 16.4499 7.968C15.9329 7.95814 15.4226 8.08674 14.9719 8.34046C14.5213 8.59418 14.1467 8.96379 13.8869 9.411C13.7904 9.58498 13.7669 9.79019 13.8217 9.98147C13.8765 10.1728 14.005 10.3345 14.1789 10.431C14.3529 10.5275 14.5581 10.551 14.7494 10.4962C14.9407 10.4415 15.1024 10.313 15.1989 10.139C15.3279 9.92476 15.5122 9.74931 15.7326 9.63121C15.953 9.5131 16.2012 9.45671 16.4509 9.468C16.7013 9.45652 16.9501 9.51279 17.1712 9.63088C17.3922 9.74897 17.5773 9.92451 17.7069 10.139C17.7534 10.2276 17.8171 10.306 17.8942 10.3696C17.9714 10.4331 18.0605 10.4807 18.1564 10.5093C18.2522 10.538 18.3528 10.5471 18.4522 10.5363C18.5516 10.5255 18.6479 10.495 18.7353 10.4464C18.8227 10.3979 18.8996 10.3323 18.9613 10.2536C19.023 10.175 19.0684 10.0847 19.0947 9.98825C19.121 9.89177 19.1278 9.791 19.1146 9.69187C19.1015 9.59273 19.0686 9.49724 19.0179 9.411H19.0169Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </svg>
              </p>
            </li>
            <li>
              <p
                class="circle"
                @click="showBgBar"
                :class="{ active4: isActive4 }"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M22.382 17.9C22.2818 17.7594 22.1495 17.6448 21.9961 17.5658C21.8427 17.4867 21.6726 17.4455 21.5 17.4455C21.3274 17.4455 21.1573 17.4867 21.0039 17.5658C20.8505 17.6448 20.7182 17.7594 20.618 17.9C19.8113 18.9505 19.2576 20.1728 19 21.472C19 22.135 19.2634 22.7709 19.7322 23.2398C20.2011 23.7086 20.837 23.972 21.5 23.972C22.163 23.972 22.7989 23.7086 23.2678 23.2398C23.7366 22.7709 24 22.135 24 21.472C23.7429 20.1726 23.1892 18.9502 22.382 17.9Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M14.9241 7.1C16.8053 9.05887 19.0864 10.5896 21.6121 11.588C21.6569 11.6015 21.7046 11.6021 21.7498 11.5899C21.795 11.5777 21.8359 11.5531 21.8678 11.5188C21.8997 11.4846 21.9214 11.4422 21.9305 11.3962C21.9396 11.3503 21.9356 11.3028 21.9191 11.259C21.0611 9.008 17.5661 5.459 17.0641 4.959C16.5391 4.433 12.6691 0.619002 10.4231 0.0320022C10.3812 0.0207322 10.3371 0.0205519 10.2952 0.0314791C10.2532 0.0424064 10.2148 0.0640651 10.1837 0.0943274C10.1526 0.12459 10.13 0.162414 10.118 0.204085C10.1059 0.245755 10.105 0.289838 10.1151 0.332002C10.4111 1.657 12.4511 4.63 14.9241 7.1Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M13.8639 8.164C11.8096 6.18978 10.1173 3.87067 8.86392 1.312C8.84727 1.27059 8.81985 1.23439 8.78448 1.20716C8.74912 1.17993 8.70712 1.16267 8.66283 1.15716C8.61854 1.15165 8.57358 1.15809 8.53262 1.17582C8.49167 1.19356 8.45621 1.22193 8.42992 1.258L0.29992 12.412C-0.89308 13.605 1.71592 16.851 3.44492 18.581C5.30092 20.437 7.54492 22.037 8.84492 22.037C8.97551 22.0444 9.10624 22.025 9.22903 21.9799C9.35183 21.9348 9.4641 21.8651 9.55892 21.775L21.0449 13.394C21.0819 13.3668 21.1107 13.33 21.1282 13.2875C21.1456 13.245 21.151 13.1985 21.1438 13.1532C21.1366 13.1078 21.117 13.0653 21.0872 13.0304C21.0574 12.9954 21.0186 12.9693 20.9749 12.955C18.2994 11.8658 15.8783 10.2346 13.8639 8.164Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </li>
            <li>
              <p class="circle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4401 9.549C23.2997 9.37695 23.1228 9.23838 22.9221 9.14341C22.7214 9.04843 22.5021 8.99944 22.2801 9H10.4201C10.3046 9.00025 10.1927 8.96056 10.1032 8.88765C10.0137 8.81474 9.95214 8.71311 9.92906 8.6L9.65106 7.205C9.58288 6.8651 9.39907 6.55931 9.13089 6.33963C8.86272 6.11994 8.52673 5.99993 8.18006 6H1.72006C1.49752 5.99981 1.27772 6.04913 1.07661 6.1444C0.875489 6.23967 0.69809 6.37849 0.557268 6.55081C0.416446 6.72313 0.315731 6.92462 0.262422 7.14068C0.209114 7.35674 0.204548 7.58196 0.249056 7.8L2.84906 20.8C2.91825 21.139 3.10249 21.4436 3.37057 21.6623C3.63865 21.881 3.97409 22.0003 4.32006 22H20.2811C20.6269 22.0001 20.9621 21.8807 21.2299 21.662C21.4978 21.4433 21.6819 21.1388 21.7511 20.8L23.7511 10.8C23.7955 10.5815 23.7906 10.3558 23.7368 10.1394C23.683 9.92298 23.5816 9.72129 23.4401 9.549Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M3.21997 5C3.44745 5.00113 3.66852 4.92466 3.84669 4.78321C4.02486 4.64177 4.14947 4.44381 4.19997 4.222C4.20918 4.16287 4.23827 4.10865 4.28245 4.06829C4.32663 4.02793 4.38325 4.00384 4.44297 4H19.72C19.8526 4 19.9798 4.05268 20.0735 4.14645C20.1673 4.24021 20.22 4.36739 20.22 4.5V7C20.22 7.26522 20.3253 7.51957 20.5129 7.70711C20.7004 7.89464 20.9548 8 21.22 8C21.4852 8 21.7395 7.89464 21.9271 7.70711C22.1146 7.51957 22.22 7.26522 22.22 7V4C22.22 3.46957 22.0093 2.96086 21.6342 2.58579C21.2591 2.21071 20.7504 2 20.22 2H4.21997C3.68954 2 3.18083 2.21071 2.80576 2.58579C2.43068 2.96086 2.21997 3.46957 2.21997 4C2.21997 4.13132 2.24584 4.26136 2.29609 4.38268C2.34635 4.50401 2.42001 4.61425 2.51286 4.70711C2.60572 4.79997 2.71596 4.87362 2.83729 4.92388C2.95861 4.97413 3.08865 5 3.21997 5Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </svg>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail__page__hero__container">
        <!-- Settings -->

        <!-- Canva -->
        <div class="card" id="uploadCard" 
        :class="{backgroundColor:whiteBg}"
        :style="{backgroundColor:bgColor}">
          <div class="card-body">
            <div class="editableArea">
             
              <Moveable
    
                ref="moveable"
                class="moveable"
                v-bind="moveable"
                @drag="handleDrag"
                @resize="handleResize"
                @scale="handleScale"
                @rotate="handleRotate"
                @warp="handleWarp"
                @pinch="handlePinch"
              >
            
                <input-contenteditable
                  :class="[
                    { textLeft: isActiveLeft },
                    { textCenter: isActiveCenter },
                    { textRight: isActiveRight },
                  ]"
                  :style="[
                    customStyle,
                    { color: textColor },
                    { fontFamily: selectedFont },
                  ]"
                  style="font-size: 30px"
                  class="editTable"
                  type="text"
                  data-placeholder="Share usefule resources and tips"
                  _is="p"
                />
              </Moveable>
            
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import Moveable from "vue-moveable";
import InputContenteditable from "vue-input-contenteditable";
import TextPopup from "../../components/canvas-story-popUp/text-popup.vue";
import shapeStyles from "../../components/canvas-story-popUp/shape-styles.vue";
import BgStyles from "../../components/canvas-story-popUp/bg-styles.vue";

export default {
  name:'parent',
  components: {
    Moveable,
    "input-contenteditable": InputContenteditable,
    TextPopup,
    shapeStyles,
    BgStyles,
  },
  data() {
    return {
      title: "muslum",
      parentMessage:'',
      isTextShow: false,
      isTextShow1: false,
      // isTextShow2: false,
      // isTextShow3: false,
      isTextShow4: false,
      // isTextShow5: false,
      isActive: false,
      isActive1: false,
      // isActive2: false,
      // isActive3: false,
      isActive4: false,
      // isActive5: false,
      moveable: {
        draggable: true,
        throttleDrag: 0,
        resizable: false,
        throttleResize: 1,
        keepRatio: false,
        scalable: true,
        throttleScale: 0,
        rotatable: true,
        throttleRotate: 0,
        pinchable: true, // ["draggable", "resizable", "scalable", "rotatable"]
        origin: false,
      },

      selectedImage: null,
      isActiveLeft: false,
      isActiveCenter: false,
      isActiveRight: false,
      textColor: "#000",
      bgColor:'#fff',
      whiteBg:'#000',
      showDraggableArea: false,
      fontSize: [30],
      selectedFont: "Playfair Display",
      fontFamilys: [
        { value: "Marck Script" },
        { value: "Playfair Display" },
        { value: "The Girl Next Door" },
        { value: "Tangerine" },
        { value: "Inter" },
      ],
      fontSizes: [14, 16, 20, 24, 28, 30, 36, 48, 50, 54],
    };
  },
  methods: {
    onUpload() {
      html2canvas(document.querySelector("#uploadCard"), {
        allowTaint: true,
        useCORS: true,
      })
        .then((canvas) => {
          var image = canvas.toDataURL("image/png");

          let anchor = document.createElement("a");

          anchor.download = "resim.png";
          anchor.href = image;
          anchor.dataset.downloadurl = [
            "image/png",
            anchor.download,
            anchor.href,
          ].join(":");
          anchor.click();
          anchor.remove();
        })
        .catch(console.log);
    },
    changeBgColor(value) {
      this.bgColor = value;
    },
    changeWhiteColor(valuee){
      this.whiteBg=valuee;
    },
    showTextBar() {
      this.isTextShow = !this.isTextShow;
      this.isActive = !this.isActive;
      this.isTextShow4 = false;
      this.isActive4 = false;
      this.isTextShow1 = false;
       this.isActive1 = false;
      
    },
    showDraggable() {
      this.showDraggableArea = !this.showDraggableArea;
    },
    showShapeBar() {
      this.isTextShow1 = !this.isTextShow1;
      this.isActive1 = !this.isActive1;
       this.isActive=false;
      this.isTextShow = false;
      this.isTextShow4 = false;
       this.isActive4=false;
    },
    showBgBar() {
      this.isTextShow4 = !this.isTextShow4;
      this.isActive4 = !this.isActive4;
      this.isTextShow = false;
      this.isActive = false;
      this.isTextShow1 = false;
       this.isActive1 = false;
    },
    leftFunction() {
      this.isActiveLeft = true;
      this.isActiveCenter = false;
    },
    centerFunction() {
      this.isActiveCenter = true;
      this.isActiveLeft = false;
      this.isActiveRight = false;
    },
    rightFunction() {
      this.isActiveRight = true;
      this.isActiveCenter = false;
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    exitTemplate() {
      this.$refs["my-modal"].hide();
    },

    handleDrag({ target, transform }) {
      console.log("onDrag left, top", transform);
      target.style.transform = transform;
    },
    handleResize({ target, width, height, delta }) {
      console.log("onResize", width, height);
      delta[0] && (target.style.width = `${width}px`);
      delta[1] && (target.style.height = `${height}px`);
    },
    handleScale({ target, transform, scale }) {
      console.log("onScale scale", scale);
      target.style.transform = transform;
    },
    handleRotate({ target, dist, transform }) {
      console.log("onRotate", dist);
      target.style.transform = transform;
    },
    handleWarp({ target, transform }) {
      console.log("onWarp", transform);
      target.style.transform = transform;
    },
    handlePinch({ target }) {
      console.log("onPinch", target);
    },
  },
  computed: {

    customStyle: function () {
      return {
        fontSize: this.fontSize + "px",
      };
    },
    changeFontFamily: function () {
      return {
        selectedFont: this.selectedFont,
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      const moveable = this.$refs.moveable;
      moveable.$el.addEventListener("click", () => {
        document.getElementsByClassName("editTable")[0].focus();
      });
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Marck+Script&family=Tangerine&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Marck+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=The+Girl+Next+Door&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap");
body,
html {
  font-family: "Playfair Display", serif;
}
.detail__page {
  background-color: #202125;
  height: 100vh;
}
.textLeft {
  text-align: left !important;
}
.textCenter {
  text-align: center !important;
}
.textRight {
  text-align: right !important;
}
.detail__page__header {
  width: 100%;
  height: 70px;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  justify-content: space-between;
}
.detail__page__header__bar {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 1px;
}

.detail__page__hero {
  display: flex;
  justify-content: center;
  background-color: #202125;
  padding: 100px 0 100px 0;
  position: relative;
}
.detail__page__leftBar__items {
  display: flex;
  width: 400px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.detail__page__leftBar__items .textShow {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 250px;
  position: absolute;
  top: 150px;
  left: 105px;
  transition: 0.5s ease-in-out;
}
.detail__page__leftBar__items .shapeShow {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 250px;
  position: absolute;
  top: 190px;
  left: 105px;
}
.detail__page__leftBar__items .bgShow {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 250px;
  position: absolute;
  bottom: 180px;
  left: 105px;
}
.detail__page__leftBar {
  position: absolute;
  left: 30px;
  top: 150px;
  width: 70px;
  height: 444px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.detail__page__leftBar .leftBar__center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 400px;
  padding-top: 30px;
}

.detail__page__leftBar .leftBar__center li .circle {
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.detail__page__leftBar .leftBar__center svg {
  position: absolute;
  top: calc(100% - 37px);
  left: calc(100% - 36px);
}
.detail__page__leftBar .leftBar__center .circle:hover {
  background: #fbab7e;
}
.active {
  background: #fbab7e;
}
.active1 {
  background: #fbab7e;
}
.active2 {
  background: #fbab7e;
}
.active3 {
  background: #fbab7e;
}
.active4 {
  background: #fbab7e;
}
.active5 {
  background: #fbab7e;
}

.detail__page__leftBar .leftBar__center .circle:hover path {
  fill: #fff !important;
}

.detail__page__hero__container {
  width: 700px;
  background-color: #202125;
  display: flex;
  justify-content: center;
}

.detail__page__hero__container .textEditor {
  width: 250px;
  height: 450px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail__page__hero__container .textEditor .editorArea {
  width: 240px;
  height: 440px;
  padding: 10px;
  color: white;
  background: #36373b;
}
.detail__page__hero__container .textEditor .editorArea p {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.5);
}
#selectFamily {
  width: 218px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: white;
  padding-left: 10px;
}
#selectSize {
  width: 100px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: white;
  border: none !important;
  padding: 10px;
}

.inputFontSize {
  width: 50px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
  padding-left: 15px;
}
.dropFontSize {
  width: 50px;
  height: 44px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.textCenterArea {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.textCenterArea span {
  padding: 5px;
  cursor: pointer;
}
.selectColorArea {
  width: 120px;
  height: 44px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.selectColor {
  width: 30px;
  height: 25px;
  border-radius: 50% !important;
  color: white;
}

.detail__page__header__exit {
  margin-left: 30px;
  margin-top: 15px;
}
#show-btn {
  border-radius: 0 !important;
  background: rgba(255, 255, 255, 0);
  border: none;
  font-size: 20px;
  transition: 0.5s;
}
#show-btn:hover {
  background: rgba(255, 255, 255, 0.05);
}
.detail__page__header__download {
  /* position: absolute;
  top: 30px;
  right: 30px;
  z-index: 1000; */
  z-index: 1000;
  position: relative;
  padding-right: 30px;
  margin-top: 15px;
}
.detail__page__header__download .btn {
  color: black !important;
  width: 117px !important;
  height: 40px !important;
}

.card {
  min-height: 35rem;
  display: flex;
  z-index: 900;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  width: 20rem;
  position: relative;
}
.card-body {
  width: 20rem;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.editableArea {
  width: 200px !important;
  height: 12rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.moveable {
  width: 200px !important;
  height: 12rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.editTable {
  width: 200px;
  cursor: pointer;
  overflow: hidden;
  border: none;
  outline: none;
  transition: 0.5s all;
  text-align: center;
  font-size: 30px;
  z-index: 30;
  font-weight: 500;
  font-variant: normal;
  text-align: center;
  margin: 0 !important;
}
.editTable:empty::before {
  content: attr(data-placeholder);
  border: none;
}

.imageArea {
  width: 18rem;
  height: 15rem;
  background-color: white;
  display: flex;
  justify-content: center;
}
.imageCenter {
  width: 16rem;
  height: 16rem;
  background-color: #eeee;
  margin-top: -12%;
}
.imageCenter img {
  width: 16rem;
  height: 16rem;
}

.changeColor {
  position: absolute;
  top: 28%;
  left: 25%;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
}
/* background colors */
.white{background: #fff;}
.black{background: #0000;}
.green{background: green;}
.red{background: red;}
.yellow{background: yellow;}
.brown{background: brown;}
.blue{background: blue;}
.grey{background: grey;}
.purple{background: purple;}
.orange{background: orange;}
/* textPopUpArea */
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
  cursor: pointer;
}
.popup__content h2 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 30px;
  color: #ffffff;
  cursor: pointer;
}
.popup__content h4 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
}
.popup__content h6 {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
}
</style>


