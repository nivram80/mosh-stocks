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
    page('/accounts', (ctx) => load('accounts', ctx));
    page('/positions', (ctx) => load('positions', ctx));
    page();
  }

  const load = (r, c) => {
    route = r;
    ctx = c
  }
</script>

<header>
  <nav>
    <a href="/#/accounts">Accounts</a>
    <a href="/#/positions">Positions</a>
  </nav>
</header>
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
header {
  width: 100%;
  height: 50px;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
}
nav a {
  margin-right: 15px;
}
</style>
