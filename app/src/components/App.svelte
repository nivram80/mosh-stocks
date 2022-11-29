<script>
  import { onMount } from "svelte";
  import page from "page";
  import Positions from "./Positions.svelte";
  import Accounts from "./Accounts.svelte";

  let ctx = '';
  let route = '';

  onMount(() => {
    initRoutes();
  })

  const initRoutes = () => {
    page.base('/#');
    page('/positions', (ctx) => load('positions', ctx));
    page('/accounts', (ctx) => load('accounts', ctx));
    page();
  }

  const load = (r, c) => {
    route = r;
    ctx = c
  }
</script>

<main>
  {#if route === 'positions'}
    <Positions />
  {:else if route === 'accounts'}
    <Accounts />
  {/if}
</main>

<style>
 main {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
 }
</style>
