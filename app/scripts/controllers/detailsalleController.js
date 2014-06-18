'use strict';

angular.module('emploiDuTempsApp')
    .controller('DetailsalleCtrl', [ '$scope', '$modalInstance', 'ConceptionEdtService', function ($scope, $modalInstance, ConceptionEdtService) {
        $scope.uv = ConceptionEdtService.getUv();
        $scope.salle = ConceptionEdtService.getLaSalle();
        $scope.profil = ConceptionEdtService.getUvProfil();
        $scope.myIndex= ConceptionEdtService.getHoraireIndex();
        //Ressources associées
        $scope.intervenants = [
            {inter: 'Intervenants - 1'},
            {inter: 'Intervenants - 2'},
            {inter: 'Intervenants - 3'}
        ];
        $scope.types = [
            {label: 'Toutes les salles', value: 'TotSal'},
            {label: 'Amphi', value: 'Amphi'},
            {label: 'Salle de TD', value: 'TD'},
            {label: 'Salle de TP', value: 'TP' },
            {label: 'Multimédia', value: 'MMX'},
            {label: 'Labo de langue', value: 'LL' },
            {label: 'Info', value: 'IF' },
            {label: 'TP Halle', value: 'TPH' },
            {label: 'Divers', value: 'DD' }
        ];
        //Type de placement
        $scope.seances = [
            {sean: 'Cours Magistral', value: 'CM'},
            {sean: 'A éviter', value: 'BD'},
            {sean: 'Travaux Dirigé', value: 'TD'},
            {sean: 'Travaux Pratiques', value: 'TP'}
        ];
        $scope.selectedSeance = $scope.seances[0];

        $scope.effectif = '47';

        $scope.freqSeances = [
            {sean: 'Toues les semaines', value: 'TS'},
            {sean: '1 semaine sur 2', value: '1S3'}
        ];
        $scope.selectedFreqSeance = $scope.freqSeances[0];

        $scope.jourHeures = [
            {jour: 'Lundi', heure: '8h00'},
            {jour: 'Lundi', heure: '9h00'},
            {jour: 'Lundi', heure: '10h00'},
            {jour: 'Lundi', heure: '11h00'},
            {jour: 'Lundi', heure: '12h00'},
            {jour: 'Lundi', heure: '13h00'},
            {jour: 'Lundi', heure: '14h00'},
            {jour: 'Lundi', heure: '15h00'},
            {jour: 'Lundi', heure: '16h00'},
            {jour: 'Lundi', heure: '17h00'},
            {jour: 'Lundi', heure: '18h00'},
            {jour: 'Lundi', heure: '19h00'}
        ];
        $scope.selectedjourHeure =  $scope.jourHeures[$scope.myIndex];

        $scope.heures = [
            {heur: '0'},
            {heur: '1'},
            {heur: '2'},
            {heur: '3'},
            {heur: '4'}
        ];
        $scope.selectedHeure = $scope.heures[2];

        $scope.minutes = [
            {min: '00'},
            {min: '30'}
        ];
        $scope.selectedMinute = $scope.minutes[0];

        $scope.check1 = 'OUI';
        $scope.check2 = 'NON';

        $scope.secanceLiees = [
            {lie: 'Ne pas lier'}
        ];
        $scope.selectedLiee = $scope.secanceLiees[0];

        //Informations et Actions sur l'UV
        $scope.placee = 'O';
        $scope.placeLibelle = 'Ne plus considérer placée';
        $scope.unPlacee = function () {
            if ($scope.placee === 'O') {
                $scope.placee = 'N';
                $scope.placeLibelle = 'Considérer placéé';
            } else {
                $scope.placee = 'O';
                $scope.placeLibelle = 'Ne plus considérer placée';
            }
        };

        $scope.commentaireUv = 'my comment here';

        $scope.effectifs = ['effectif prévu : XX', 'effectif max : XX','effectif réel : XX','effectif edt : XX'];
        $scope.profilsAsso= ['profil1','profil2','profil3'];

        $scope.save = function () {
            alert('I save here!!');
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);