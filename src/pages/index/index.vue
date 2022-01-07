<template>
    <div id="index">
        <div class="blogs">
            <div class="item">
                <div class="avator">
                    <img src="@/assets/images/edit.png" alt="">
                    <span>渣渣辉</span>
                </div>
                <div class="content">
                    <h3>前端异步大揭秘 <span>3天前</span></h3>
                    <div>
                        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读
                    </div>
                </div>
            </div>
            <div class="item" v-for="num in 3" :key="num">
                <div class="avator">
                    <img src="@/assets/images/edit.png" alt="">
                    <span>渣渣辉</span>
                </div>
                <div class="content">
                    <h3>前端异步大揭秘 <span>3天前</span></h3>
                    <div>
                        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读
                        本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>
<style lang="less" src="./index.less" scoped>

</style>
