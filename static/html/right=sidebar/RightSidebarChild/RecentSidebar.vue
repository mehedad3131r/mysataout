<template>
  <div class="RecentSidebar">
    <h1>Recent</h1>
  </div>
</template>

<script>
export default {
  name: "RecentSidebar",
};
</script>

<style scoped>
.RecentSidebar {
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
}
h1 {
  color: white;
}
</style>