<template>
  <div class="hosts">
    <h2 class='text-center'>Hosts</h2>
    <ul>
      <li v-for="(host, index) in hosts">
        <label><input type="checkbox" name="host" :value="host.id" v-model="selectedHosts" /> {{ host.hostname }} - {{ host.ip }} - {{ host.port }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'

export default {
  created () {
    this.getHosts()
  },
  data () {
    return {
      hosts: {},
      selectedHosts: []
    }
  },
  methods: {
    getHosts() {
      this.$http.get('http://localhost:5000/rspet/api/v1.0/hosts')
      .then((response) => {
        this.hosts = response.body.hosts;
      })
      .catch((response) => {
        console.log(response);
      });
    }
  },
  watch: {
    selectedHosts: function(hosts) {
      if (hosts.length === 0) {
        store.commit('setHostState', "basic");
      }
      else if (hosts.length === 1) {
          store.commit('setHostState', "connected");
      } else {
        store.commit('setHostState', "multiple");
      }
      store.commit('setCurrentHosts', hosts);
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
