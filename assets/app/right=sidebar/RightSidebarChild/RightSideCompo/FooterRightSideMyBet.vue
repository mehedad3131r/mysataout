<template>
  <div class="FooterRightSide">

    <div class="btnB">
        <button class="PlaceSingle">View All</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterRightSideMyBet",
};
</script>

<style scoped>
.FooterRightSide {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  color: white;
  padding-top: 20px;
  background-color: #2a2e39;
}
.TotalStakeChi {
 display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding-bottom: 10px;
    border-bottom: 3px solid #2a2e39;
}
.Tleft {
  display: flex;
  justify-content: flex-end;
}
.Tright {
  display: flex;
  justify-content: space-between;
}
.btnB {
  margin: auto;
}
#CurencyBit {
  width: 15px;
  height: 15px;
}
.Curency{
    font-size: 12px;
        position: absolute;
    right: 20px;
}
.Tleft h3{
    font-size: 12px;
        margin-left: 10px;
}
.PlaceSingle{
       background-color: #2962ff;
    color: white;
    padding: 10px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    width: 220px;
    font-weight: 500;
    letter-spacing: 0.5px;
    font-size: 13px;

}
.PlaceSingle:hover{
    background-color: white;
    color: #2962ff;
}
</style>