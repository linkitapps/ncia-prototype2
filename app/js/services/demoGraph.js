'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function demoGraph($q, $http) {

  var service = {};
  var cy;

  service = function(gCy, gMode){
    var deferred = $q.defer();

    // put people model in cy.js
    var eles = angular.copy(gCy);



    $(function(){ // on dom ready

      cy = cytoscape({
        container: $('#chart-container')[0],
        delay : 0,
        style: [
          {
            selector: 'node',
            css: {
              'content': 'data(style.label)',
              'text-valign': 'bottom',
              'text-halign': 'center',
              'background-fit': 'cover',
              'background-clip': 'none',
              'background-opacity' : '0',
              'font-family' : 'NanumGothic',
              'font-size' :  '12px',
              'font-weight' : 'bold',
              'color' : '#777',
              'text-outline-color' : '#fff',
              'text-outline-width' : '2px'
            }
          },
          {
            selector: 'edge',
            css: {
              'line-color' : '#999',
              'width' : '1px'
            }
          },
          {
            selector: "[type = 'cloud']",
            css: {
              'font-size' :  '20px',
              'color' : '#000',
              'width' : 80,
              'height' : 80
            }
          },
          {
            selector: "[type = 'wrapperMpss']",
            css: {
              'background-color': '#cee9b2',
              'font-size' :  '16px',
              'background-opacity' : '1',
              'shape' : 'roundrectangle',
              'color' : '#5e7e3c'
            }
          },
          {
            selector: "[type = 'wrapperFuture']",
            css: {
              'background-color': '#e4c2c3',
              'font-size' :  '16px',
              'background-opacity' : '1',
              'shape' : 'roundrectangle',
              'color' : '#903139'
            }
          },
          {
            selector: "[type = 'wrapperPolice']",
            css: {
              'background-color': '#d4c4ed',
              'font-size' :  '16px',
              'background-opacity' : '1',
              'shape' : 'roundrectangle',
              'color' : '#4e2b7d'
            }
          },
          {
            selector: "[type = 'wrapperCCTV']",
            css: {
              'background-color': '#e4d5b2',
              'font-size' :  '16px',
              'background-opacity' : '1',
              'shape' : 'roundrectangle',
              'color' : '#93732e'
            }
          },
          {
            selector: '$node > node',
            css: {
              'padding-top': '10px',
              'padding-left': '10px',
              'padding-bottom': '10px',
              'padding-right': '10px',
              'text-valign': 'top',
              'text-halign': 'center'
            }
          },
          {
            selector: "[type = 'cctv']",
            css: {
              'background-image':'images/cctv.png'
            }
          },
          {
            selector: "[type = 'cloud']",
            css: {
              'background-image':'images/cloud.png'
            }
          },
          {
            selector: "[type = 'firewall']",
            css: {
              'background-image':'images/firewall.png'
            }
          },
          {
            selector: "[type = 'router']",
            css: {
              'background-image':'images/router.png'
            }
          },
          {
            selector: "[type = 'server-alarm']",
            css: {
              'background-image':'images/server-alarm.png'
            }
          },
          {
            selector: "[type = 'server-analysis']",
            css: {
              'background-image':'images/server-analysis.png'
            }
          },
          {
            selector: "[type = 'server-backup']",
            css: {
              'background-image':'images/server-backup.png'
            }
          },
          {
            selector: "[type = 'server-cctv']",
            css: {
              'background-image':'images/server-cctv.png'
            }
          },
          {
            selector: "[type = 'server-db']",
            css: {
              'background-image':'images/server-db.png'
            }
          },
          {
            selector: "[type = 'server-hack']",
            css: {
              'background-image':'images/server-hack.png'
            }
          },
          {
            selector: "[type = 'server-monitor']",
            css: {
              'background-image':'images/server-monitor.png'
            }
          },
          {
            selector: "[type = 'server-storage']",
            css: {
              'background-image':'images/server-storage.png'
            }
          },
          {
            selector: "[type = 'server-store']",
            css: {
              'background-image':'images/server-store.png'
            }
          },
          {
            selector: "[type = 'server-was']",
            css: {
              'background-image':'images/server-was.png'
            }
          },
          {
            selector: "[type = 'server-web']",
            css: {
              'background-image':'images/server-web.png'
            }
          },
          {
            selector: "[type = 'switch']",
            css: {
              'background-image':'images/switch.png'
            }
          },
          {
            selector: "[type = 'switch-hub']",
            css: {
              'background-image':'images/switch-hub.png'
            }
          },
          {
            selector: "[type = 'switch-l4']",
            css: {
              'background-image':'images/switch-l4.png'
            }
          },
          {
            selector: "[type = 'switch-san']",
            css: {
              'background-image':'images/switch-san.png'
            }
          },
          {
            selector: ':selected',
            css: {
              'border-color': 'red',
              'border-width': '2px'
            }
          }
        ],

        layout: {
          name: gMode,

          positions: eles.layout, // map of (node id) => (position obj); or function(node){ return somPos; }
          zoom: undefined, // the zoom level to set (prob want fit = false if set)
          pan: undefined, // the pan level to set (prob want fit = false if set)
          fit: true, // whether to fit to viewport
          padding: 30, // padding on fit
          animate: false, // whether to transition the node positions
          animationDuration: 500, // duration of animation in ms if enabled
          ready: undefined, // callback on layoutready
          stop: undefined // callback on layoutstop
        },

        elements: eles,

        ready: function(){
          deferred.resolve( this );

          cy.on('cxtdrag', 'node', function(e){
            var node = this;
            var dy = Math.abs( e.cyPosition.x - node.position().x );
            var weight = Math.round( dy*2 );

            node.data('weight', weight);

            fire('onWeightChange', [ node.id(), node.data('weight') ]);
          });
        }
      });

    }); // on dom ready

    return deferred.promise;
  };

  service.listeners = {};

  function fire(e, args){
    var listeners = service.listeners[e];

    for( var i = 0; listeners && i < listeners.length; i++ ){
      var fn = listeners[i];

      fn.apply( fn, args );
    }
  }

  return service;

}

servicesModule.service('demoGraph', demoGraph);