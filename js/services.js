angular.module("myServices",['firebase'])
  .factory("DataService", function( $http, $rootScope, $firebaseArray ) {

    var ref = firebase.database().ref().child("schools");
    var schools = $firebaseArray(ref);

    // function addSchool( msg ) {
    //   messages.$add( {
    //     username: $rootScope.user.name,
    //     avatar: $rootScope.user.avatar,
    //     text: msg
    //   } )
    // }

    return {
      schools: schools
      // addMessage: addMessage
    }

  })
  .factory("AuthService", function( $http, $firebaseAuth, $firebaseObject, $rootScope ) {

    var Auth = $firebaseAuth();
    var provider = "google";

    function checkAdmin(uid) {
      var ref = firebase.database().ref().child("users").child(provider).child(uid);
      $firebaseObject(ref).$loaded()
        .then(function(user) {
          $rootScope.user.admin = user.admin;
        });
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

