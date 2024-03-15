<script>
    export let navTitle
</script>


<div class=navbar>
    <div class=left-nav>
        <a href='/'>
            <h1 class=title>{navTitle}</h1>
        </a>

    </div>
    <div class=right-nav>
        <button>View Cart</button>
    </div>
</div>


<style>
    .navbar{
        background-color: rgb(194, 194, 194);
        height: 75px;
        display: flex;
        justify-content: space-between;
        padding-left: 16px;
        padding-right: 16px;
        align-items: center;
    }
    .title{
        color: rgb(156, 156, 156);
    }
    .right-nav{
        display: flex;
        gap: 8px;
    }

</style>