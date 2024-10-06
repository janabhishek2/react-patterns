# Hooks

1. useState provides us a reactive variable which triggrs comp re-render.
2. A function is a hook only if: it uses reactive variables || it uses some other hooks.
3. A component returns jsx, a hook returns variable | nothing.
4. A hook has the ability of reactive varaibles for state management; while function does not has reactive variables.
5. Component has to return something (jsx| null) while hooks need not return value.
6. A hook is similar to component but we are not returning jsx from hooks.
7. Non visible code: any code that does not touch the jsx. example: state management code.
8. UI should only consume data. ( state )
9. If the component some data manipulation; you would require a function/hook;
10. Hooks can be called on top level of component only. They can not be called inside if conditions.
11. We can not call hooks in functions.
12. Hooks can be used only in fn comp not in class comp.
13. We copy the original object and make changes to copy: Why copy the object is passed as arg in useState?: reference to object remains same hence react does not trigger re-render. Hence we need to copy the original state object and use setter function.

