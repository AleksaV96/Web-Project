(function (angular) {
    var app = angular.module('Aplikacija', ['ui.router', 'ngFileUpload', 'loginService']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('app', {
            abstract: true,
            views: {
                navbar: {
                    templateUrl: 'app/navbar/navbar.tpl.html',
                    controller: 'NavbarCtrl',
                    controllerAs: 'nb'
                },
                '': {
                    template: '<ui-view name=""></ui-view>'
                }
            }
        })
        $stateProvider.state('home', {
            url: '/',
            parent: 'app', 
            views: {       
                '': {
                    templateUrl: 'app/threads/threads.tpl.html',
                    controller: 'ThreadCtrl',
                    controllerAs: 'tl'
                }
            }
        }).state('thread', {
            parent: 'app',
            url: '/thread/{id:int}',
            views: {
                '': {
                    templateUrl: 'app/thread/thread.tpl.html',
                    controller: 'ThreadCtrl',
                    controllerAs: 'th'
                }
            }
        }).state('addThread', {
            parent: 'app',
            url: '/addThread',
            views: {
                '': {
                    templateUrl: 'app/thread/addThread.tpl.html',
                    controller: 'AddThreadCtrl',
                    controllerAs: 'ta'
                }
            }
        }).state('subs', {
            parent: 'app',
            url: '/subs',
            views: {
                '': {
                    templateUrl: 'app/subs/subs.tpl.html',
                    controller: 'SubsCtrl',
                    controllerAs: 'sc'
                }
            }
        }).state('sub', {
            parent: 'app',
            url: '/sub/{id:int}',
            views: {
                '': {
                    templateUrl: 'app/sub/sub.tpl.html',
                    controller: 'SubCtrl',
                    controllerAs: 'ssc'
                }
            }
        }).state('login', {
            parent: 'app',
            url: '/login',
            views: {
                '': {
                    templateUrl: 'app/login/login.tpl.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'lc'
                }
            }
        }).state('registration', {
            parent: 'app',
            url: '/registration',
            views: {
                '': {
                    templateUrl: 'app/registration/registration.tpl.html',
                    controller: 'RegistrationCtrl',
                    controllerAs: 'rc'
                }
            }
        }).state('user', {
            parent: 'app',
            url: '/user/{username:string}',
            views: {
                '': {
                    templateUrl: 'app/profile/profile.tpl.html',
                    controller: 'ProfileCtrl',
                    controllerAs: 'pc'
                }
            }
        }).state('changeProfile', {
            parent: 'app',
            url: '/changeProfile',
            views: {
                '': {
                    templateUrl: 'app/user-profile/user-profile.tpl.html',
                    controller: 'UserProfileCtrl',
                    controllerAs: 'up'
                }
            }
        }).state('adminPanel', {
            parent: 'app',
            url: '/adminPanel',
            views: {
                '': {
                    templateUrl: 'app/admin-panel/admin-panel.tpl.html',
                    controller: 'AdminCtrl',
                    controllerAs: 'ac'
                }
            }
        }).state('userProfile', {
            parent: 'app',
            url: '/userProfile',
            views: {
                '': {
                    templateUrl: 'app/user-profile/user-profile.tpl.html',
                    controller: 'UserProfileCtrl',
                    controllerAs: 'up'
                }
            }
        });
    }]);
})(angular);