<template>
  <div id="app">
    <div class="container-fluid">
      <div class='row'>
        <div class="root">
          <div class="left-panel col-md-3">
            <host-list></host-list>
          </div>
          <div class="mid-panel col-md-6">
            <output-view></output-view>
            <terminal></terminal>
          </div>
          <div class="right-panel col-md-3">
              <command-list></command-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HostsList from './components/HostsList.vue';
import CommandList from './components/CommandList.vue';
import Output from './components/Output.vue';
import Terminal from './components/Terminal.vue';

export default {
  name: 'app',
  components: {
    'host-list': HostsList,
    'command-list': CommandList,
    'output-view': Output,
    'terminal': Terminal
  }
}
</script>

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
