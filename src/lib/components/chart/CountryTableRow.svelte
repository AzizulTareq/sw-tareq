<script>
  export let country;
</script>

<tr class="border-b">
  <td class="whitespace-nowrap px-6 py-2 font-medium">
    <img src={country.flags.png} alt="flat" class="w-10 h-6" />
  </td>
  <td class="px-6 py-4">{country.name.common ? country.name.common : "--"}</td>
  <td class="px-6 py-4">{country.population ? country.population : "--"}</td>
  <td class="px-6 py-4 text-center">{country.cioc ? country.cioc : "--"}</td>
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
