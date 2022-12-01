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

  const onAddAccount = () => {
    selectedAccount = {};
  }

  const onDelete = async (a) => {
    if (confirm(`Are you sure you want to delete the account: ${a.name}`)) {
      try {
        await apiService('accountsDelete', {id: a.id});
        getAccounts();
      } catch (err) {
        console.log(err);
      }
    }
  }

  const onSelect = (a) => {
    selectedAccount = a;
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
  {#if Object.keys(selectedAccount).length > 0}
    <button class="secondary" on:click={onAddAccount} on:input={onAddAccount}>+ Add Account</button>
  {/if}
</div>

<div class="column column2">
  {#if Object.keys(selectedAccount).length > 0}
    <h2>Edit Account</h2>
    <form on:submit|preventDefault={(e) => onSubmit(e, true)} bind:this={formEl} autocomplete="off">
      <label for="name">Account Name</label><br>
      <input type="text" name="name" id="name" minlength="2" maxlength="30" required autocomplete="off" value={selectedAccount.name} /><br>
      <input type="hidden" name="id" value={selectedAccount.id} />
      <div class="actions">
        <button type="submit">Submit</button>
        <button type="submit" class="danger" on:click={() => onDelete(selectedAccount)} on:keypress={() => onDelete(selectedAccount)}>Delete</button>
      </div>
  </form>
  {:else}
    <h2>Add Account</h2>
    <form on:submit|preventDefault={onSubmit} bind:this={formEl} autocomplete="off">
      <label for="name">Account Name</label><br>
      <input type="text" name="name" id="name" minlength="2" maxlength="30" required autocomplete="off" /><br>
      <button type="submit">Submit</button>
    </form>
  {/if}
</div>

<style> 
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    margin-top: 4px;
  }
 </style>