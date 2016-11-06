<template>
  <div class="root">
    <div class="hosts col-md-3">
      <div class="">
        <h2 class='text-center'>Hosts</h2>
        <ul>
          <li v-for="host in hosts">
            <input type="checkbox" /> {{ host.hostname }} - {{ host.ip }} - {{ host.port }}
          </li>
        </ul>
      </div>
    </div>
    <div class="output col-md-6">
      <div class="">
        <h2 class="text-center">Output</h2>
      </div>
    </div>
    <div class="terminal col-md-6">
      <div class="">
        <h2 class="text-center">Terminal</h2>
      </div>
    </div>
    <div class="commands col-md-3">
      <div class="">
        <h2 class="text-center">Commands</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      this.getHosts()
    },
    data () {
      return {
        hosts: {}
      }
    },
    methods: {
      getHosts () {
        this.$http.get('http://localhost:5000/rspet/api/v1.0/hosts').then((response) => {
          this.hosts = response.body.hosts
          console.log(this.hosts)
        })
      }
    }
  }
</script>

<style>
  .hosts{
    background-color: #CCC;
    height: 100vh;
  }
  .hosts ul {
    list-style: none;
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
