<script>
  import {
    countryDataStore,
    isLoading,
  } from "../../../stores/countryDataStore";
  import CountryTableRow from "./CountryTableRow.svelte";

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
      fetchData();
    }
  };
</script>

<main>
  <div class="flex flex-col">
    <div class="rounded-lg overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 sm:px-6 lg:px-8">
        <div
          class="border-[1px] border-gray-300 rounded-lg overflow-hidden overflow-x-auto"
        >
          <table class="min-w-full text-left">
            <thead class="border-b font-semibold">
              <tr>
                <th scope="col" class="px-6 py-4 whitespace-nowrap">Flag</th>
                <th scope="col" class="px-6 py-4 whitespace-nowrap">Name</th>
                <th scope="col" class="px-6 py-4 whitespace-nowrap"
                  >Population</th
                >
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-center"
                  >CIOC</th
                >
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-center"
                  >UN Member Status</th
                >
                <th scope="col" class="px-6 py-4 whitespace-nowrap text-center"
                  >Currencies</th
                >
                <th scope="col" class="px-6 py-4 whitespace-nowrap"
                  >Languages</th
                >
              </tr>
            </thead>
            <tbody>
              {#if $isLoading}
                <tr>
                  <td class="px-6 py-4 text-center">Loading..</td>
                </tr>
              {:else}
                {#each $countryDataStore as country, index (index)}
                  <CountryTableRow {country} />
                {/each}
              {/if}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>
