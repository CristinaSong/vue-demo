<template>
<div>
    <img src='../src/assets/player.png'>
    <div class="animation"></div>
</div>
</template>

<script>
export default {

}
</script>

<style>
img {
    width: 480px;
    height: 60px;  
}
.animation {
    width: 48px;
    height: 60px;
    background: url('../src/assets/player.png') no-repeat;
    background-size: 480px 60px;
    animation: move 2s steps(10);
}
@keyframes move {
    100% {
        background-position: -480px 0;
    }
}
</style>

