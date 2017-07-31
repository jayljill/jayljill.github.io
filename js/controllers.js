var App = angular.module("App", ['ui.bootstrap']);

App.controller("FirstCtrl", function ($scope, $uibModal) {
    $scope.openanta = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'myModalContent.html',
            windowClass: 'app-modal-window',
            controller: function ($scope) {
                $scope.myInterval = 5000;
                $scope.noWrapSlides = false;
                $scope.active = 0;
                var slides = $scope.slides = [];
                var currIndex = 0;

                $scope.addSlide = function (i) {
                    slides.push({
                        image: './images/' + i +'.png',
                        text: 'demo',
                        id: currIndex++
                    });
                };

                $scope.randomize = function () {
                    var indexes = generateIndexesArray();
                    assignNewIndexesToSlides(indexes);
                };

                for (var i = 0; i < 4; i++) {
                    $scope.addSlide(i+1);
                }

                // Randomize logic below

                function assignNewIndexesToSlides(indexes) {
                    for (var i = 0, l = slides.length; i < l; i++) {
                        slides[i].id = indexes.pop();
                    }
                }

                function generateIndexesArray() {
                    var indexes = [];
                    for (var i = 0; i < currIndex; ++i) {
                        indexes[i] = i;
                    }
                    return shuffle(indexes);
                }

                // http://stackoverflow.com/questions/962802#962890
                function shuffle(array) {
                    var tmp, current, top = array.length;

                    if (top) {
                        while (--top) {
                            current = Math.floor(Math.random() * (top + 1));
                            tmp = array[current];
                            array[current] = array[top];
                            array[top] = tmp;
                        }
                    }

                    return array;
                }
            }
        });
        modalInstance.result.then(function () {
            console.log('yes');
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

});
