// import { createApp } from 'vue'
// import SFCButton from '~/SFCButton.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
// const app = createApp(SFCButton)
import { createApp } from "vue/dist/vue.esm-browser";
import AranduUI from './entry'
createApp({
    template:
        `<div style="margin:20px;">
            <MyButton color="blue">蓝色按钮</MyButton>
            <MyButton color="green">绿色按钮</MyButton>
            <MyButton color="gray">灰色按钮</MyButton>
            <MyButton color="yellow">黄色按钮</MyButton>
            <MyButton color="red">红色按钮</MyButton>
        </div>
        <div style="margin:20px;">
            <MyButton color="blue" plain>朴素按钮</MyButton>
            <MyButton color="green" plain>绿色按钮</MyButton>
            <MyButton color="gray" plain>灰色按钮</MyButton>
            <MyButton color="yellow" plain>黄色按钮</MyButton>
            <MyButton color="red" plain>红色按钮</MyButton>
        </div>
        <div style="margin:20px;">
            <MyButton size="small" plain>小按钮</MyButton>
            <MyButton size="medium" plain>中按钮</MyButton>
            <MyButton size="large" plain>大按钮</MyButton>
        </div>
        <div style="margin:20px;">
            <MyButton color="blue" round plain icon="search">搜索按钮</MyButton>
            <MyButton color="green" round plain icon="edit">编辑按钮</MyButton>
            <MyButton color="gray" round plain icon="checkmark">成功按钮</MyButton>
            <MyButton color="yellow" round plain icon="share">提示按钮</MyButton>
            <MyButton color="red" round plain icon="incomplete-cancel">删除按钮</MyButton>
        </div>
        <div style="margin:20px;">
            <MyButton color="blue" round plain icon="search" ></MyButton>
            <MyButton color="green" round plain icon="edit" ></MyButton>
            <MyButton color="gray" round plain icon="checkmark" ></MyButton>
            <MyButton color="yellow" round plain icon="message-queue" ></MyButton>
            <MyButton color="red" round plain icon="incomplete-cancel" ></MyButton>
        </div>

        `
}).use(AranduUI).mount("#app");