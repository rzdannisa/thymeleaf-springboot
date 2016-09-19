angular.module('aplikasiMynotes')
        .controller('mynotesController', function ($scope,mynotesService) {
            
            $scope.tampilkanData = function () {
                mynotesService.getMynotesFromDb().success(function (data){
                    $scope.dataServer = data.content;
                })
            }
            
            $scope.isDataEdit = false;
            $scope.currentMynotes = {};
            $scope.simpanData = function (data){
                if($scope.isDataEdit == true){
                    mynotesService.update(data.id, data).success(function (data){
                        alert("data berhasil dirubah");
                        $scope.clearData();
                    }).error(function (){
                        alert("terjadi kesalahan dalam edit data");
                    })
                } else {
                mynotesService.save(data).success(function (data){
                    alert("data berhasil disimpan");
                    $scope.clearData();
                }).error(function (){
                    alert("terjadi kesalahan dalam penyimpanan data");
                })
            }
        }
            
            $scope.hapusData = function (id){
                mynotesService.delete(id).success(function(data){
                    alert("data berhasil dihapus");
                    $scope.clearData();
                }).error(function (){
                    alert("terjadi kesalahan dalam penghapusan data");
                    $scope.clearData();
                })
            }
            
            $scope.editData = function (data){
                
                $scope.isDataEdit = true;
                $scope.currentMynotes = {};
                $scope.currentMynotes.title = data.title;
                $scope.currentMynotes.note = data.note;
                $scope.currentMynotes.id = data.id;
            }
            
            $scope.clearData = function (){
                $scope.isDataEdit = false;
                $scope.currentMynotes = {};
                $scope.reloadData();
            }
            
            $scope.reloadData = function (){
                mynotesService.getMynotesFromDb().success(function (data){
                    $scope.dataServer = data.content;
                })
            }
            
            
        });