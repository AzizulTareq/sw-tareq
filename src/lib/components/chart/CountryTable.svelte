<script>
  import {
    countryDataStore,
    isLoading,
  } from "../../../stores/countryDataStore";
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
                <div class="flex justify-center items-center">Loading...</div>
              {:else}
                {#each $countryDataStore as country, index (index)}
                  <tr class="border-b">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">
                      <img
                        src={country.flags.png}
                        alt="flat"
                        class="w-10 h-6"
                      />
                    </td>
                    <td class="px-6 py-4"
                      >{country.name.common ? country.name.common : "--"}</td
                    >
                    <td class="px-6 py-4"
                      >{country.population ? country.population : "--"}</td
                    >
                    <td class="px-6 py-4 text-center"
                      >{country.cioc ? country.cioc : "--"}</td
                    >
                    <td class="px-6 py-4 text-center">
                      {#if country.unMember}
                        <span
                          class="bg-zinc-300 px-3 py-1 w-8 h-5 rounded font-semibold text-white"
                          >Yes</span
                        >
                      {:else}
                        <span
                          class="bg-zinc-500 px-3 py-1 w-8 h-5 rounded font-semibold text-white"
                          >No</span
                        >
                      {/if}</td
                    >
                    <td class="px-6 py-4 text-center"
                      >{country.currencies
                        ? Object.keys(country.currencies).join(", ")
                        : "--"}</td
                    >
                    <td class="px-6 py-4"
                      >{country.languages
                        ? Object.values(country.languages).join(", ")
                        : "--"}</td
                    >
                  </tr>
                {/each}
              {/if}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>
