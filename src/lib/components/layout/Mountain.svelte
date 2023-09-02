<div class="grid w-full h-full place-items-center">
  <div class="blue_bg">
    <div class="circle">
      <div class="mountain" />
    </div>
  </div>
</div>

<style>
  .blue_bg {
    width: 300px;
    height: 300px;
    background-color: #293462;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 200px;
    height: 200px;
    background-color: rgb(254 249 195);
    overflow: hidden;
    border-radius: 100%;
  }

  .mountain {
    height: 100%;
    width: 100%;
    background-color: #fe5f55;
    clip-path: polygon(
      35% 70%,
      70% 30%,
      100% 60%,
      100% 100%,
      0 100%,
      0 80%,
      20% 58%
    );
  }
</style>
