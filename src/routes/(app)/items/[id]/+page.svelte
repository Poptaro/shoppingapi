<script>
    import { page } from '$app/stores';
    export let data
    const foundShortcut = data.foundItem
</script>

<img src={foundShortcut.image} alt='item'>
<h1>{foundShortcut.name}</h1>
<p>{foundShortcut.price}</p>
<form>
    <input>
</form>
<button>Add To Cart</button>


