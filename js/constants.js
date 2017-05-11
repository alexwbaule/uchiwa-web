var constantModule = angular.module('uchiwa.constants', []);

// Themes
constantModule.value('THEMES', [
  {name: 'uchiwa-default'},
  {name: 'uchiwa-color'},
  {name: 'uchiwa-dark'}
]);

// Version
var version = '0.25.1';
constantModule.constant('VERSION', version);
constantModule.value('VERSIONS', {
  uchiwa: version
});
