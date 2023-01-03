<template>
  <div class="rightSidebar">
    <br />
    <br />
    <br />

    <div class="Betslip" @click="BetslipFunc">
      <svg
        id="IconSvgTotal"
        fill="currentColor"
        enable-background="new 0 0 512 512"
        height="45"
        viewBox="0 0 512 512"
        width="45"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="m204.179 187c5.523 0 10-4.477 10-10s-4.477-10-10-10h-33.709c-5.523 0-10 4.477-10 10v80c0 5.523 4.477 10 10 10h33.709c5.523 0 10-4.477 10-10s-4.477-10-10-10h-23.709v-20h21.223c5.523 0 10-4.477 10-10s-4.477-10-10-10h-21.223v-20z"
          />
          <path
            d="m138.714 210.836c3.058-4.708 4.768-10.37 4.555-16.438-.539-15.397-13.622-27.398-29.028-27.398h-22.6c-5.523 0-10 4.477-10 10v79.971c0 5.534 4.49 10.016 10.024 10 9.732-.028 23.564-.066 27.272-.066 17.388 0 31.534-14.146 31.534-31.533-.001-9.904-4.594-18.751-11.757-24.536zm-37.073-23.836h13.238c4.636 0 8.408 3.772 8.408 8.408s-3.772 8.408-8.408 8.408c-1.725 0-13.238.022-13.238.022zm17.296 59.905c-3.184 0-10.878.028-17.296.053v-23.12c1.569-.006 17.296 0 17.296 0 6.36 0 11.534 5.174 11.534 11.534-.001 6.359-5.175 11.533-11.534 11.533z"
          />
          <path
            d="m278.359 167h-44.18c-5.523 0-10 4.477-10 10s4.477 10 10 10h12.001v70c0 5.523 4.477 10 10 10s10-4.477 10-10v-70h12.18c5.522 0 10-4.477 10-10s-4.478-10-10.001-10z"
          />
          <path
            d="m457 302h-65v-75c0-16.414-8.837-30.797-22-38.658v-31.342c0-15.569-7.949-29.313-20-37.396v-74.604c0-24.813-20.187-45-45-45h-240c-24.813 0-45 20.187-45 45v74.604c-12.051 8.083-20 21.827-20 37.396v120c0 15.569 7.949 29.313 20 37.396v152.604c0 24.813 20.187 45 45 45h240c2.439 0 4.912-.239 7.464-.71 1.455.462 2.981.71 4.536.71h150c3.979 0 7.793-1.581 10.606-4.393 22.179-22.179 34.394-51.667 34.394-83.033v-67.574c0-30.327-24.673-55-55-55zm-407-257c0-8.271 6.729-15 15-15h240c8.271 0 15 6.729 15 15v67h-270zm-20 232v-120c0-8.271 6.729-15 15-15h280c8.271 0 15 6.729 15 15v25.547c-21.5 3.373-38 22.02-38 44.453v65h-257c-8.271 0-15-6.729-15-15zm262.958 45-31.996 37.329c-10.353 12.078-16.748 26.982-18.472 42.671h-192.49v-80zm-227.958 160c-8.271 0-15-6.729-15-15v-35h194.953c3.604 12.832 10.433 24.6 20.116 34.283l15.718 15.717zm417-57.426c0 21.337-7.593 41.508-21.499 57.426h-137.288l-36.931-36.93c-9.21-9.21-14.282-21.457-14.282-34.482 0-11.632 4.169-22.903 11.739-31.735l18.261-21.305v29.452c0 8.284 6.716 15 15 15s15-6.716 15-15v-160c0-8.271 6.729-15 15-15s15 6.729 15 15v140c0 8.284 6.716 15 15 15s15-6.716 15-15v-35h30v35c0 8.284 6.716 15 15 15s15-6.716 15-15v-35h5c13.785 0 25 11.215 25 25z"
          />
        </g>
      </svg>
      <v-tooltip activator="parent" anchor="start">Betslip</v-tooltip>
    </div>

    <div class="Notifications" @click="notifictionFunc">
      <svg
        id="IconSvg"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
      >
        <path
          fill="currentcolor"
          d="M23.98 13.12c3.67 1.19 5.98 4.85 6.02 9.26v2.31c-.04 1.53.03 2.14.35 2.46l-.7.7c-.61-.6-.7-1.32-.66-3.18L29 24v-1.62c-.04-4.13-2.23-7.46-5.63-8.4a.5.5 0 0 1-.37-.48c0-1.04-.56-1.5-1.5-1.5s-1.5.46-1.5 1.5a.5.5 0 0 1-.37.48c-3.4.93-5.59 4.27-5.63 8.4V24l.01.67c.04 1.86-.05 2.58-.66 3.18l-.7-.7c.32-.32.4-.93.36-2.46L13 24v-1.62c.04-4.41 2.35-8.07 6.02-9.26.15-1.39 1.14-2.12 2.48-2.12s2.33.73 2.48 2.12zM13 28a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2m0-1a1 1 0 0 1 0 4H13a1 1 0 0 1 0-4m6 3.5a1 1 0 0 0 5 0h1a1 1 0 0 1-7 0"
        ></path>
      </svg>
      <v-tooltip activator="parent" anchor="start">Notifications</v-tooltip>
    </div>

    <div class="Favorites" @click="FavoritesFunc">
      <svg
        id="IconSvg"
        fill="currentColor"
        enable-background="new 0 0 511.992 511.992"
        height="45"
        viewBox=" 11 -212 451.2 921.1"
        width="45"
        xmlns="http://www.w3.org/2000/svg"
        data-v-a380d422=""
      >
        <path
          d="m510.616 196.061c-3.944-12.14-15.729-20.486-32.329-22.898l-131.649-19.131-58.876-119.293c-7.424-15.044-19.003-23.671-31.767-23.671s-24.342 8.628-31.766 23.671l-58.873 119.292-131.65 19.132c-16.602 2.412-28.385 10.757-32.33 22.897-3.944 12.14.683 25.818 12.695 37.526l95.262 92.857-22.489 131.12c-2.957 17.247 2.066 27.561 6.8 33.176 5.538 6.568 13.617 10.186 22.749 10.186 6.905 0 14.257-2.025 21.85-6.019l117.753-61.906 117.752 61.905c7.595 3.994 14.946 6.019 21.853 6.019h.001c9.133 0 17.212-3.618 22.75-10.186 4.734-5.615 9.757-15.929 6.799-33.177l-22.493-131.118 95.263-92.856c12.011-11.709 16.639-25.386 12.695-37.526zm-33.636 16.043-100.91 98.361c-3.536 3.446-5.149 8.411-4.314 13.277l23.826 138.89c.767 4.473.378 7.155.016 8.291-.905-.001-3.479-.254-7.888-2.572l-124.733-65.575c-2.186-1.149-4.583-1.723-6.98-1.723s-4.795.574-6.98 1.723l-124.734 65.576c-4.404 2.316-6.977 2.57-7.883 2.571-.363-1.136-.752-3.818.015-8.291l23.822-138.891c.834-4.866-.779-9.831-4.314-13.277l-100.91-98.362c-3.254-3.172-4.515-5.572-4.887-6.702.965-.695 3.396-1.896 7.895-2.55l139.456-20.266c4.886-.71 9.109-3.779 11.294-8.206l62.364-126.365c2.01-4.074 3.903-6.015 4.863-6.719.96.704 2.854 2.645 4.864 6.72l62.365 126.364c2.186 4.427 6.408 7.496 11.294 8.206l139.454 20.266c4.498.653 6.929 1.854 7.894 2.55-.374 1.131-1.635 3.532-4.889 6.704z"
          data-v-a380d422=""
        ></path>
      </svg>

      <v-tooltip activator="parent" anchor="start">Favorites</v-tooltip>
    </div>

    <div class="Recent" @click="RecentFunc">
      <svg
        id="IconSvgTotal"
        fill="currentColor"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24.1 22.6"
      >
        <path
          d="M11.94,12.28l4.52,3.39a.75.75,0,1,0,.9-1.21L13.18,11.3V4.9a.76.76,0,1,0-1.51,0v6.77a.8.8,0,0,0,.27.61Z"
        />
        <path
          d="M12.8,0A11.28,11.28,0,0,0,1.67,9.41L1.38,9a.75.75,0,0,0-1.25.84l1.51,2.26a.75.75,0,0,0,.55.34h.07a.72.72,0,0,0,.53-.23l1.88-1.88A.75.75,0,1,0,3.61,9.26l-.47.47A9.79,9.79,0,1,1,12.8,21.09a9.3,9.3,0,0,1-7.67-3.83.75.75,0,1,0-1.22.88,10.74,10.74,0,0,0,8.89,4.45A11.3,11.3,0,1,0,12.8,0Z"
        />
      </svg>

      <v-tooltip activator="parent" anchor="start">Recent</v-tooltip>
    </div>

    <div class="alert" @click="AlertFunc">
      <svg
        id="IconSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
      >
        <path
          fill="currentcolor"
          d="M22.5 12a1 1 0 0 1 0 21 1 1 0 0 1 0-21m0 1a1 1 0 0 0 0 19 1 1 0 0 0 0-19m-7.15 16.85l.8.6-2.05 2.75-.8-.6zm13.48.57l.8-.6 2.07 2.78-.8.6zM22 22v-7h1v8h-6v-1zm9.93-2.95l-.58-.81a4 4 0 1 0-5.84-5.2l-.87-.49a5 5 0 1 1 7.3 6.5zm-11.57-6.5l-.87.48a4 4 0 1 0-5.9 5.17l-.6.8a5 5 0 1 1 7.36-6.46z"
        ></path>
      </svg>

      <v-tooltip activator="parent" anchor="start">Alert</v-tooltip>
    </div>

    <div class="News" @click="NewsFunc">
      <svg
        id="IconSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 45 45"
        width="45"
        height="45"
        fill="none"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5 11c-.83 0-1.5.67-1.5 1.5v19a2.5 2.5 0 0 0 2.5 2.5H33.5c.59 0 1.06-.15 1.43-.4.37-.24.61-.57.77-.88a2.96 2.96 0 0 0 .3-1.18v-.04h-.5.5v-11c0-.83-.67-1.5-1.5-1.5H32v-6.5c0-.83-.67-1.5-1.5-1.5h-19zM32 20V31.55a1.97 1.97 0 0 0 .2.73c.1.19.23.36.42.5.2.12.47.22.88.22.41 0 .69-.1.88-.23.2-.13.33-.3.42-.5a1.96 1.96 0 0 0 .2-.76V20.5a.5.5 0 0 0-.5-.5H32zm-.7 12.72l.16.28H12.5a1.5 1.5 0 0 1-1.5-1.5v-19c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v19h.5-.5v.04a2.08 2.08 0 0 0 .04.35c.03.22.1.53.26.83zM15.5 15c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3zM28 24H14v-1h14v1zm-6-8h6v-1h-6v1zm6 3h-6v-1h6v1zm-14 8h14v-1H14v1zm7 3h-7v-1h7v1z"
        ></path>
      </svg>
      <v-tooltip activator="parent" anchor="start">News</v-tooltip>
    </div>

    <div class="Whatchlist" @click="WhatchlistFunc">
      <svg
        id="IconSvg"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
      >
        <path
          d="m29.5 11a4.5 4.5 0 0 1 4.5 4.5v14a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5v-14a4.5 4.5 0 0 1 4.5-4.5m0 1a3.5 3.5 0 0 0-3.5 3.5v14a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-14a3.5 3.5 0 0 0-3.5-3.5M15 17v-1h14v1zm0 4v-1h14v1zm0 4v-1h14v1zm0 4v-1h14v1z"
        ></path>
      </svg>

      <v-tooltip activator="parent" anchor="start">Whatchlist</v-tooltip>
    </div>

    <div class="Calender" @click="CalenderFunc">
      <svg
        id="IconSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
      >
        <path
          fill="currentcolor"
          d="m29.5 10a4.5 4.5 0 0 1 4.5 4.5v15a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5v-15a4.5 4.5 0 0 1 4.5-4.5m0 1a3.5 3.5 0 0 0-3.5 3.5v15a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-15a3.5 3.5 0 0 0-3.5-3.5M16 8h1v5h-1m11-5h1v5h-1M16 27a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m-6-7a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m-12-7a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2"
        ></path>
      </svg>

      <v-tooltip activator="parent" anchor="start">Calender</v-tooltip>
    </div>

    <!-- <div class="MyIdeas">


