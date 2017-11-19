chrome.devtools.panels.create(
  'GraphQL Query Inspector', // title for the panel tab
  null, // you can specify here path to an icon
  'index.html', // html page which is gonna be injecting into the tab's content
  () => console.log('yolo') // you can pass here a callback function
);
