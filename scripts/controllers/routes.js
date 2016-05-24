/* this is where page.js related things go */
page.base('/');
page('/', homeController.index);
page('/projects', projectsController.index);
page('/contact', contactController.index);
page('/about', aboutController.index);
page();
