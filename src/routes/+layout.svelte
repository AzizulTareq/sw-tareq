<script>
  import "../app.css";
  import { page } from "$app/stores";
</script>

<main>
  <div>
    {#if $page.url.pathname != "/"}
      <a
        class="fixed px-3 py-2 top-2 left-6 p-2 rounded bg-rose-600 text-sm text-white font-semibold shadow-lg z-10"
        href="/">Home</a
      >
    {/if}
  </div>

  <slot />
</main>
