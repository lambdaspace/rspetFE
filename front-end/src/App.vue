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
    padding-right: 0px;
    padding-left: .6em;
  }
  .mid-panel{
    background-color: #CCC;
    height: 100vh;
    padding: 0 .6em;
  }
  .right-panel{
    background-color: #CCC;
    height: 100vh;
    padding-left: 0px;
    padding-right: .6em;
  }
  .output{
    color: #00CD00;
    background-color: #000000;
    height: 59vh;
    border-radius: 5px;
    border: 2px solid #CCC;
    padding-top: .5em;
  }
  .terminal{
    color: #00CD00;
    background-color: #000000;
    height: 39vh;
    border-radius: 5px;
    border: 2px solid #CCC;
    padding-top: .5em;
    margin-top: 1vh;
  }
  .terminal input{
    background-color: #000000;
    border: 0;
    width: 100%;
  }
  .commands{
    background-color: #a3a3a3;
    height: 100vh;
    border-radius: 5px;
    border: 2px solid #CCC;
    padding-top: .5em;
  }
</style>
