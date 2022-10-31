<script>
  import { apiService } from "../api/service";
  import { buildFormPayload } from "../utils";
  import AccountList from "./AccountList.svelte";
  import PositionList from "./PositionList.svelte";

  let formEl;

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
      // getAccounts();
    } catch (err) {
      console.log(err);
    }
  }
</script>

<main>
  <div class="column column1">
    <AccountList />
  </div>
  <div class="column column2">
    <PositionList />
    <!-- <form on:submit|preventDefault={onSubmit} bind:this={formEl} autocomplete="off">
      <label for="name">Account Name</label><br>
      <input type="text" name="name" id="name" autocomplete="off" /><br>
      <button type="submit">Submit</button>
    </form> -->
  </div>
</main>

<style>
 main {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
 }
 .column1 {
  width: 150px;
  padding-right: 2em;
 }
 .column2 {
  width: auto;
 }
 button {
  margin-top: 4px;
 }
</style>
