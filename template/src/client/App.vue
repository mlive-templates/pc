<template>
    <div id="app">
        <h1>Hello Mtime</h1>
        <div class="pic"></div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {}
        }
    }
</script>

<style lang="less" scoped>
    @import './common/base.less';
    .pic {
        background-image: url('./assets/logo.png');
        background-repeat: no-repeat;
        background-position: center center;
        height: 200px;
    }

    h1 {
        color: #f90;
        border-bottom: 2px #ccc solid;
        text-align: center;
    }
</style>