<svg id="IconSvg" xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m27 31.5a2.5 2.5 0 0 1-2.5 2.5h-6a2.5 2.5 0 0 1-2.5-2.5v-3.74c-2.41-1.74-4-5.04-4-8.26a9.5 9.5 0 0 1 19 0c0 3.21-1.6 6.52-4 8.26v3.74zM18.5 33h6a1.5 1.5 0 0 0 1.5-1.5v-4.27l.22-.14c2.25-1.51 3.78-4.6 3.78-7.59a8.5 8.5 0 1 0-17 0c0 3 1.53 6.08 3.78 7.58l.22.15v4.27a1.5 1.5 0 0 0 1.5 1.5zm-2-5v-1h10v1zm0 3v-1h10v1zm2.5 2.5h1v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1h1v1a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-1zm3-5.5h-1v-8h1zm-3-7v-1h5v1z"></path></svg>


          <v-tooltip
        activator="parent"
        anchor="start"
      >MyIdeas</v-tooltip>
  </div> -->

<hr class="HrRightSide"/>

    <div class="PubicChats" @click="PubicChatFunc">
      <svg
        id="IconSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
      >
        <path
          fill="currentcolor"
          d="m21.5 10a3.5 3.5 0 0 0-3.5 3.5v3h1v-3a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-1v1h1a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5zm-7 6a4.5 4.5 0 0 0-4.5 4.5v13.2l4.7-4.7h10.8a4.5 4.5 0 0 0 4.5-4.5v-4a4.5 4.5 0 0 0-4.5-4.5zm0 1h11a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5H14.3L11 31.3V20.5a3.5 3.5 0 0 1 3.5-3.5zm15 5v1h1a2.5 2.5 0 0 1 2.5 2.5v8.8L29.7 31h-8.2a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5h7.8l4.7 4.7V25.5a3.5 3.5 0 0 0-3.5-3.5z"
        ></path>
      </svg>

      <!-- <v-badge content="2" color="error"> </v-badge> -->
      <v-tooltip activator="parent" anchor="start">PubicChats</v-tooltip>
    </div>
    <div class="MiniGame" @click="MiniGameFunc">
      <svg
        id="IconSvgTotal"
        fill="currentcolor"
        enable-background="new 0 0 512 512"
        height="45"
        viewBox="0 0 512 512"
        width="45"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="m27.73 148.457v100.353l91.589 52.885v-105.804l-91.239-52.667c-.231 1.722-.35 3.47-.35 5.233z"
          />
          <path d="m149.319 319.018 91.681 52.937v-105.824l-91.681-52.923z" />
          <path d="m256 134.326-91.667 52.909 91.667 52.915 91.667-52.915z" />
          <path d="m271 371.955 91.681-52.937v-105.81l-91.681 52.923z" />
          <path
            d="m483.919 143.224-91.239 52.667v105.804l91.589-52.885v-100.353c.001-1.763-.118-3.511-.35-5.233z"
          />
          <path
            d="m464.539 114.271c-21.002-12.136-53.397-30.848-86.865-50.175l-91.668 52.91 91.666 52.909 91.273-52.687c-1.392-1.076-2.861-2.067-4.406-2.957z"
          />
          <path
            d="m347.673 46.774c-27.225-15.718-53.099-30.652-71.925-41.509-6.089-3.51-12.918-5.265-19.747-5.265-6.83 0-13.66 1.755-19.752 5.267-18.411 10.639-44.358 25.619-71.902 41.518l91.653 52.902z"
          />
          <path
            d="m134.342 64.105c-32.938 19.013-65.136 37.6-86.866 50.157-1.551.894-3.024 1.888-4.419 2.968l91.271 52.686 91.666-52.909z"
          />
          <path
            d="m27.73 366.482c0 14.073 7.561 27.172 19.731 34.187l.015.009c18.407 10.636 44.326 25.601 71.843 41.485v-105.826l-91.589-52.885z"
          />
          <path
            d="m149.319 459.48c32.965 19.029 65.197 37.635 86.944 50.201 1.536.885 3.119 1.657 4.737 2.319v-105.403l-91.681-52.938z"
          />
          <path
            d="m271 511.998c1.623-.663 3.211-1.437 4.751-2.325 22.261-12.839 54.378-31.377 86.929-50.172v-105.842l-91.68 52.938z"
          />
          <path
            d="m392.681 442.177c27.952-16.142 54.009-31.194 71.843-41.5 12.186-7.023 19.747-20.123 19.747-34.195v-83.031l-91.589 52.885v105.841z"
          />
        </g>
      </svg>
      <!-- <v-badge content="2" color="error"> </v-badge> -->
      <v-tooltip activator="parent" anchor="start">Mini Game</v-tooltip>
    </div>

    <!-- <div class="PrivateChats">
      <svg
        id="IconSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
      >
        <path
          fill="currentcolor"
          d="m14.5 10a4.5 4.5 0 0 0-4.5 4.5v17.2l4.7-4.7h10.8a4.5 4.5 0 0 0 4.5-4.5v-8a4.5 4.5 0 0 0-4.5-4.5zm0 1h11a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5H14.3L11 29.3V14.5a3.5 3.5 0 0 1 3.5-3.5zm15 5v1h1a2.5 2.5 0 0 1 2.5 2.5v12.8L29.7 29h-8.2a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5h7.8l4.7 4.7V19.5a3.5 3.5 0 0 0-3.5-3.5z"
        ></path>
      </svg>

      <v-tooltip activator="parent" anchor="start">PrivateChats</v-tooltip>
    </div> -->

    <!-- <div class="IdeasStream">
      <svg
        id="IconSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
      >
        <g fill="none" stroke="currentcolor">
          <path
            d="M19.5 33.5h6a2 2 0 0 0 2-2v-4c2.41-1.615 4-4.88 4-8a9 9 0 0 0-18 0c0 3.122 1.586 6.386 4 8v4a2 2 0 0 0 2 2zm-2-6h10m-10 3h10m-7 3v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1"
          ></path>
          <path stroke-linecap="square" d="M22.5 27.5v-7m-2 0h4"></path>
          <path
            d="M11.86 13.945A11.948 11.948 0 0 0 10.5 19.5c0 2.009.494 3.902 1.366 5.566M9.203 12.552A14.935 14.935 0 0 0 7.5 19.5c0 2.508.615 4.872 1.703 6.95M33.14 13.945A11.946 11.946 0 0 1 34.5 19.5c0 2.009-.494 3.902-1.366 5.566m2.663-12.514A14.935 14.935 0 0 1 37.5 19.5c0 2.508-.615 4.872-1.703 6.95"
          ></path>
        </g>
      </svg>

      <v-tooltip activator="parent" anchor="start">IdeasStream</v-tooltip>
    </div> -->

    <!-- <div class="Streem">
      <svg
        id="IconSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="45"
        fill="none"
      >
        <path
          fill="currentcolor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.25 23.02a8.76 8.76 0 0 1 3.6-7.09l-.51-.87a9.76 9.76 0 0 0-.05 15.88l.5-.88a8.76 8.76 0 0 1-3.54-7.04zm17.5 0c0 2.89-1.39 5.45-3.54 7.04l.5.87a9.76 9.76 0 0 0-.05-15.87l-.5.87a8.76 8.76 0 0 1 3.6 7.09zM9 23.02c0 4.83 2.44 9.1 6.16 11.61l-.5.87a15.01 15.01 0 0 1 .05-25l.5.87A14.01 14.01 0 0 0 9 23.02zm21.84 11.61l.5.87a15.01 15.01 0 0 0-.05-25l-.5.87a14.01 14.01 0 0 1 .05 23.26zm-9.2-8.03l5.6-3.23a1 1 0 0 0 0-1.74l-5.6-3.23a1 1 0 0 0-1.5.87v6.46a1 1 0 0 0 1.5.87zm-.5-7.33l5.6 3.23-5.6 3.23v-6.46z"
        ></path>
      </svg>

      <v-tooltip activator="parent" anchor="start">Streem</v-tooltip>
    </div> -->

    <div class="br">
      <br />
      <br />
      <br />
      <br />
      <br />
    
    </div>
    <div class="HelpDesck">
      <svg
        id="IconSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
      >
        <path
          fill="currentcolor"
          d="m18 18v-.5c0-1.2.6-2 1.5-2.7.8-.5 2-.8 3-.8s2.2.3 3 .8c.9.6 1.5 1.5 1.5 2.7a4 4 0 0 1-1.3 2.8l-2.3 2c-.3.3-.4.6-.4 1.2v.5h-1v-.5c0-.8.2-1.4.6-1.9l2.4-2c.6-.7 1-1.3 1-2.1a2 2 0 0 0-1-1.8c-.7-.5-1.6-.7-2.5-.7-1 0-1.8.2-2.5.7-.6.4-1 1-1 1.8v.5m3.5 8a1 1 0 0 0 0 5 1 1 0 0 0 0-5m0 1a1 1 0 0 1 0 3 1 1 0 0 1 0-3m0-17a1 1 0 0 0 0 25 1 1 0 0 0 0-25m0 1a1 1 0 0 1 0 23 1 1 0 0 1 0-23"
        ></path>
      </svg>
      <v-tooltip style="font-size: 10px" activator="parent" anchor="top"
        >Help Desck</v-tooltip
      >
    </div>
  </div>

  <Betslip class="notactive" :class="{ active: BetslipData }" />
  <NotificationSidebar class="notactive" :class="{ active: NotificData }" />
  <FavoritesSidebar class="notactive" :class="{ active: FavoritesData }" />
  <RecentSidebar class="notactive" :class="{ active: RecentData }" />
  <AlertSidebar class="notactive" :class="{ active: AlertData }" />
  <NewsSidebar class="notactive" :class="{ active: NewsData }" />
  <WhatchlistSidebar class="notactive" :class="{ active: WhatchlistData }" />
  <CalenderSidebar class="notactive" :class="{ active: CalenderData }" />
  <PubicChatsSidebar class="notactive" :class="{ active: PubicChatsData }" />

  <MiniGameSidebar class="notactive" :class="{ active: MiniGameData }" />
