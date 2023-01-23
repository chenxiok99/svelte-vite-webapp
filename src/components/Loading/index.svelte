<script lang="ts">
  import LoadIcon from "./LoadIcon.svelte";

  export let hasBg: boolean = true;
</script>

<div
  class={`absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center ${
    hasBg ? "bg-white" : ""
  }`}
>
  <LoadIcon class={"w-11 h-11"} />
</div>
