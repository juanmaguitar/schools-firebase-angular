angular.module("myServices",['firebase'])
  .factory("DataService", function( $http, $rootScope, $firebaseArray ) {

    var ref = firebase.database().ref().child("schools");
    var schools = $firebaseArray(ref);

    function addSchool( school ) {
      schools.$add(school);
    }

    return {
      schools: schools,
      addSchool: addSchool
    }

  })
  .factory("AuthService", function( $http, $firebaseAuth, $firebaseObject, $rootScope ) {

    var Auth = $firebaseAuth();
    var provider = "google";

    function checkAdmin(uid) {

      var ref = firebase.database().ref().child(`users/${provider}/${uid}/roles`)

      $firebaseObject(ref).$loaded()
        .then( function(roles) {
          $rootScope.user.admin = roles.admin;
        })

    }

    Auth.$onAuthStateChanged(function(authData) {
      if (authData) {
        $rootScope.user = {
          name: authData.displayName,
          avatar: authData.photoURL,
          email: authData.email
        };
        checkAdmin(authData.uid);
      }
      else {
        $rootScope.user =  null;
      }
    });

    function logIn() {
      if ( Auth.$getAuth() === null ) {
        Auth.$signInWithPopup(provider)
      }
    }

    function logOut() {
      Auth.$signOut();
    }

    return {
      logIn: logIn,
      logOut: logOut
    }

  })

