'use strict';

(function (window, $) {
  function setLogguedInUser() {
    var usersInfo = getUsersInfo();
    var user = usersInfo.logguedInUser;
    
    
  }

  function getUsersInfo() {
    var usersInfo = JSON.parse(localStorage.getItem('appUsersLs'));

    if (usersInfo === null) {
      usersInfo = [];
    };

    return usersInfo;
  }

})(window, $util);