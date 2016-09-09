page('/', homeController.index);
page('/projects', projectsController.index);
page('/projects/:routeUrl', projectsController.detail);
page('/contact', contactController.index);
page('/blog', blogController.index);
page();
