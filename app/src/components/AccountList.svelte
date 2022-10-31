<script>
  import { onMount } from "svelte";
  import { apiService } from "../api/service";

  let accounts = [];

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
</script>

<div class="accounts">
  {#each accounts as account (account.id)}
    <div class="account">
      <div class={`account-badge ${account.name === 'Yoink' ? 'selected' : ''}`}></div>
      <div class="account-name">{account.name}</div>
    </div>
  {/each}
</div>

<style>
  .account {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
    margin-bottom: 4px;
    border: 1px solid rgb(117, 116, 122);
    border-radius: 4px;
    cursor: pointer;
  }
  .account-badge {
    width: 10px;
    height: 100%;
    background-color: transparent;
  }
  .account-badge.selected {
    background-color: var(--mosh-primary-color)
  }
  .account-name {
    margin-left: 8px;
  }
</style>