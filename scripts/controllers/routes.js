page('/', homeController.index);
page('/projects', projectsController.retrieveData, projectsController.index);
page('/projects/:projectname', projectsController.retrieveData, projectsController.detail);
page('/contact', contactController.index);
page('/blog', blogController.index);
page();
