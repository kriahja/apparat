'use strict';

angular.module('agfOpenApp.auth', [
  'agfOpenApp.constants',
  'agfOpenApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
