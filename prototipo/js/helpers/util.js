// Basado en https://github.com/james2doyle/saltjs/blob/master/js/salt.js
window.$util = function(sel) {
  if(typeof sel === 'string') {
    var result;
    var option = {  '#':'getElementById', 
                      '.':'getElementsByClassName',
                      '@':'querySelector',
                      '*':'querySelectorAll'}[sel[0]];
    if (option) {
      result = (document[option](sel.slice(1)));
    } else {
      result = (document.getElementsByTagName(sel));
    }

    return ((result.length < 2) ? result[0]: result);
  } else {
    return sel;
  }
};

//Method $util().each(function(el){});
window.NodeList.prototype.each = Array.prototype.forEach;

//Method $util().html('div');
window.Element.prototype.html = function(content) {
  if(content) {
    this.innerHTML = content;       
  } else {
    return this.innerHTML;
  }

  return this;
}

window.NodeList.prototype.html = function(content) {
  if (content) {
    this.each(function(el) {
      el.html(content);
    });
  } else {
    return this[0].html();
  }

  return this;
}

//Method $util().hide(); 
//Method $util().show();
window.Element.prototype.hide = function() {
  this.style.display = 'none';
  return this;
}

window.NodeList.prototype.hide = function() {
  this.each(function(el) {
    el.hide();
  });
  return this;
}

window.Element.prototype.show = function() {
  this.style.display = 'block';
  return this;
}

window.NodeList.prototype.show = function() {
  this.each(function(el) {
    el.show();
  });
  return this;
}

// Method $util().on(eventType, callback);
window.Element.prototype.on = function(eventType, callback) {
  eventType = eventType.split(' ');
  for (var i = 0; i < eventType.length; i++) {
    this.addEventListener(eventType[i], callback);
  }
  return this;
};

window.NodeList.prototype.on = function(eventType, callback) {
  this.each(function(el){
    el.on(eventType, callback);
  });
  return this;
};

// Method $util().addClass(class);
window.Element.prototype.addClass = function(name) {
  this.classList.add(name);
  return this;
};

window.NodeList.prototype.addClass = function(name) {
  this.each(function(el) {
    el.classList.add(name);
  });
  return this;
};

//Method $util().removeClass(class);
window.Element.prototype.removeClass = function(name) {
  this.classList.remove(name);
  return this;
};

window.NodeList.prototype.removeClass = function(name){
  this.each(function(el) {
    el.classList.remove(name);
  });
  return this;
};

//Method $util().hasClass('');
window.Element.prototype.hasClass = function(name) {
  return this.classList.contains(name);
};

window.NodeList.prototype.hasClass = function(name) {
  return this[0].hasClass(name);
};

// Method $util('input').val()
window.Element.prototype.val = function(value) {
  if (value) {
    this.value = value;
    return this;
  } else {
    return this.value;
  }
};

window.NodeList.prototype.val = function(value) {
  if (value){
    this.each(function(el) {
        el.val(value);
    });
  } else {
    return this[0].val();
  }

  return this;
};
