(function () {

    angular.module("Questions").controller("QuestionsController", QuestionsController);

    // $watch based on $scope, so must add the $scope dependency to the controller here if use $watch inside controller
    QuestionsController.$inject = ["$http", "$scope"];

    function QuestionsController($http, $scope) {

        var vm = this;


        //var apiURL = "http://jservice.io/api/clues?";  // http://jservice.io/  API clues service call URL

        // https://www.mindsumo.com/contests/jeopardy-api
        //  *API Note: If you are getting CORS issues, some participants have found it to helpful
        //  to  use the cors-anywhere service.  If you are running into these errors, try using
        //  the baseURL of https://cors-anywhere.herokuapp.com/http://jservice.io/api/,
        //  instead of http://jservice.io/api.

        // on Heroku, change api URL to:
        var apiURL = "https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?";


        // properties
        vm.questions = [];
        vm.isEditing = false;


        // pagination
        vm.pageSize = 10;
        vm.currentPage = 0;
        vm.numberOfPages = function(){
            return Math.ceil(vm.questions.length/vm.pageSize);
        };

        // properties for filter search,  used by $scope.$watch()
        vm.category = 0;
        vm.difficulty  = 0;
        vm.startDate = "";
        vm.endDate = "";

        // methods
        vm.init = init;
        // vm.searchC = doSearchforCategory;
        // vm.searchD = doSearchforDifficulty;
        // vm.searchDate = doSearchforDate;

        // init() method will do initial query to return all questions
        function init() {
            $http.get(apiURL)
                .success(function (data) {
                    vm.questions = data;
                })
        }

        // use $watch to combine all search parameters on a single $HTTP call search together
        // combine all 1 parameters:  '[vm.startDate + vm.endDate + vm.category + vm.difficulty]'
        // Note:  must add vm.xxx  '[startDate + endDate + category + difficulty]'   not working

        $scope.$watch('[vm.startDate + vm.endDate + vm.category + vm.difficulty]', function () {
            console.info( 'active filters:  {category_id: ' + vm.category +'} \t {value: ' + vm.difficulty + '} \t  Date: ' +  vm.startDate + '\t' + vm.endDate);

            // Now search on all 4 params
            searchAll();

            // that was only searching with combine 2 days
            //searchAll(vm.startDate, vm.endDate);
        }, true);

        // Search all active filters
        function searchAll() {
            // construct API call URL
            var URL = apiURL;


            // !isNaN() make sure the values are number
            if ( !isNaN(vm.category)  && vm.category > 0)  URL += "category=" + vm.category + "&";
            if ( !isNaN(vm.difficulty)  && vm.difficulty > 0)  URL += "value=" + vm.difficulty + "&";

            if (isDate(vm.startDate) && isDate(vm.endDate)){
                URL += "min_date=" + vm.startDate + "&";
                URL += "max_date=" + vm.endDate + "&";
            }
            console.info(URL);
            // now do $HTTP web service call
            $http.get(URL)
                .success(function (data) {
                    vm.questions = data;
                })
            vm.currentPage = 0;
        }

        // helper functions

        // custom function to check if datestring is a valid Date
        // somehow angular.isDate()  doesn't work right
        function isDate(val){
            var date = Date.parse(val);
            if (isNaN(date)) return false;
            else return true;
        }

        //
        // function doSearchforCategory(category_id) {
        //
        //     $http.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?category="+category_id)
        //         .success(function (data) {
        //             vm.questions = data;
        //         })
        //     vm.currentPage=0
        // }
        // function doSearchforDifficulty(value) {
        //
        //     $http.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?value="+value)
        //         .success(function (data) {
        //             vm.questions = data;
        //         })
        //     vm.currentPage=0
        // }
        // function doSearchforDate(minDate, maxDate) {
        //
        //     $http.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?min_date="+minDate+"&max_date="+maxDate)
        //         .success(function (data) {
        //             vm.questions = data;
        //         })
        //     vm.currentPage=0
        // }


        // can call init() directly
        init();


    }

})();