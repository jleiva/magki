/**
 * Encargado de todas las operaciones relacionadas con los usuarios.
 */
 var user = {
  login: function(email, password) {
    var result = {
      success: false,
      message: null
    };

    return result;
  },

  logout: function() {
    var result = {
      success: false,
      message: null
    };

    return result;
  },

  register: function() {
    var result = {
      success: false,
      message: null
    };

    return result;
  },

  isLoggedIn: function() {
    var result = {
      success: false,
      message: null
    };

    return result;
  },

  getCurrentUser: function() {
    var result = {
      email: null,
      fullName: null
    };

    return result;
  }
};

module.exports = user;