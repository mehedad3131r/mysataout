<template>
  <div class="dropdown">
    <button @click="myFunction" class="dropbtn">
      <svg
        fill="currentColor"
        version="1.1"
        id="Changes"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 240.835 240.835"
        style="enable-background: new 0 0 240.835 240.835"
        xml:space="preserve"
      >
        <g>
          <path
            id="Expand_Less"
            d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155
		c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155
		L129.007,57.819z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
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
      No Odds Changes Accepted
    </button>
    <div id="myDropdown" class="dropdown-content">
      <a href="">Accept Any Odds</a>
      <a href="">Accept Only Higher Odds</a>
      <a href="">No Odds Changes Accepted</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drowpp",
  methods: {
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
  },
};
</script>

<style scoped>
.dropbtn {
  background-color: #131722;
  color: white;
  padding: 5px;
  font-size: 13px;
  border: none;
  cursor: pointer;
  margin: 5px;
}

.dropbtn:hover,
.dropbtn:focus {
  /* background-color: #2a2e39; */
  color: #d1d4dc !important;
}

.dropdown {
  position: relative;
  display: inline-block;
  float: left;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #131722;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #cecece;
  padding: 5px 10px;
  text-decoration: none;
  display: flex;
  font-size: 12px;
}

.dropdown a:hover {
  /* background-color: #2a2e39; */
  color: #2962ff !important;
}

.show {
  display: flex;
  flex-direction: column;
  direction: ltr;
}
#Changes {
  width: 10px;
  height: 10px;
  color: white;
  margin-left: 15px;
}
</style>