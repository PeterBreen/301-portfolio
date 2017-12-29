page('/', homeController.index);
page('/projects/:projectname', projectsController.retrieveData, projectsController.detail);
page('/projects', projectsController.retrieveData, projectsController.index);
page('/contact', contactController.index);
page('/blog', blogController.index);
page();
