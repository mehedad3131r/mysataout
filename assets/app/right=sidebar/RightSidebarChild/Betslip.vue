<template>
  <div class="Betslipdiv">
    <div class="header">
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            <svg
              id="Arrow"
              class=""
              fill="currentColor"
              viewBox="0 -93 512 512"
              xmlns="http://www.w3.org/2000/svg"
              data-v-a380d422=""
            >
              <path
                d="m441.667969 0-185.667969 185.667969-185.667969-185.667969-70.332031 70.332031 256 256 256-256zm0 0"
                data-v-a380d422=""
              ></path>
            </svg>
            Bet Slip
            <svg
              id="Line"
              fill="currentColor"
              height="15"
              viewBox="0 0 64 64"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m56.75 5.125h-49.5a3.25377 3.25377 0 0 0 -3.25 3.25v9a3.25377 3.25377 0 0 0 3.25 3.25h5.749v37.25a.99962.99962 0 0 0 1.4961.86816l7.38379-4.21679 7.38281 4.21679a.99927.99927 0 0 0 .99219 0l7.37793-4.21582 7.37109 4.21582a.99961.99961 0 0 0 1.49609-.86816v-37.25h10.251a3.25377 3.25377 0 0 0 3.25-3.25v-9a3.25377 3.25377 0 0 0 -3.25-3.25zm-12.251 51.02637-6.37109-3.64453a.99927.99927 0 0 0 -.99219 0l-7.37793 4.21679-7.38279-4.21679a.99927.99927 0 0 0 -.99219 0l-6.38381 3.6455c-.00406-.00271.00271-36.52823.00018-36.53115a5.756 5.756 0 0 1 5.74982-5.74619h26.30959a7.73031 7.73031 0 0 0 -2.55957 5.75zm13.501-38.77637a1.25116 1.25116 0 0 1 -1.25 1.25h-10.15808a5.75475 5.75475 0 0 1 5.6571-4.75 1.00012 1.00012 0 0 0 -.00005-2h-40.49897a1.00011 1.00011 0 0 0 0 2h3.82118a7.73 7.73 0 0 0 -2.50019 4.75h-5.82099a1.25116 1.25116 0 0 1 -1.25-1.25v-9a1.25116 1.25116 0 0 1 1.25-1.25h49.5a1.25116 1.25116 0 0 1 1.25 1.25z"
              />
            </svg>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <div class="arrowtop"></div>
            <v-list-item-title @click="BetSlipSiFunc">
              <svg
                fill="currentColor"
                version="1.1"
                id="bet"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 427.058 427.058"
                style="enable-background: new 0 0 427.058 427.058"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M364.845,11.045L364.845,11.045c-7.148-3.292-15.569-2.012-21.416,3.254l-27.754,24.575l-37.76-33.777
			c-7.586-6.796-19.071-6.796-26.657,0l-37.729,33.745L175.791,5.097c-7.588-6.796-19.074-6.796-26.662,0l-37.77,33.777L83.579,14.3
			c-8.197-7.286-20.749-6.547-28.035,1.65c-3.262,3.67-5.049,8.419-5.015,13.329v368.5c-0.065,10.983,8.786,19.939,19.769,20.004
			c4.911,0.029,9.66-1.761,13.331-5.024l27.754-24.575l37.76,33.777c7.586,6.796,19.071,6.796,26.657,0l37.729-33.749l37.735,33.745
			c7.588,6.795,19.074,6.795,26.662,0l37.77-33.776l27.78,24.574c8.196,7.288,20.748,6.552,28.035-1.644
			c3.265-3.671,5.052-8.423,5.018-13.336V29.279C376.628,21.412,372.033,14.242,364.845,11.045z M328.905,373.201
			c-7.587-6.721-19.007-6.691-26.558,0.071l-37.759,33.776l-37.73-33.745c-7.587-6.796-19.073-6.796-26.66,0l-37.734,33.745
			l-37.775-33.776c-7.522-6.761-18.922-6.792-26.481-0.072l-27.679,24.568v-53.305l-0.1-315.179l27.724,24.569
			c7.587,6.721,19.007,6.691,26.558-0.071l37.759-33.776l37.73,33.745c7.587,6.796,19.073,6.796,26.66,0l37.734-33.745
			l37.775,33.776c7.522,6.761,18.922,6.792,26.481,0.072l27.679-24.575v253.312l0.1,115.179L328.905,373.201z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M308.322,203.527H118.736c-5.523,0-10,4.477-10,10s4.477,10,10,10h189.586c5.523,0,10-4.477,10-10
			S313.844,203.527,308.322,203.527z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M218.322,143.527h-99.586c-5.523,0-10,4.477-10,10s4.477,10,10,10h99.586c5.523,0,10-4.477,10-10
			S223.844,143.527,218.322,143.527z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M308.322,263.527H118.736c-5.523,0-10,4.477-10,10c0,5.523,4.477,10,10,10h189.586c5.523,0,10-4.477,10-10
			C318.322,268.004,313.844,263.527,308.322,263.527z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              Bet Slip
            </v-list-item-title>
            <v-list-item-title @click="MyBetSlipFunc">
              <svg
                id="bet"
                fill="currentColor"
                enable-background="new 0 0 510 510"
                viewBox="0 0 510 510"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="m486.193 357.442c-.322-.569-.686-1.121-1.089-1.653-11.382-16.879-27.827-30.071-47.137-37.393v-255.396c0-34.738-28.262-63-63-63h-304c-34.738 0-63 28.262-63 63v65c0 16.542 13.458 30 30 30h66v274c0 16.542 13.458 30 30 30h184.177c17.345 28.74 48.876 48 84.823 48 78.444 0 125.415-87.225 83.226-152.558zm-382.226-229.442h-66v-65c0-18.196 14.804-33 33-33s33 14.804 33 33zm202.249 304h-172.249c0-16.009 0-345.373 0-361 0-10.902.782-24.572-9.363-41h250.363c18.196 0 33 14.804 33 33v249.126c-64.925-3.246-115.57 56.145-101.751 119.874zm96.751 48c-38.047 0-69-30.953-69-69 0-62.081 76.311-92.653 119.128-47.341l-46.128 46.128-13.394-13.394c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.858-5.858 15.355 0 21.213l24 24c5.853 5.854 15.357 5.857 21.213 0l51.24-51.24c13.965 44.471-19.495 89.634-65.846 89.634z"
                  />
                  <path
                    d="m182.967 126h32c8.284 0 15-6.716 15-15s-6.716-15-15-15h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
                  />
                  <path
                    d="m182.967 182h32c8.284 0 15-6.716 15-15s-6.716-15-15-15h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
                  />
                  <path
                    d="m182.967 246h32c8.284 0 15-6.716 15-15s-6.716-15-15-15h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
                  />
                  <path
                    d="m270.967 280h-88c-8.284 0-15 6.716-15 15s6.716 15 15 15h88c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                  />
                  <path
                    d="m270.967 344h-88c-8.284 0-15 6.716-15 15s6.716 15 15 15h88c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                  />
                  <path
                    d="m338.922 152.03c-13.838-4.527-29.144-9.996-37.742-16.238-2.816-2.044-3.21-6.163-2.639-9.336 3.103-17.254 29.88-16.434 40.278-8.145l-.187-.156.02-.023c9.625 8.461 24.889 1.661 24.889-11.259 0-4.765-2.229-9.003-5.694-11.75-4.811-4.02-13.519-8.901-24.821-11.177v-4.796c0-8.284-6.716-15-15-15s-15 6.716-15 15v5.738c-37.488 9.751-45.584 56.227-19.47 75.182 9.642 6.998 22.979 12.929 46.037 20.472 14.234 4.656 14.974 14.228 14.146 19.518-1.491 9.544-10.202 19.86-25.803 19.956-15.004.092-19.69-.593-31.202-7.563-7.089-4.291-16.311-2.023-20.601 5.063s-2.023 16.31 5.063 20.6c12.08 7.313 20.981 10.275 31.828 11.352v5.532c0 8.284 6.716 15 15 15s15-6.716 15-15v-6.885c48.112-12.37 58.487-78.881 5.898-96.085z"
                  />
                </g>
              </svg>
              My Bet
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="BetSlipSing" :class="{ active: BetSingData }" >
      <div class="DoTwo">
        <DoTwo />
      </div>
      <Drowpp />
      <TextCenter />
      <FooterRightSide />
    </div>

    <div class="MyBetSlip" :class="{ active: MyBetData }" >
      <div class="DoTwo">
        <DoTwoMyBet />
      </div>
      <TextCenterMyBet />
      <FooterRightSideMyBet />
    </div>
  </div>
