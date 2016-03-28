# enzyme-bug

* `git clone https://github.com/sorahn/enzyme-bug`
* `npm install`
* `npm start` Check [localhost](http://localhost:3000) to see that it's working
* `npm test` You can see enzyme fail in the console.

```
$ npm run test                                                                                                   [1] ✘

> enzyme-bug@1.0.0 test /Users/darylr/Github/enzyme-bug
> mocha --require babel-core/register .enzyme app-test.js



  <App />
Warning: Failed Context Types: Required context `i18n` was not specified in `Translate[TestComponent]`. Check the render method of `App`.
    1) should shallow render


  0 passing (188ms)
  1 failing

  1) <App /> should shallow render:
     TypeError: Cannot read property 'loadNamespaces' of undefined
      at Translate.componentWillMount (node_modules/react-i18next/dist/commonjs/translate.js:57:15)
      at [object Object].ReactCompositeComponentMixin.mountComponent (node_modules/react/lib/ReactCompositeComponent.js:210:12)
      at [object Object].wrapper [as mountComponent] (node_modules/react/lib/ReactPerf.js:66:21)
      at Object.ReactReconciler.mountComponent (node_modules/react/lib/ReactReconciler.js:37:35)
      at ReactDOMComponent.ReactMultiChild.Mixin.mountChildren (node_modules/react/lib/ReactMultiChild.js:241:44)
      at ReactDOMComponent.Mixin._createContentMarkup (node_modules/react/lib/ReactDOMComponent.js:591:32)
      at ReactDOMComponent.Mixin.mountComponent (node_modules/react/lib/ReactDOMComponent.js:479:29)
      at node_modules/react/lib/ReactServerRendering.js:70:32
      at ReactServerRenderingTransaction.Mixin.perform (node_modules/react/lib/Transaction.js:136:20)
      at renderToStaticMarkup (node_modules/react/lib/ReactServerRendering.js:68:24)
      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:444:88)
      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:1095:19)
      at ShallowWrapper.html (node_modules/enzyme/build/ShallowWrapper.js:443:21)
      at Context.<anonymous> (app-test.js:11:35)

```
