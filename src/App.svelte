<script lang="ts">
  import { generateTiles, Tile } from "./lib/Domino/tile";
  import Board from "./lib/Domino/Board.svelte";
  import Hand from "./lib/Domino/Hand.svelte";
  
  let boardPlayTile;
  let tiles: Tile[] = generateTiles();
  
  function onHandPlayTile() {
		boardPlayTile();
	}

</script>

<main>
  <h1>Domino</h1>
  <Board bind:playTile={boardPlayTile}/>
  <Hand handTiles={tiles.slice(0, 14)} on:playTile={onHandPlayTile}/>
</main>

<style>
</style>
