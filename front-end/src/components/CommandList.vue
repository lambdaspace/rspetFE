<template>
  <div class="commands">
    <h2 class="text-center">Commands</h2>
    <ul>
      <li  v-for="(command, index) in commands" class="">
          <a href="#" :title="command.help"> {{ command.command }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'

export default {
  created () {
    this.getCommands()
  },
  data () {
    return {
      commands: {},
    }
  },
  methods: {
    getCommands() {
      this.$http.get('http://127.0.0.1:5000/rspet/api/v1.1/help?state=' + this.hostState)
      .then((response) => {
        this.commands = response.body.commands
      })
      .catch((response) => {
        console.log(response);
      });
    }
  },
  computed: {
    hostState () {
      return store.state.hostState;
    }
  },
  watch: {
    hostState: function() {
      this.getCommands()
    }
  }
}
</script>
