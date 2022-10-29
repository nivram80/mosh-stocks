<script>
  import { onMount } from "svelte";
  import { apiService } from "./api/service";
  import { buildFormPayload } from "./utils";

  let accounts = [];
  let formEl;

  onMount(() => {
    getAccounts();
  });

  const onDelete = async (id) => {
    console.log('deleting account...')
    // try {
    //   await apiService('accountsDelete', {id: id});
    //   getAccounts();
    // } catch (err) {
    //   console.log(err);
    // }
  }

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
      accounts = resp;
    } catch (err) {
      console.log(err);
    }
  }
</script>

<main>
  <form on:submit|preventDefault={onSubmit} bind:this={formEl} autocomplete="off">
    <label for="name">Account Name</label><br>
    <input type="text" name="name" id="name" autocomplete="off" /><br>
    <button type="submit">Submit</button>
  </form>

  <ul class="accounts">
    {#each accounts as account (account.id)}
      <li on:click={() => onDelete(account.id)} on:keypress={() => onDelete(account.id)}>{account.name}</li>
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