</template>

<script>
import DoTwo from "./RightSideCompo/DoTwo.vue";
import Drowpp from "./RightSideCompo/Drowpp.vue";
import TextCenter from "./RightSideCompo/TextCenter.vue";
import FooterRightSide from "./RightSideCompo/FooterRightSide.vue";

// MyBet MyBet MyBet
import DoTwoMyBet from "./RightSideCompo/DoTwoMyBet.vue";
import TextCenterMyBet from "./RightSideCompo/TextCenterMyBet.vue";
import FooterRightSideMyBet from "./RightSideCompo/FooterRightSideMyBet.vue";

export default {
  name: "Betslip",
  components: {
    DoTwo,
    Drowpp,
    TextCenter,
    FooterRightSide,
    DoTwoMyBet,
    TextCenterMyBet,
    FooterRightSideMyBet,
  },data(){
    return{
      BetSingData:"false",
      MyBetData:"false",
    }
  },
  methods: {
    BetSlipSiFunc() {
      console.log("BetSlipSiFunc");
       this.BetSingData =true;
       this.MyBetData=false;
    },
    MyBetSlipFunc() {
      console.log("MyBetSlipFunc");
      this.MyBetData = true;
        this.BetSingData=false;
    },
  },
};
</script>

<style scoped>
.arrowtop {
  position: absolute;
  left: 55px;
  top: -5px;
  background-color: #2a2e39;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
}
.Betslipdiv {
  background-color: #131722;
  border-left: 1px solid #2a2e39;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 1225px;
  top: -70px;
  direction: rtl;
  height: 100%;
  min-height: -webkit-min-content;
  min-height: -moz-min-content;
  min-height: min-content;
  width: 250px;
  z-index: 200;
  margin-top: 70px;
  transition: all 0.5s ease;
  padding-top: 20px;
}
.header {
  display: flex;
  flex-direction: row-reverse;
  padding-left: 5px;
  border-top: 2px solid #2a2e39;
  border-bottom: 2px solid #2a2e39;
  padding-bottom: 5px;
}
.bg-primary {
  --v-theme-overlay-multiplier: var(--v-theme-primary-overlay-multiplier);
  background: #131722 !important;
  color: white !important;
  text-transform: capitalize;
  font-size: 13px;
}
#Line {
  color: white;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
#Arrow {
  color: white;
  width: 11px;
  height: 10px;
  margin-left: 10px;
  position: relative;
  top: 2px;
}
.v-menu .v-overlay__content > .v-card,
.v-menu .v-overlay__content > .v-sheet,
.v-menu .v-overlay__content > .v-list {
  background: #131722 !important;
  border-radius: inherit;
  overflow: auto;
  height: 100%;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.v-list-item-title {
  color: #cecece;
  padding: 10px;
  font-size: 13px;
  border-radius: 5px;
}
.v-list-item--density-default.v-list-item--one-line {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: #2a2e39;
}
.v-list-item-title:hover {
  background-color: #2a2e39;
  color: white;
}
#bet {
  width: 15px;
  height: 15px;
  color: #cecece;
  margin-right: 5px;
}
.DoTwo {
  display: flex;
  flex-direction: row-reverse;
  padding-top: 12px;
  border-bottom: 2px solid #2a2e39;
  padding-bottom: 5px;
}
.BetSlipSing{
    display: none;
}
.MyBetSlip{
   display: none;
}
.active{
  display: block;
}
</style>