<script>
  import { onMount } from "svelte";
  import { countryDataStore, isLoading } from "../../stores/countryDataStore";
  import CountryTable from "../../lib/components/chart/CountryTable.svelte";

  onMount(async () => {
    try {
      isLoading.set(true);
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      countryDataStore.set(data);
      isLoading.set(false);
    } catch (error) {
      isLoading.set(false);
      console.error("Something went wront", error);
    }
  });
</script>

<main>
  <div class="mx-20 mt-20">
    <CountryTable {countryDataStore} {isLoading} />
  </div>
  <!-- <h1>Country Data</h1>
  {#if $isLoading}
    <p>Loading...</p>
  {:else}
    <ul>
      {#each $countryDataStore as country, index (index)}
        <li>{country.name.common}</li>
      {/each}
    </ul>
  {/if} -->
</main>
