const objTraverser = require('obj-traverse/lib/obj-traverse');

const findRawRoute = ($router, query) => {
  const routes = $router?.options?.routes;
  if (!routes) return null;

  let foundedRoute = null;
  routes.some((route) => {
    foundedRoute = objTraverser.findFirst(route, 'children', query);
    return foundedRoute;
  });
  return foundedRoute || null;
};


export {
  findRawRoute
};
