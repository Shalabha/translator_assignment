describe('myCtrl', function() {
  beforeEach(module('myApp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
  describe('Contains the required object', function() {
    it('testing', function() {
      var $scope = {};
      var controller = $controller('myCtrl', { $scope: $scope });
       expect($scope.obj).toContain({ task_ID: '100', task_name: 'Angular JS'  }); 
    });
    it('IS Added', function() {
      var $scope = {};
      var modalInstance;
       modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      }; 
      var controller = $controller('PopupCont', { $scope: $scope ,$uibModalInstance: modalInstance});
      $scope.id="109";
      $scope.name="Core Java";
      //console.log(obj);
      $scope.add_data();

      expect(obj).toContain({ task_ID: '109', task_name: 'Core Java' }) ;
    });
        it('IS removed', function() {
      var $scope = {};
      var controller = $controller('myCtrl', { $scope: $scope});
      $scope.id="100";
      $scope.name="Angular JS";
      //console.log(obj);
      $scope.remove();

      expect($scope.obj).not.toContain({ task_ID: '100', task_name: 'Angular JS' }) ;
    });
  });

});
   
