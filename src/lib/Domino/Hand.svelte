<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Tile } from "./tile";
  export let handTiles: Tile[] = [];

  const dispatch = createEventDispatcher();
  function playTile(tile) {
    handTiles = handTiles.filter((i) => i !== tile);
    dispatch("handPlayTile", {
      tile: tile,
    });
  }
</script>

<ul>
  {#each handTiles as tile}
    <button on:click={() => playTile(tile)}>{tile}</button>
  {/each}
</ul>

<style>
  ul {
    columns: 7;
    background-color: gray;
  }
</style>
