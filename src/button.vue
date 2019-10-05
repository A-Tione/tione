<template>
    <div>
        <button class="g-button">按钮</button>
    </div>

</template>

<script>
    export default {
        name: "button",
    }
</script>

<style lang="scss" scoped>
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
    }
    .g-button:hover{
        border-color: var(--border-color-hover);
    }
    .g-button:active{
        background-color: var(--button-active-bg);
    }
    .g-button:focus{
        outline: none;
    }
</style>