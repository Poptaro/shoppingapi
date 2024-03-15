<script>
    import Header from '$lib/components/header.svelte'
</script>

<Header navTitle={"Noahussy"}/>
<slot/>


<style>
    :global(body){
        margin:0;
    }
</style>