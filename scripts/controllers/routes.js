page.base('/');
page('/', homeController.index);
page('/projects', projectsController.index);
page('/contact', contactController.index);
page('/about', aboutController.index);
page();
