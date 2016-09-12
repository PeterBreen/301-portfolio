page('/', homeController.index);
page('/projects', projectsController.index);
page('/projects/:projectname', projectsController.detail);
page('/contact', contactController.index);
page('/blog', blogController.index);
page();
