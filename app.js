
	var obj=[{task_ID:"100","task_name":"Angular JS"},{task_ID:"101","task_name":"Node JS"},{task_ID:"102","task_name":"Knockout Js"},{task_ID:"103","task_name":"React JS"},{task_ID:"104","task_name":"Angular 2"},{task_ID:"105","task_name":"Xpress"}];
        var app=angular.module('myApp', ['ui.bootstrap','pascalprecht.translate']);
 		
 		app.config(['$translateProvider','$translatePartialLoaderProvider', function ($translateProvider,$translatePartialLoaderProvider){
 			$translateProvider.useLoader('$translatePartialLoader', {
  			urlTemplate: '/i18n/home/{lang}.json'
				});

 		}])
		angular.module('myApp').controller('myCtrl',['$scope','$uibModal','$translatePartialLoader','$translate',function ($scope,$uibModal,$translatePartialLoader,$translate){

			$scope.chang=function(val){
				
			$translatePartialLoader.addPart('home');
	 		$translate.use(val); 
			}
			$translatePartialLoader.addPart('home');
			 $translate.use('en'); 
		$scope.obj=obj;
		 $scope.open = function () {
                var modalInstance = $uibModal.open({
					  controller: 'PopupCont',
                    templateUrl: 'Popup.html',
                });
            }
	
		$scope.num= /^[0-9]+$/;
	
		
			$scope.arr=[];
		$scope.check=function(chk,n){

			if(chk){
			
				$scope.arr[n]=true;}
			else{
				$scope.arr[n]=false;
		}
			}
		$scope.remove=function(i){
			obj.splice(i,1);
			$scope.arr.splice(i,1);
		}
	}]);
  angular.module('myApp').controller('PopupCont', ['$scope','$uibModalInstance',function ($scope, $uibModalInstance) {
		$scope.add_data=function(){
			if($scope.id && $scope.name){
				var f=1;
				angular.forEach(obj,function(value,key){
				if(value.task_ID==$scope.id)
				{
					alert("oops! ID already exists");
					f=0;
				}
				});
			if(f==1)
			{
				obj.push({'task_ID':$scope.id,'task_name':$scope.name});
				$scope.name="";
				$scope.id="";


				
			}
				
			}
		}
            $scope.close = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }]);

