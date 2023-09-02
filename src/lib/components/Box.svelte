<script>
  import Mountain from "./Mountain.svelte";

  export let backgroundColor = "";
  export let rowColDetais = "";
  export let hiddenInSmallDevice = false;
  export let mountain = false;
  export let extraClass = "";
</script>

<div
  class={`${backgroundColor} ${rowColDetais} ${
    hiddenInSmallDevice && ` hidden md:block ${extraClass}`
  }`}
>
  {#if mountain}
    <Mountain />
  {/if}
</div>
