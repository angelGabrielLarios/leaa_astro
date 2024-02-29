<script lang="ts">
    let counter = 0;

    function addCounter() {
        counter += 1;
    }
</script>

<button on:click={addCounter} class="btn bg-orange-500 text-gray-100">
    counter svelte {counter}
</button>
