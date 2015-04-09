'use strict';

var controllersModule = require('./_index');


/**
 * @ngInject
 */
function HomeCtrl($scope, demoGraph, AppSettings, addTEmpData) {

    $scope.data = angular.copy(AppSettings.networkData);

    var sMode = 'scrollHorz3d';

    var isSaved = false;

    var looping = 10;

    $scope.graphMode = 'preset';

    $scope.bgClass = 'bg_a';

    if((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))) {
        sMode = 'fade';
        $scope.bgClass = 'bg_a ie';
    }

    /* 챠트, 데이터 화면 전환 */
    $scope.btnMsg = '표로 보기 >>';

    $scope.data = angular.copy(AppSettings.networkData);

    $scope.addTEmpData = addTEmpData;

    var testData = {edges : [],nodes : [] };

    for(var i = 0 ; i < looping; i++){
        for (var item in AppSettings.networkData.nodes){
            var _inItem = angular.copy(AppSettings.networkData.nodes[item]);
            var _inLink = angular.copy(AppSettings.networkData.edges[item]);

            if(i!=0 && _inItem.data.type == 'cloud'){
                testData.edges.push(
                    {
                        data : {
                            "id": "rootLink"+i,
                            "source": _inItem.data.id+i,
                            "target": 'root0',
                            "type": "type1"
                        }
                    }
                );
            }

            testData.nodes.push(_inItem);
            _inItem.data.id = ''+_inItem.data.id+i;
            if(_inItem.data.parent) _inItem.data.parent = ''+_inItem.data.parent+i;

            if(_inLink) {
                testData.edges.push(_inLink);
                _inLink.data.id = ''+_inLink.data.id+i;
                _inLink.data.source = ''+_inLink.data.source+i;
                _inLink.data.target = ''+_inLink.data.target+i;
            }
        }
    }



    /* 데이터 필터링시 사용 */
    $scope.viewList = [
        {value : '전체', label : '전체 네트워크 표시', desciprtion : '', idx : 0},
        {value : '경찰청', label : '화면 1(경찰청 서버담당자 권한)', desciprtion : '서버담당자인 일지매의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 1},
        {value : '경찰청', label : '화면 2(경찰청 시스템 담당자 권한)', desciprtion : '경찰청 시스템 전체 담당자인 장보고의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 2},
        {value : '경찰청', label : '화면 3(경찰청 네트워크 담당자 권한)', desciprtion : '네트워크 장비 담당자인 이수일의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 3},
        {value : '경찰청', label : '화면 4(경찰청 보안 담당자 권한)', desciprtion : '보안담당자인 나보안의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 4},
        {value : '전체', label : '화면 5(시스템 전체 담당자 권한)', desciprtion : '시스템 전체 담당자인 대조영의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 5},
        {value : '미래창조부', label : '화면 6(미래창조부 서버 담당자 권한)', desciprtion : '미래창조과학부의 서버 담당자인 이순신의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 6},
        {value : '미래창조부', label : '화면 7(미래창조부 네트워크 담당자 권한)', desciprtion : '네트워크 담당자인 이수일의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 7},
        {value : '미래창조부', label : '화면 8(미래창조부 보안 담당자 권한)', desciprtion : '보안 담당자인 나보안의 권한에 맞는 시스템 구성과 시스템 정보 확인 가능', idx : 8},
        {value : '퍼포먼스 테스트', label : '화면 9(퍼포먼스 테스트)', desciprtion : '노드 '+testData.nodes.length+'개', idx : 9}
    ];

    /* 기본 필터링 셋팅 */
    $scope.viewPage = $scope.viewList[5];

    // you would probably want some ui to prevent use of PeopleCtrl until cy is loaded
    function makeGraph() {

        //if($scope.cy) $scope.cy.destroy();

        demoGraph( $scope.data, $scope.graphMode ).then(function( gCy ){

            $scope.cy = gCy;

            $scope.cy.on('mouseover', 'node', function(evt){

                var node = evt.cyTarget.data();
                var _id = evt.cyTarget.id();
                var _x = evt.originalEvent.clientX;
                var _y = evt.originalEvent.clientY;

                if(node.properties.admin){
                    $('.tooltip').html(
                    '<table>' +
                    '<tr><th>종류</th><td>'+ (node.properties.type || '' ) +'</td></tr>'+
                    '<tr><th>서버명</th><td>'+ (node.properties.name || '' ) +'</td></tr>'+
                    '<tr><th>IP</th><td>'+ (node.properties.IP || '' ) +'</td></tr>'+
                    '<tr><th>OS</th><td>'+ (node.properties.OS || '' ) +'</td></tr>'+
                    '<tr><th>담당자</th><td>'+ (node.properties.admin_name || '' ) +'</td></tr>'+
                    '<tr><th>연락처</th><td>'+ (node.properties.admin.phone || '' ) +'</td></tr>'+
                    '</table>'
                    ).css({
                            'left' : (_x+10)+'px',
                            'top' : _y+'px'
                    }).show();
                }
            });
            $scope.cy.on('mouseout', 'node', function(evt){
                $('.tooltip').hide();
            });

            // use this variable to hide ui until cy loaded if you want
            $scope.cyLoaded = true;
        });
    }

    $scope.graphLayout = function() {

        $scope.graphMode == 'preset' ? $scope.graphMode = 'cose' : $scope.graphMode = 'preset';

        $scope.pageMove();

    }

    /* 필터링 갱신 함수 */
    $scope.pageMove = function(){
        var _val = $scope.viewPage.value;
        var _idx = $scope.viewPage.idx;
        var _arr = { 'edges' : [], 'nodes' : [], 'layout' : {} };

        if(_idx == 9) {
            $scope.data = testData;
            $scope.graphMode = 'cose';
        }
        else{
            $scope.data = angular.copy(AppSettings.networkData);

            if(_val != '전체'){

                for(var item in $scope.data.nodes){
                    if($scope.data.nodes[item].data.visibility[_val]){
                        _arr.nodes.push($scope.data.nodes[item]);
                    }
                }

                for(var item in $scope.data.edges){
                    for(var node in _arr.nodes) {
                        if($scope.data.edges[item].data.target == _arr.nodes[node].data.id){
                            _arr.edges.push($scope.data.edges[item]);
                        }
                    }
                }

                _arr.layout = $scope.data.layout;

                $scope.data = _arr;

            }

            if(_idx == 1 || _idx == 2){
                for(var item in $scope.data.nodes) {
                    if($scope.data.nodes[item].data.properties.admin_name != '일지매'){
                        $scope.data.nodes[item].data.properties.OS = '';
                        if(_idx == 1) $scope.data.nodes[item].data.properties.IP = '';
                    }
                }
            }else if (_idx == 5){
                for(var item in $scope.data.nodes) {
                    if(($scope.data.nodes[item].data.properties.admin_name != '일지매') && ($scope.data.nodes[item].data.properties.admin_name != '이순신')){
                        $scope.data.nodes[item].data.properties.OS = '';
                    }
                }
            }else if (_idx == 3 || _idx == 4 || _idx == 6 || _idx == 7 || _idx == 8){
                for(var item in $scope.data.nodes) {
                    $scope.data.nodes[item].data.properties.OS = '';
                    if(_idx == 8 && $scope.data.nodes[item].data.properties.type == 'CCTV') delete $scope.data.nodes[item];
                }
            }
        }

        makeGraph();
    }

    $scope.addFn = function(){
        alert('저장 되었습니다.');
        $scope.modalShown = false;

        var _c = angular.copy($scope.addTEmpData);
        for(var item in _c.nodes){
            AppSettings.networkData.nodes.push(_c.nodes[item]);
            AppSettings.networkData.edges.push(_c.edges[item]);
        }
        isSaved = true;
        $scope.pageMove();
    }

    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };

    $scope.pageMove();

    makeGraph();

    var $box = $('#box');

    $box.boxSlider({
        effect : sMode
        , speed: 600
        , autoScroll: false
        , timeout: 5000
        , next: '#next'
        , prev: '#prev'
        , pause: '#pause'
        //, onbefore: function() {}
        , onafter: function($previousSlide, $currentSlide, currIndex, nextIndex) {
            $scope.$apply(function(){
                currIndex == 1 ? $scope.btnMsg = '표로 보기 >>' : $scope.btnMsg = '그래프로 보기 >>';
            })
        }
    });

}

controllersModule.controller('HomeCtrl', HomeCtrl);