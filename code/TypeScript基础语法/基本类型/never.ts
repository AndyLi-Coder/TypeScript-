// 封装工具或者框架的时候可以使用never
// 在扩展工具的时候，对于一些没有处理的case，可以直接报错

function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case "string":
      console.log(message, "string");
      break;
    case "number":
      console.log(message, "number");
      break; 
    default:
      const check: never = message;
      break;
  }
}
handleMessage("123");
handleMessage(123);
handleMessage(true); 
