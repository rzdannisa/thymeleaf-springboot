angular.module('aplikasiMynotes')
        .factory('mynotesService', function ($http){
            return {
                getMynotes: function () {
                    return $http.get("/mynotes");
                },
                getListMynotes: function () {
                    return $http.get("/listMynotes");
                },
                getMynotesFromDb:function (){
                    return $http.get("/api/mynotes");
                },
                save: function (data){
                    return $http.post("api/mynotes",data);
                },
                delete: function(id){
                    return $http.delete("/api/mynotes/"+id);
                },
                update: function (id,data){
                    return $http.put("/api/mynotes/"+id,data);
                },
                getLoggedIn:function (){
                    return $http.get("api/user/loggedin");
                }
            };
        });