<script>
  import { onMount } from "svelte";
  import { apiService } from "../api/service";
  import { buildFormPayload } from "../utils";

  let accounts = [];
  let selectedAccount = {};
  let formEl;

  onMount(() => {
    getAccounts();
  });

  const getAccounts = async () => {
    try {
      const resp = await apiService('accountsList');
      accounts = resp;
    } catch (err) {
      console.log(err);
    }
  }

  const onDelete = async (id) => {
    console.log('deleting account...')
    // try {
    //   await apiService('accountsDelete', {id: id});
    //   getAccounts();
    // } catch (err) {
    //   console.log(err);
    // }
  }

  const onSelect = (a) => {
    selectedAccount = a;
    console.log('selectedAccount: ', selectedAccount)
  }

  const onSubmit = async (e, edit = false) => {
    const payload = buildFormPayload(e.target)
    try {
      if (edit) {
        await apiService('accountsEdit', {id: payload.id, name: payload.name});
        selectedAccount = {};
      } else {
        await apiService('accountsCreate', payload);
      }
      formEl.reset();
      getAccounts();
    } catch (err) {
      console.log(err);
    }
  }
</script>

<div class="column column1">
  <h2>Accounts</h2>
  <div class="accounts">
    {#each accounts as account (account.id)}
      <div class="account" on:click={() => onSelect(account)} on:keypress={() => onSelect(account)}>
        <div class={`account-badge ${account.name === selectedAccount.name ? 'selected' : ''}`}></div>
        <div class="account-name">{account.name}</div>
      </div>
    {/each}
  </div>
</div>

<div class="column column2">
  {#if Object.keys(selectedAccount).length > 0}
    <h2>Edit Account</h2>
    <form on:submit|preventDefault={(e) => onSubmit(e, true)} bind:this={formEl} autocomplete="off">
      <label for="name">Account Name</label><br>
      <input type="text" name="name" id="name" autocomplete="off" value={selectedAccount.name} /><br>
      <input type="hidden" name="id" value={selectedAccount.id} />
      <button type="submit">Submit</button>
    </form>
  {:else}
    <h2>Add Account</h2>
    <form on:submit|preventDefault={onSubmit} bind:this={formEl} autocomplete="off">
      <label for="name">Account Name</label><br>
      <input type="text" name="name" id="name" autocomplete="off" /><br>
      <button type="submit">Submit</button>
    </form>
  {/if}
</div>

<style> 
  button {
    margin-top: 4px;
  }
 </style>