</template>

<script>
import Betslip from "./RightSidebarChild/Betslip.vue";
import NotificationSidebar from "./RightSidebarChild/NotificationSidebar.vue";
import FavoritesSidebar from "./RightSidebarChild/FavoritesSidebar.vue";
import RecentSidebar from "./RightSidebarChild/RecentSidebar.vue";
import AlertSidebar from "./RightSidebarChild/AlertSidebar.vue";
import NewsSidebar from "./RightSidebarChild/NewsSidebar.vue";
import WhatchlistSidebar from "./RightSidebarChild/WhatchlistSidebar.vue";
import CalenderSidebar from "./RightSidebarChild/CalenderSidebar.vue";
import PubicChatsSidebar from "./RightSidebarChild/PubicChatsSidebar.vue";
import MiniGameSidebar from "./RightSidebarChild/MiniGameSidebar.vue";
export default {
  name: "SidebarRight",
  data() {
    return {
      BetslipData: false,
      NotificData: false,
      FavoritesData: false,
      RecentData: false,
      AlertData: false,
      NewsData: false,
      WhatchlistData: false,
      CalenderData: false,
      PubicChatsData: false,
      MiniGameData: false,
    };
  },
  components: {
    Betslip,
    NotificationSidebar,
    FavoritesSidebar,
    RecentSidebar,
    AlertSidebar,
    NewsSidebar,
    WhatchlistSidebar,
    CalenderSidebar,
    PubicChatsSidebar,
    MiniGameSidebar,
  },

  methods: {
    BetslipFunc() {
      this.BetslipData = !this.BetslipData;
      this.NotificData = false;
      this.FavoritesData = false;
      this.RecentData = false;
      this.AlertData = false;
      this.NewsData = false;
      this.WhatchlistData = false;
      this.CalenderData = false;
      this.PubicChatsData = false;
      this.MiniGameData = false;
    },
    notifictionFunc() {
      this.NotificData = !this.NotificData;
      this.BetslipData = false;
      this.FavoritesData = false;
      this.RecentData = false;
      this.AlertData = false;
      this.NewsData = false;
      this.WhatchlistData = false;
      this.CalenderData = false;
      this.PubicChatsData = false;
      this.MiniGameData = false;
    },

    FavoritesFunc() {
      this.FavoritesData = !this.FavoritesData;
      this.BetslipData = false;
      this.NotificData = false;
      this.RecentData = false;
      this.AlertData = false;
      this.NewsData = false;
      this.WhatchlistData = false;
      this.CalenderData = false;
      this.PubicChatsData = false;
      this.MiniGameData = false;
    },
    RecentFunc() {
      this.RecentData = !this.RecentData;
      this.BetslipData = false;
      this.NotificData = false;
      this.FavoritesData = false;
      this.AlertData = false;
      this.NewsData = false;
      this.WhatchlistData = false;
      this.CalenderData = false;
      this.PubicChatsData = false;
      this.MiniGameData = false;
    },
    AlertFunc() {
      this.AlertData = !this.AlertData;
      this.BetslipData = false;
      this.NotificData = false;
      this.FavoritesData = false;
      this.RecentData = false;
      this.NewsData = false;
      this.WhatchlistData = false;
      this.CalenderData = false;
      this.PubicChatsData = false;
      this.MiniGameData = false;
    },
    NewsFunc() {
      this.NewsData = !this.NewsData;
      this.BetslipData = false;
      this.NotificData = false;
      this.FavoritesData = false;
      this.RecentData = false;
      this.AlertData = false;
      this.WhatchlistData = false;
      this.CalenderData = false;
      this.PubicChatsData = false;
      this.MiniGameData = false;
    },
    WhatchlistFunc() {
      this.WhatchlistData = !this.WhatchlistData;
      this.BetslipData = false;
      this.NotificData = false;
      this.FavoritesData = false;
      this.RecentData = false;
      this.AlertData = false;
      this.NewsData = false;
      this.CalenderData = false;
      this.PubicChatsData = false;
      this.MiniGameData = false;
    },
    CalenderFunc() {
      this.CalenderData = !this.CalenderData;
      this.BetslipData = false;
      this.NotificData = false;
      this.FavoritesData = false;
      this.RecentData = false;
      this.AlertData = false;
      this.NewsData = false;
      this.WhatchlistData = false;
      this.PubicChatsData = false;
      this.MiniGameData = false;
    },
    PubicChatFunc() {
      this.PubicChatsData = !this.PubicChatsData;
      this.BetslipData = false;
      this.NotificData = false;
      this.FavoritesData = false;
      this.RecentData = false;
      this.AlertData = false;
      this.NewsData = false;
      this.WhatchlistData = false;
      this.CalenderData = false;
      this.MiniGameData = false;
    },

    MiniGameFunc() {
      this.MiniGameData = !this.MiniGameData;
      this.BetslipData = false;
      this.NotificData = false;
      this.FavoritesData = false;
      this.RecentData = false;
      this.AlertData = false;
      this.NewsData = false;
      this.WhatchlistData = false;
      this.CalenderData = false;
      this.PubicChatsData = false;
    },
  },
};
</script>

