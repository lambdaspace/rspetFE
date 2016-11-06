<template>
  <div id="app">
    <div class="container-fluid">
      <div class='row'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
  h2{
    margin: 0;
  }
  .output{
    color: #00CD00;
    background-color: #000000;
    height: 60vh;
  }
  .terminal{
    color: #00CD00;
    background-color: #000000;
    height: 40vh;
  }
  .commands{
    background-color: #CCC;
    height: 100vh;
  }
</style>
