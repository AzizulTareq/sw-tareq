<script>
  import Chart from "chart.js/auto";
  import { countryDataStore } from "../../../stores/countryDataStore";
  import { onMount } from "svelte";

  let ctx;
  let countries = [];
  countryDataStore.subscribe((data) => (countries = data));

  const data = countries
    ?.map((country) => ({
      name: country.name.common,
      population: country.population,
    }))
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);

  let labels = data.map((population) => population.name);
  let populationData = data.map((population) => population.population);

  const backgroundColors = [
    "#3F4343",
    "#595F5F",
    "#666D6D",
    "#929393",
    "#AFB4B4",
    "#C6C9CA",
    "#79898A",
    "#94A0A1",
    "#DCE0E1",
  ];

  onMount(async () => {
    ctx = document.getElementById("polar-chart");
    new Chart(ctx, {
      type: "polarArea",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Population",
            backgroundColor: backgroundColors,
            data: populationData,
          },
        ],
      },
    });
  });
</script>

<main>
  <div class="border-[1px] border-gray-300 rounded-lg bg-white mt-2">
    <div class="px-6 py-4 border-b-2">
      <p class="font-bold">Countries</p>
    </div>
    <canvas id="polar-chart" />
  </div>
</main>
