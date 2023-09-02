<script>
  export let backgroundColor = "";
  export let rowColDetais = "";
  export let hiddenInSmallDevice = false;
  export let extraClass = "";
</script>

<div
  class={`${backgroundColor} ${rowColDetais} ${
    hiddenInSmallDevice && ` hidden md:block ${extraClass}`
  }`}
></div>
