'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function modalDirective() {

    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: true, // Replace with the template belowgulp
        transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function() {
                scope.show = false;
            };
        },
        template: require('../../views/modal.html')
    };

}

directivesModule.directive('modalDirective', modalDirective);