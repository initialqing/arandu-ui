import { defineComponent, createVNode, openBlock, createElementBlock, createElementVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  plain: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "large"
  },
  round: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const MyButton = defineComponent({
  name: "MyButton",
  props,
  setup(props2, {
    slots
  }) {
    var _a;
    console.log(`html`, (_a = document.querySelector(`#app`)) == null ? void 0 : _a.innerHTML);
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3.5",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
            py-${size[props2.size].y} 
            px-${size[props2.size].x}
            ${props2.round ? "rounded-full" : "rounded-lg"}
            font-semibold 
            rounded-lg 
            bg-${props2.color}-${props2.plain ? "100" : "500"} 
            hover:bg-${props2.color}-400  
            border-${props2.color}-${props2.plain ? "500" : "500"} 
            border-solid 
            text-${props2.plain ? props2.color + "-500" : "white"}
            text-${size[props2.size].text}
            cursor-pointer 
            hover:text-white
            ml-2
        `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-carbon-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "SFC Button", -1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
  }
};
export {
  MyButton,
  SFCButton,
  entry as default
};
