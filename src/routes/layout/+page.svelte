<script>
  import Box from "../../lib/components/Box.svelte";
</script>

<div>
  <div class="grid grid-rows-6 md:grid-cols-12 grid-cols-4 grid h-screen">
    <Box
      backgroundColor={"bg-blue-400"}
      rowColDetais={`row-span-3 col-span-2`}
      hiddenInSmallDevice={true}
    />
    <Box
      backgroundColor={"bg-teal-400"}
      rowColDetais={`row-span-2 col-span-2 row-start-4`}
      hiddenInSmallDevice={true}
    />
    <Box
      backgroundColor={"bg-fuchsia-400"}
      rowColDetais={`row-span-1 col-span-6 row-start-6`}
      hiddenInSmallDevice={true}
    />
    <Box
      backgroundColor={"bg-rose-100"}
      rowColDetais={`md:row-span-5 row-span-3 md:row-start-1 col-span-4 md:col-start-3`}
    />
    <Box
      backgroundColor={"bg-cyan-400"}
      rowColDetais={`row-span-2 col-span-6`}
      hiddenInSmallDevice={true}
    />
    <Box
      backgroundColor={"bg-yellow-100"}
      rowColDetais={`row-span-2 md:row-span-4 row-span-3 col-span-4`}
      mountain={true}
    />
    <Box
      backgroundColor={"bg-emerald-400"}
      rowColDetais={`row-span-4 col-span-2`}
      hiddenInSmallDevice={true}
    />
  </div>
</div>
