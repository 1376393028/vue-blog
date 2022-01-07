<template>
    <header :class="{'login':isLogin,'no-login':!isLogin}">
        <template v-if="!isLogin">
            <h1>Let's share</h1>
            <p>精品博客汇聚</p>
            <div class="btns">
                <el-button>立即登录</el-button>
                <el-button>注册账号</el-button>
            </div>
        </template>
        <template v-if="isLogin">
            <h1>Let's share</h1>
           <div>
                <img src="@/assets/images/edit.png" alt="">
                <img class="avator" src="@/assets/images/edit.png" alt="">

           </div>
        </template>    
    </header>
    
</template>
<script>

export default {
    data() {
        return {
            isLogin:false
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/base.less';
.no-login {
    background: @color0a;
    padding-top: 40px;
    box-sizing: border-box;
    h1 {
        color: @colorff;
        font-size: 30px;
    }
    p {
        color: @colorff;
        font-size: 20px;
        margin: 20px 0;
    }
    .btns {
        margin-bottom: 20px;
    }
}

.login {
    background: @color0a;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    h1 {
        color: @colorff;
        font-size: 30px;
        margin-left: 30px;

    }
    .avator {
        margin: 0 30px 0 10px;
        border-radius: 50%;
    }
}
</style>