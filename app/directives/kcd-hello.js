export default (ngModule) => {
  ngModule.directive('kcdHello', function(){
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'directives/kcd-hello.html',
        controllerAs: 'vm',
        controller: function() {
          this.greeting = 'Hello webpack';
        }
    };
  });
};
