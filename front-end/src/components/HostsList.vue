<template>
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
</style>
