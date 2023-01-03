<template>
  <div class="TextCenterScroll">
  
  <!-- <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sequi voluptates labore pariatur quae in ducimus dolor id et cumque veniam iure laudantium accusamus expedita officia delectus! Corrupti, dignissimos nulla!</h5> -->
 
 </div>
</template>

<script>
export default {
name:"TextCenterMyBet"
}
</script>

<style scoped>
*{
    direction: ltr;
}
.TextCenterScroll{
   background-color: #131722;
  height: 520px;
  overflow-y: scroll;
}
::-webkit-scrollbar-track {
  background: #2a2e39; 
  direction: rtl;
}
::-webkit-scrollbar {
  width: 10px;
   direction: rtl;
}
h5{
    color: white;
}
</style>