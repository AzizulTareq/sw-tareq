<script>
  import { onMount } from "svelte";
  import { countryDataStore, isLoading } from "../../stores/countryDataStore";
  import CountryTable from "../../lib/components/chart/CountryTable.svelte";
  import PolarAreaChart from "../../lib/components/chart/PolarAreaChart.svelte";

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
  <div class="lg:grid lg:grid-cols-3 gap-6 mx-12 mt-12">
    <div class="col-span-2">
      <CountryTable />
    </div>
    <div>
      <PolarAreaChart />
    </div>
  </div>
</main>
