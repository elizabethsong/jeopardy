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
        vm.numberOfPages = function(){
            return Math.ceil(vm.questions.length/vm.pageSize);
        };

        // methods
        vm.init = init;
        vm.searchC = doSearchforCategory;
        vm.searchD = doSearchforDifficulty;
        vm.searchDate = doSearchforDate;


        function init() {
            $http.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues")
                .success(function (data) {
                    vm.questions = data;
                })
        }

        function doSearchforCategory(category_id) {

            $http.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?category="+category_id)
                .success(function (data) {
                    vm.questions = data;
                })
            vm.currentPage=0
        }
        function doSearchforDifficulty(value) {

            $http.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?value="+value)
                .success(function (data) {
                    vm.questions = data;
                })
            vm.currentPage=0
        }
        function doSearchforDate(startdate,enddate) {

            $http.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?min_date="+startdate+"&max_date="+enddate)
                .success(function (data) {
                    vm.questions = data;
                })
            vm.currentPage=0
        }

        // can call init() directly
        init();


    }

})();