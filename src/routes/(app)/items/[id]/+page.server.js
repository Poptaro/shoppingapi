import { items } from '$lib/items.js'


export async function load(event) {
    const foundItem = items.find(item => item.id == event.params.id)
    console.log(foundItem)
    return {foundItem};
};