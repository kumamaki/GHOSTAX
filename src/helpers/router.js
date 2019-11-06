import * as objTraverse from 'obj-traverse/lib/obj-traverse';

export const findRoute = ($routes, routeName) => {
    return objTraverse.findFirst($routes[0], 'children', {
        name: routeName
    });
};
