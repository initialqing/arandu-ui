import { App } from "vue";
import MyButton from './button';
import SFCButton from './SFCButton.vue'

export { MyButton, SFCButton }

// 实现一个vue插件，插件中编写install方法将所有的组件安装到vue的实例当中

export default {
    install(app: App): void {
        app.component(MyButton.name, MyButton);
        app.component(SFCButton.name, SFCButton);
    }
}