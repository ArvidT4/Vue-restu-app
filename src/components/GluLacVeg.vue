<script>

export default{
    props:{
        color:String
    },
}
</script>
<template>
    <div class="border rounded" :class="color"></div>
</template>

<style scoped>
    div{
        width:15px;
        height:15px;
        margin: auto;
    }
</style>