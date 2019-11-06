const objTraverser = require('obj-traverse/lib/obj-traverse');

const findRawRoute = ($router, query) => {
    const allRawRoutes = $router?.options?.routes;
    if (!allRawRoutes) return null;

    let foundedRoute = null;
    allRawRoutes.some((route) => {
        foundedRoute = objTraverser.findFirst(route, 'children', query);
        return foundedRoute;
    });
    return foundedRoute || null;
};


const _flatRouteChildren = (parentRoute, flattendChildren = []) => {
    if (parentRoute.children && parentRoute.children.length) {
        parentRoute.children.forEach((childRoute) => {
            if (childRoute.children && childRoute.children.length) {
                if (!childRoute.redirect) {
                    flattendChildren.push(childRoute);
                }
                return _flatRouteChildren(childRoute, flattendChildren);
            }
            if (!childRoute.redirect) {
                flattendChildren.push(childRoute);
            }
        });
    }
    return flattendChildren;
};

const findNextAbsoluteRoute = ($router, $route) => {
    const query = { meta: { isRootNavigation: true } };
    const rawRootParent = findRawRoute($router, query);
    const flattenRawRoutes = _flatRouteChildren(rawRootParent);
    const currentRouteIndex = flattenRawRoutes.findIndex((route) => { return route.name === $route.name; });
    return flattenRawRoutes?.[currentRouteIndex + 1];
};
const findPrevAbsoluteRoute = ($router, $route) => {
    const query = { meta: { isRootNavigation: true } };
    const rawRootParent = findRawRoute($router, query);
    const flattenRawRoutes = _flatRouteChildren(rawRootParent);
    const currentRouteIndex = flattenRawRoutes.findIndex((route) => { return route.name === $route.name; });
    return flattenRawRoutes?.[currentRouteIndex - 1];
};

const findNextRelativeRoute = ($router, $route) => {
    const parentName = $route.matched[$route.matched.length - 2].name;
    const rawRootParent = findRawRoute($router, { name: parentName });
    const currentRouteIndex = rawRootParent.children.findIndex((route) => { return route.name === $route.name; });
    return rawRootParent?.children?.[currentRouteIndex + 1];
};
const findPrevRelativeRoute = ($router, $route) => {
    const parentName = $route.matched[$route.matched.length - 2].name;
    const rawRootParent = findRawRoute($router, { name: parentName });
    const currentRouteIndex = rawRootParent.children.findIndex((route) => { return route.name === $route.name; });
    return rawRootParent?.children?.[currentRouteIndex - 1];
};

export {
    findRawRoute,
    findNextAbsoluteRoute,
    findPrevAbsoluteRoute,
    findNextRelativeRoute,
    findPrevRelativeRoute
};
