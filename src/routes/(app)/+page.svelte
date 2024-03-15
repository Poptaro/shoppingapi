<script>
    import { items } from '$lib/items.js'
</script>



<h1>Welcome to <strong>HOME</strong> PAGEUSSY</h1>

<div class=shopping-list>
    {#each items as item}
    <div class=ind-item>
        <a href='/items/{item.id}'>
            <img src={item.image} alt='item'>
        </a>
        <p>{item.name}</p>
        <p>{item.price}</p>
    </div>

    {/each}
</div>


<style>
    :global(body){
        margin:0;
    }
    .shopping-list{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        row-gap: 10px;
    }
    .ind-item{
        border: 2px rgb(0, 83, 161) solid;
    }
</style>