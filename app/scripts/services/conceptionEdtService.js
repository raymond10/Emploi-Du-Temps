'use strict';

angular.module('emploiDuTempsApp')
  .service('ConceptionEdtService', function ConceptionEdtService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var selectedProfil = {};
        var laSalle = '';
        var uv ='';
        var index ='';
        return {
            getUvProfil:function() {
                return selectedProfil;
            },
            setUvProfil:function(value) {
                selectedProfil = value;
            },
            getLaSalle:function() {
                return laSalle;
            },
            setLaSalle:function(value) {
                laSalle = value;
            },
            getUv:function() {
                return uv;
            },
            setUv:function(value) {
                uv = value;
            },
            getHoraireIndex:function() {
                return index;
            },
            setHoraireIndex:function(value) {
                index = value;
            }
        };
  });