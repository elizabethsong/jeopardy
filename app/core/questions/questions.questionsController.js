(function () {

    angular.module("Questions").controller("QuestionsController", QuestionsController);

    QuestionsController.$inject = ["$http"];

    function QuestionsController($http) {

        var vm = this;
        // properties
        vm.questions = [];
        vm.isEditing = false;

        // pagination
        vm.pageSize = 10;
        vm.currentPage = 0;
        // vm.numberOfPages = vm.questions.length/vm.pageSize;

        // methods
        vm.init = init;


        function init() {
            $http.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues")
                .success(function (data) {
                    vm.questions = data;
                })
        }

        // can call init() directly
        init();


    }

})();