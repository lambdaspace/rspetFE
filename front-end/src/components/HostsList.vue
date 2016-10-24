<template>
  <div class="hosts">
    <div class="container">
      <ul>
        <li v-for="host in hosts">
          <input type="checkbox" /> {{ host.hostname }} - {{ host.ip }} - {{ host.port }}
        </li>
      </ul>
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
  .container { border:2px solid #ccc; width:300px; height: 200px; overflow-y: scroll; }
</style>
