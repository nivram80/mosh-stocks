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
