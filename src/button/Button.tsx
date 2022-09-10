// @unocss-include
import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export type ISize = "small" | "medium" | "large";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设置默认颜色
  },
  plain: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ISize>,
    default: "large",
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
} as const;

export default defineComponent({
  name: "MyButton",
  props,
  setup(props, { slots }) {
    console.log(`html`, document.querySelector(`#app`)?.innerHTML);
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3.5",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    return () => (
      <button
        class={`
            py-${size[props.size].y} 
            px-${size[props.size].x}
            ${props.round ? "rounded-full" : "rounded-lg"}
            font-semibold 
            bg-${props.color}-${props.plain ? "100" : "500"} 
            hover:bg-${props.color}-400  
            border-${props.color}-${props.plain ? "500" : "500"} 
            border-solid 
            text-${props.plain ? props.color + "-500" : "white"}
            text-${size[props.size].text}
            cursor-pointer 
            hover:text-white
            ml-2
        `}
      >
        {props.icon !== "" ? <i class={`i-carbon-${props.icon} p-3`}></i> : ""}

        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
