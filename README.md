# GHOSTAX

[Read the full docs](https://ghostax.netlify.com/)

GHOSTAX is a _renderless_ vue framework. [What is vue renderless?](https://adamwathan.me/renderless-components-in-vuejs/) Well, vue has a concept called "scoped slots". It actually gives you the ablity to abstract the logic to another file, and use the provided variables and functions inside your component. This seems to be one of the best and most powerfull features of vue.

There are already many many UI frameworks for vue. and the problem with them is - you gussed it - they add their own highly opinionated interface. and then, any sort of effort for changin the styles to match the look you need to be, leads to an awful and ugly CSS. of course they are handy when you want prototype, or you don't even care about the interface. but what if you want your custom style? which you should want! what if you work in a team that has a UI/UX department? The point is **You can use _renderless_ components to forget about the complexity, and write your very own DOM and CSS.**
