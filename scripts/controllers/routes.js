page('/', homeController.index);
page('/projects', projectsController.index);
page('/projects/:projectUrl', projectsController.detail);
page('/contact', contactController.index);
page('/blog', blogController.index);
page();
