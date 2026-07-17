<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MenuBar"
})
</script>

<template>
<nav>
  <h1>Giacomo Boehlke</h1>
  <div>
    <a>Referenzen</a>
    <a>Showreel</a>
    <a>Ueber</a>
    <a>Kontakt</a>
  </div>
  <div>
    <button>de/en</button>
    <button>light/dark</button>
  </div>

</nav>

</template>

<style scoped>
nav{
  height: var(--space-8);
  border-bottom: 2px solid;
  display: flex;
  justify-content:flex-end;
  align-items: center;
  div:first-of-type{
    margin-left:auto;
  }
  div:last-of-type{
    padding-left:var(--space-4);
    border-left: 2px solid;
  }
  a, button{
    margin-right: var(--space-4);
  }
}
</style>