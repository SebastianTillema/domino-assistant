<script lang="ts">
  import { onMount } from "svelte";

  let canvas;
  let context;

  onMount(() => {
    context = canvas.getContext("2d");
    context.fillStyle = "lightgray";
    context.fillRect(0, 0, canvas.width, canvas.height);
  });

  export function playTile(tile) {
    console.log("board playTile " + tile);
    context.fillStyle = "red";
    context.fillRect(0, 0, canvas.width / 2, canvas.height / 2);
  }
</script>

<canvas bind:this={canvas} style="width: {800}px; height: {600}px;" />
