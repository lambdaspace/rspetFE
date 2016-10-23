<template>
  <div class="hosts">
Super cool

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

</style>
