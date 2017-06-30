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

/*******************/   
//Method $util('#iddiv').find('.inside');
window.Element.prototype.find = function(selector) {
  return $util(selector, this);
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

//Method $util().toggle();
window.Element.prototype.toggle = function() {
  if (this.style['display'] === 'block'){
    this.style['display'] = 'none';
  } else {
    this.style['display'] = 'block';
  }
  
  return this;
}

window.NodeList.prototype.toggle = function() {
  this.each(function(el) {
    el.toggle();
  });

  return this;    
}

//Method $util().append('div'); 
//Method $util().before('div');
window.Element.prototype.after = function(content) {
  this.innerHTML += content;
  return this;
}

window.NodeList.prototype.after = function(content) {
  this.each(function(el) {
    el.append(content);
  });

  return this;    
}

window.Element.prototype.before = function(content) {
  e = document.createElement('div');
  e.innerHTML = content;
  this.insertBefore(e, this.firstChild);
  
  return this;
}

window.NodeList.prototype.before = function(content) {
  this.each(function(el) {
    el.before(content);
  });
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

// Method $util().attr(name,value);
window.Element.prototype.attr = function(name, value) {
  if (value) {
    this.setAttribute(name, value);
    return this;
  } else {
    return this.getAttribute(name);
  }
};

window.NodeList.prototype.attr = function(name, value) {
  if(value) {
    this.each(function(el) {
      el.setAttribute(name, value);
    }); 
  } else {
    return this[0].getAttribute(name);
  }
  return this;
};
// Method $util().css(prop,value);
window.Element.prototype.css = function(prop, value) {
  if (value) {
    this.style[prop] = value;
    return this;
  } else {
    return this.style[prop];
  }
};

window.NodeList.prototype.css = function(prop, value) {
  if(value){
    this.each(function(el) {
      el.css(prop, value);
    }); 
  }else{
    return this[0].css(prop);
  }
  return this;
};

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

//Method $util('form').serialize(); 
window.Element.prototype.serialize = function() {
  var q = this.formElements();
  return q[0].join("&");
}

window.NodeList.prototype.serialize = function () {
  return this[0].serialize();
}

//Method $util.serialize({hello:'bye'});
$util.serialize = function(object){
  var k = [];
  for(var key in object) {
         k.push(key + "=" + encodeURIComponent(object[key]));
  }
  return k.join("&");
}

// Method $util('form').valid();
window.Element.prototype.valid = function() {
  var q = this.formElements();
  // if(q[1].length > 0){
  //     return q[1];
  // }
  return q;
}

window.NodeList.prototype.valid = function() {
  return this[0].valid();
}

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

//Method private
window.Element.prototype.formElements = function () {
    var form = this;
    var formInputs = document.querySelectorAll('input:required');

    if (!form || form.nodeName !== "FORM") {
        return;
    }
    var i, j, e = [], q = [];
    for (i = formInputs.length - 1; i >= 0; i = i - 1) {
        if (formInputs[i].name === "") {
            continue;
        }
        //Valid
        if(formInputs[i].required) {
            if(formInputs[i].value === '') {
              e.push(formInputs[i]);
            } else {
              switch (formInputs[i].nodeName) {
                case 'INPUT':
                  switch (formInputs[i].type) {
                    case 'email':
                      var re = /\S+@\S+\.\S+/;
                      if(!re.test(formInputs[i].value)) {
                        e.push(formInputs[i]);
                      }
                      q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                      break;
                    case 'tel': 
                    case 'number':
                      var numb = parseInt(formInputs[i].value);
                      if ( typeof numb !== 'number' | isNaN(numb)) {
                        e.push(formInputs[i]);
                      }
                      q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                      break;
                      case 'text':
                      case 'hidden':
                      case 'password':
                      case 'button':
                      case 'reset':
                      case 'submit':
                          q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                          break;
                      case 'checkbox':
                      case 'radio':
                        if (formInputs[i].checked) {
                          q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                        }                       
                        break;
                      case 'file':
                        break;
                  }
                break;           
                case 'TEXTAREA':
                  q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                break;
                case 'SELECT':
                  switch (formInputs[i].type) {
                  case 'select-one':
                    q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                    break;
                  case 'select-multiple':
                    for (j = formInputs[i].options.length - 1; j >= 0; j = j - 1) {
                      if (formInputs[i].options[j].selected) {
                        q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].options[j].value));
                      }
                    }
                    break;
                  }
                  break;
                case 'BUTTON':
                  switch (formInputs[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                      q.push(formInputs[i].name + "=" + encodeURIComponent(formInputs[i].value));
                    break;
                  }
                break;
              }
          }
        }
    }
    return [q,e];
}

// https://gist.github.com/raymonschouwenaar/84bc7def8fbfa06ffd84
var domIsReady = (function(domIsReady) {  
  var isBrowserIeOrNot = function() {
    return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
  }
  
  domIsReady = function(callback) {
    if(callback && typeof callback === 'function'){
      if(isBrowserIeOrNot() !== 'ie') {
        document.addEventListener("DOMContentLoaded", function() {          
            return callback();
        });
      } else {
        document.attachEvent("onreadystatechange", function() {
          if(document.readyState === "complete") {
            return callback();
          }
        });
      }
    } else {
      console.error('The callback is not a function!');
    }
  }
  
  return domIsReady;
})(domIsReady || {});