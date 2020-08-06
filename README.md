# awesome-bem-scss

## Installation

```
npm install awesome-bem-scss --save
```

## Usage

```
import BEM, { createBem } from "awesome-bem-scss";

BEM.confit(options);

createBem(options);

```

## Examples

```

BEM.config({
  blockPrefix: "bem-", // block的前缀
  modifierSeparator: "--", // 状态连接符
  elementSeparator: "__" // 元素连接符
});

createBem("block"); => bem-block
    
createBem("block", "element"); => bem-block__element

createBem({ block: "green" }); => bem-block--green

createBem("block", { element: "active" }); => bem-block__element--active

createBem({ block: "active" }, { element: "active" }); => bem-block--active__element--active

createBem({ block: { warning: "is-show" } }); => bem-block--warning--is-show

```

## Links
 - [BEM](https://lizhuang.xyz/youdefine-docs/bem/)