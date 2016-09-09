page('/', homeController.index);
page('/projects', projectsController.index);
page('/projects/:routeUrl', projectsController.index);
page('/contact', contactController.index);
page('/blog', blogController.index);
page();
