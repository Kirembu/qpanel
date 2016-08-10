'use strict';

// Register `setting` component, along with its associated controller and template
angular.
  module('setting').
  component('setting', {
    templateUrl: 'static/app/setting/setting.template.html',
    controller: ['Setting',
      function SettingController(Setting) {
        var self = this;
        self.settings = Setting.query(function(settings) {
            // do somethings
        });

        self.addResetStats = function() {
            self.settings.reset_stats.push({'name': null, 'value': null});
        }

        self.addRename = function() {
            self.settings.rename.push({'name': null, 'value': null});
        }

        self.save = function save() {
            self.settings.$save();
        };

        self.isFreeSWITCH = function(){
            return self.settings.general.freeswitch;
        }

      }
    ]

  });