<style scoped>
.HrRightSide {
    margin-bottom: 10px;
  margin-top: 10px;
  border-color: #2a2e39;
  opacity: 1;
  height: 2px;
  border: none;
}
.alert {
  padding: 0;
  margin: 0;
  border: 0;
  position: sticky;
}
.notactive {
  display: none;
}
.active {
  display: flex;
}
.rightSidebar {
  position: fixed;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  right: 0;
  width: 45px;
  background: #131722;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-left: 1px solid #2a2e39;
  overflow: hidden;
  /* height: 100vh; */
  scroll-behavior: smooth;
  padding-bottom: 50px;
  top: -70px;
  padding-top: 10px;
}
.Watchlist {
  margin-top: 10px;
  margin-right: 5px;
}
#IconSvg {
  cursor: pointer;
  color: #787b86;
  border-radius: 5px;
}
#IconSvg:hover {
  color: white;
}

#IconSvgTotal {
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: #787b86;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}
#IconSvgTotal:hover {
  color: white;
}
#IconSvgTotal:hover {
  background-color: #2a2e39;
  border-radius: 5px;
}
#IconSvg:hover {
  background-color: #2a2e39;
  border-radius: 5px;
}

.v-theme--light {
  inset: auto auto calc(100% - 3px) calc(100% - 2px) !important;
}

.v-badge__badge {
  align-items: center;
  border-radius: 10px;
  display: flex;
  font-size: 0.75rem;
  font-weight: 500;
  height: 10px;
  justify-content: center;
  min-width: 10px;
  padding: 4px;
  pointer-events: auto;
  position: absolute;
  top: 3px !important;
  left: -3px !important;
  text-align: center;
  text-indent: 0;
  transition: 0.225s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

}
</style>