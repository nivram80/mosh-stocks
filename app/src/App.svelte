<script>
  import { onMount } from "svelte";
  import { apiService } from "./api/service";
  import { buildFormPayload } from "./utils";

  let accounts = [];
  let formEl;

  onMount(() => {
    getAccounts();
  });

  const onSubmit = async (e) => {
    const payload = buildFormPayload(e.target)
    try {
      await apiService('accountsCreate', payload);
      formEl.reset();
      getAccounts();
    } catch (err) {
      console.log(err);
    }
  }

  const getAccounts = async () => {
    try {
      const resp = await apiService('accountsList');
      accounts = await resp.json();
    } catch (err) {
      console.log(err);
    }
  }
</script>

<main>
  <form on:submit|preventDefault={onSubmit} bind:this={formEl}>
    <label for="accountName">Account Name</label><br>
    <input type="text" name="name" id="accountName" /><br>
    <button type="submit">Submit</button>
  </form>

  <ul class="accounts">
    {#each accounts as account (account.id)}
      <li>{account.name}</li>
    {/each}
  </ul>
</main>

<style>
 main {
  display: flex;
 }
 button {
  margin-top: 4px;
 }
</style>
