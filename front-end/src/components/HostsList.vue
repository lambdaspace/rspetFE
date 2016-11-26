<template>
  <div class="root">
    <div class="left-panel col-md-3">
      <div class="hosts">
        <h2 class='text-center'>Hosts</h2>
        <ul>
          <li v-for="host in hosts">
            <label><input type="checkbox" /> {{ host.hostname }} - {{ host.ip }} - {{ host.port }}</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="mid-panel col-md-6">
      <div class="output">
        <h2 class="text-center">Output</h2>
      </div>

      <div class="terminal">
        <h2 class="text-center">Terminal</h2>
        <input type="text">
      </div>
    </div>
    <div class="right-panel col-md-3">
      <div class="commands">
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
        this.$http.get('http://localhost:5000/rspet/api/v1.0/hosts')
        .then((response) => {
          this.hosts = response.body.hosts
          console.log(this.hosts)
        })
        .catch((response) => {
          console.log(response);
        });
      }
    }
  }
</script>

<style>
  .hosts{
    background-color: #a3a3a3;
    height: 100vh;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #CCC;
    padding-top: .5em;
  }
  .hosts ul {
    list-style: none;
  }
</style>
