<template>
  <div class="hosts">
    <h2 class='text-center'> {{ host.hostname }} </h2>
        <div class="">
          IP: {{ host.ip }}
        </div>
        <div class="">
          Port: {{ host.port }}
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
