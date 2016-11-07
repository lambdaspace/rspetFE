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
  .left-panel{
    background-color: #CCC;
    height: 100vh;
  }
  .mid-panel{
    background-color: #CCC;
    height: 100vh;
  }
  .right-panel{
    background-color: #CCC;
    height: 100vh;
  }
  .output{
    color: #00CD00;
    background-color: #000000;
    height: 60vh;
    border-radius: 25px;
    border: 2px solid #CCC;
  }
  .terminal{
    color: #00CD00;
    background-color: #000000;
    height: 40vh;
    border-radius: 25px;
    border: 2px solid #CCC;
  }
  .terminal input{
    background-color: #000000;
    border: 0;
    width: 100%;
  }
  .commands{
    background-color: #a3a3a3;
    height: 100vh;
    border-radius: 25px;
    border: 2px solid #CCC;
  }
</style>
