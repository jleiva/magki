JavaScript Coding Standards
===========================

A manera general queremos:

* Ser descriptivo con nombres de variables, m&eacute;todos, funciones, etc.
* camelCase para nombrar objetos, funciones e instancias, ejem: `thisIsMyObject`, `thisIsMyFunction`
* PascalCase cuando nombre constructores o clases.
* Un guión bajo (_) adelante de la variable cuando se nombre propiedades privadas, ejem: `var __firstName`
* Cuando se guarde una referencia a `this` usa `_this`
* Nombre sus funciones. Esto será de ayuda en caso de errores.

## <a name='TOC'>Tabla de Contenido</a>

  1. [Tipos](#types)
  1. [Objetos](#objects)
  1. [Arreglos](#arrays)
  1. [Cadenas de Texto](#strings)
  1. [Funciones](#functions)
  1. [Propiedades](#properties)
  1. [Variables](#variables)
  1. [Hoisting](#hoisting)
  1. [Expresiones de comparación e igualdad](#conditionals)
  1. [Bloques](#blocks)
  1. [Comentarios](#comments)
  1. [Espacios en blanco](#whitespace)
  1. [Comas](#commas)
  1. [Puntos y Comas](#semicolons)
  1. [Casting de Tipos & Coerción](#type-coercion)
  1. [Convenciones de nomenclatura](#naming-conventions)
  1. [Funciones de Acceso](#accessors)
  1. [Constructores](#constructors)
  1. [Eventos](#events)
  1. [Módulos](#modules)
  1. [jQuery](#jquery)
  1. [Compatibilidad con ES5](#es5)
  1. [Pruebas](#testing)
  1. [Desempeño](#performance)
  1. [Recursos](#resources)
  1. [En la cancha](#in-the-wild)
  1. [Traducciones](#translation)
  1. [La guía de la Guía del Estilo JavaScript](#guide-guide)
  1. [Colaboradores](#contributors)
  1. [Charla con nosotros sobre Javascript](#chat-with-us-about-javascript)
  1. [Licencia](#license)

## <a name='types'>Tipos</a>

  - **Primitivos**: Cuando accesas a un tipo primitivo, manejas directamente su valor

    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

    ```javascript
    var foo = 1;
    var bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```
  - **Complejo**: Cuando accesas a un tipo complejo, manejas la referencia a su valor.

    + `object`
    + `array`
    + `function`

    ```javascript
    var foo = [1, 2];
    var bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**

## <a name='objects'>Objetos</a>

  - Usa la sintaxis literal para la creación de un objeto.

    ```javascript
    // mal
    var item = new Object();

    // bien
    var item = {};
    ```

  - No uses [palabras reservadas](http://es5.github.io/#x7.6.1) para nombres de propiedades. No funciona en IE8. [Más información](https://github.com/airbnb/javascript/issues/61)

    ```javascript
    // mal
    var superman = {
      default: { clark: 'kent' },
      private: true
    };

    // bien
    var superman = {
      defaults: { clark: 'kent' },
      hidden: true
    };
    ```

  - Usa sinónimos legibles en lugar de palabras reservadas.

    ```javascript
    // mal
    var superman = {
      class: 'alien'
    };

    // mal
    var superman = {
      klass: 'alien'
    };

    // bien
    var superman = {
      type: 'alien'
    };
    ```
    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**

## <a name='arrays'>Arreglos</a>

  - Usa la sintaxis literal para la creación de arreglos

    ```javascript
    // mal
    var items = new Array();

    // bien
    var items = [];
    ```

  - Usa Array#push, en vez de asignación directa, para agregar elementos a un arreglo.

    ```javascript
    var someStack = [];

    // mal
    someStack[someStack.length] = 'abracadabra';

    // bien
    someStack.push('abracadabra');
    ```

  - Cuando necesites copiar un arreglo usa Array#slice. [jsPerf](http://jsperf.com/converting-arguments-to-an-array/7)

    ```javascript
    var len = items.length;
    var itemsCopy = [];
    var i;

    // mal
    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // bien
    itemsCopy = items.slice();
    ```

  - Para convertir un objeto ["array-like" (similar a un arreglo)](https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-7/array-like-objects) a un arreglo, usa Array#slice.

    ```javascript
    function trigger() {
      var args = Array.prototype.slice.call(arguments);
      ...
    }
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='strings'>Cadenas de Texto</a>

  - Usa comillas simples `''` para las cadenas de texto

    ```javascript
    // mal
    var name = "Bob Parr";

    // bien
    var name = 'Bob Parr';

    // mal
    var fullName = "Bob " + this.lastName;

    // bien
    var fullName = 'Bob ' + this.lastName;
    ```

  - Las cadenas de texto con una longitud mayor a 100 caracteres deben ser escritas en múltiples líneas usando concatenación.

  > **Nota:** Cuando se usa sin criterio, las cadenas de texto largas pueden impactar en el desempeño. [jsPerf](http://jsperf.com/ya-string-concat) & [Discusión](https://github.com/airbnb/javascript/issues/40)


  - Cuando se crea programáticamente una cadena de texto, use Array#join en vez de concatenación. Sobretodo por IE: [jsPerf](http://jsperf.com/string-vs-array-concat/2).  

    ```javascript
    var items;
    var messages;
    var length;
    var i;

    messages = [{
      state: 'success',
      message: 'This one worked.'
    },{
      state: 'success',
      message: 'This one worked as well.'
    },{
      state: 'error',
      message: 'This one did not work.'
    }];

    length = messages.length;

    // mal
    function inbox(messages) {
      items = '<ul>';

      for (i = 0; i < length; i++) {
        items += '<li>' + messages[i].message + '</li>';
      }

      return items + '</ul>';
    }

    // bien
    function inbox(messages) {
      items = [];

      for (i = 0; i < length; i++) {
        // usa asignacion directa aqui porque estamos micro-optimizando
        items[i] = '<li>' + messages[i].message + '</li>';
      }

      return '<ul>' + items.join('') + '</ul>';
    }
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='functions'>Funciones</a>

  - Expresiones de función:

    ```javascript
    // expresion de funcion anonima
    var anonymous = function() {
      return true;
    };

    // expresion de funcion nombrada
    var named = function named() {
      return true;
    };

    // expresion de funcion inmediatamente invocada (IIFE)
    (function() {
      console.log('Welcome to the Internet. Please follow me.');
    })();
    ```

  - Nunca declares una función en un bloque que no sea de función (if, while, etc). En vez de ello, asigna la función a una variable. Los navegadores te permitirán hacerlo pero todos ellos lo interpretarán de modo diferente, lo que es lamentable.

  - Nunca nombres a un parámetro como `arguments`, esto tendrá precedencia sobre el objeto `arguments` que es brindado en cada ámbito de función.

    ```javascript
    // mal
    function nope(name, options, arguments) {
      // ...algo...
    }

    // bien
    function yup(name, options, args) {
      // ...algo...
    }
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**



## <a name='properties'>Propiedades</a>

  - Usa la notación de punto `.` cuando accedas a las propiedades.

    ```javascript
    var luke = {
      jedi: true,
      age: 28
    };

    // mal
    var isJedi = luke['jedi'];

    // bien
    var isJedi = luke.jedi;
    ```

  - Usa la notación subscript `[]` cuando accedas a las propiedades con una variable.

    ```javascript
    var luke = {
      jedi: true,
      age: 28
    };

    function getProp(prop) {
      return luke[prop];
    }

    var isJedi = getProp('jedi');
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='variables'>Variables</a>

  - Siempre usa `var` para declarar variables. No hacerlo resultará en variables globales. Debemos evitar contaminar el espacio global (global namespace). El [Capitán Planeta](https://es.wikipedia.org/wiki/Capit%C3%A1n_Planeta_y_los_planetarios) nos advirtió de eso.

    ```javascript
    // mal
    superPower = new SuperPower();

    // bien
    var superPower = new SuperPower();
    ```

  - Usa una declaración `var` por variable. Es más fácil agregar nuevas declaraciones de variables de este modo, y no tendrás que preocuparte por reemplazar `;` por `,` o introducir diffs de sólo puntuación .

    ```javascript
    // mal
    var items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';

    // mal
    // (compara con lo de arriba y encuentra el error)
    var items = getItems(),
        goSportsTeam = true;
        dragonball = 'z';

    // bien
    var items = getItems();
    var goSportsTeam = true;
    var dragonball = 'z';
    ```

  - Declara a las variables sin asignación al final. Esto es útil cuando necesites asignar una variable luego dependiendo de una de las variables asignadas previamente.

    ```javascript
    // mal
    var i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // mal
    var i;
    var items = getItems();
    var dragonball;
    var goSportsTeam = true;
    var len;

    // bien
    var items = getItems();
    var goSportsTeam = true;
    var dragonball;
    var length;
    var i;
    ```

  - Asigna las variables al inicio de su ámbito. Esto ayuda a evitar inconvenientes con la declaración de variables y temas relacionados a 'hoisting'.

    ```javascript
    // mal
    function() {
      test();
      console.log('doing stuff..');

      //..otras cosas..

      var name = getName();

      if (name === 'test') {
        return false;
      }

      return name;
    }

    // bien
    function() {
      var name = getName();

      test();
      console.log('doing stuff..');

      //..otras cosas..

      if (name === 'test') {
        return false;
      }

      return name;
    }

    // mal - llamada a funcion innecesaria
    function() {
      var name = getName();

      if (!arguments.length) {
        return false;
      }

      this.setFirstName(name);

      return true;
    }

    // bien
    function() {
      if (!arguments.length) {
        return false;
      }

      var name = getName();
      this.setFirstName(name);

      return true;
    }
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='hoisting'>Hoisting</a>

  - Las declaraciones de variables son movidas a la parte superior de su ámbito, sin embargo su asignación no.

    ```javascript
    // sabemos que esto no funcionara (asumiendo
    // que no hay una variable global notDefined)
    function example() {
      console.log(notDefined); // => lanza un ReferenceError
    }

    // crear una declaracion de variable luego
    // que referencies a la variable funcionara
    // por el hoisting. Nota: A la asignacion
    // del valor `true` no se le aplico hoisting.
    function example() {
      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;
    }

    // El interprete lleva la declaracion de la
    // variable a la parte superior de la funcion.
    // Eso significa que nuestro ejemplo
    // podria ser reescrito como:
    function example() {
      var declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }
    ```

  - Expresiones de función anónimas hacen hoisting de su nombre de variable, pero no de la asignación de la función.

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function() {
        console.log('anonymous function expression');
      };
    }
    ```

  - Expresiones de función nombradas hacen hoisting de su nombre de variable, pero no del nombre de la función ni del contenido de la función.

    ```javascript
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {
        console.log('Flying');
      };
    }

    // lo mismo es cierto cuando el nombre
    // de la funcion es igual al nombre de
    // la variable.
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {
        console.log('named');
      }
    }
    ```

  - Las declaraciones de función hacen hoist de su nombre y del contenido de la función.

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log('Flying');
      }
    }
    ```

  - Para más información lee [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting) por [Ben Cherry](http://www.adequatelygood.com/)

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**



## <a name='conditionals'>Expresiones de comparación e igualdad</a>

  - Usa `===` y `!==` en vez de `==` y `!=` respectivamente.
  - Expresiones condicionales son evaluadas usando coerción con el método `ToBoolean` y siempre obedecen a estas reglas sencillas:

    + **Objects** son evaluados como **true** (también considera así al objeto vacío ```{}``` y arreglos sin contenido ```[]```)
    + **Undefined** es evaluado como **false**
    + **Null** es evaluado como **false**
    + **Booleans** son evaluados como **el valor del booleano**
    + **Numbers** son evaluados como **false** si **+0**, **-0**, o **NaN**, de otro modo **true**
    + **Strings** son evaluados como **false** si es una cadena de texto vacía `''`, de otro modo son **true**

    ```javascript
    if ([0]) {
      // true
      // un arreglo es un objeto, los objetos son evaluados como true
    }
    ```

  - Usa atajos.

    ```javascript
    // mal
    if (name !== '') {
      // ...stuff...
    }

    // bien
    if (name) {
      // ...stuff...
    }

    // mal
    if (collection.length > 0) {
      // ...stuff...
    }

    // bien
    if (collection.length) {
      // ...stuff...
    }
    ```

  - Para más información revisa [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) por Angus Croll

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='blocks'>Bloques</a>

  - Usa llaves con todos los bloques de múltiples líneas.

    ```javascript
    // mal
    if (test)
      return false;

    // bien
    if (test) return false;

    // bien
    if (test) {
      return false;
    }

    // mal
    function() { return false; }

    // bien
    function() {
      return false;
    }
    ```

  - Si estás usando bloques de muchas líneas con ```if``` y ```else```, pon el ```else``` en la misma línea que el ```if```.

    ```javascript
    // mal
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }

    // bien
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='comments'>Comentarios</a>

  - Usa `/** ... */` para comentarios de múltiples líneas. Incluye una descripción, especificación de tipos y valores para todos los parámetros y valores de retorno.

    ```javascript
    // mal
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param {String} tag
    // @return {Element} element
    function make(tag) {

      // ...stuff...

      return element;
    }

    // bien
    /**
     * make() returns a new element
     * based on the passed in tag name
     *
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {

      // ...stuff...

      return element;
    }
    ```

  - Usa `//` para comentarios de una sola línea. Ubica los comentarios de una sola línea encima de la sentencia comentada. Deja una línea en blanco antes del comentario.

    ```javascript
    // mal
    var active = true;  // is current tab

    // bien
    // is current tab
    var active = true;

    // mal
    function getType() {
      console.log('fetching type...');
      // set the default type to 'no type'
      var type = this._type || 'no type';

      return type;
    }

    // bien
    function getType() {
      console.log('fetching type...');

      // set the default type to 'no type'
      var type = this._type || 'no type';

      return type;
    }
    ```

  - Agregando a tus comentarios los prefijos `FIXME` o `TODO`, ayudará a otros desarrolladores a entender rápidamente si estás apuntando a un problema que precisa ser revisado o si estás sugiriendo una solución al problema que debería ser implementado. Estos son diferentes a comentarios regulares en el sentido que requieren alguna acción. Las acciones son `FIXME -- necesito resolver esto` o `TODO -- necesita implementarse`.

  - Usa `// FIXME:` para anotar problemas.

    ```javascript
    function Calculator() {

      // FIXME: shouldn't use a global here
      total = 0;

      return this;
    }
    ```

  - Usa `// TODO:` para anotar soluciones a los problemas.

    ```javascript
    function Calculator() {

      // TODO: total should be configurable by an options param
      this.total = 0;

      return this;
    }
  ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='whitespace'>Espacios en blanco</a>

  - Usa indentaciones blandas (sin TAB)  establecidas en dos espacios.

    ```javascript
    // mal
    function() {
    ∙∙∙∙var name;
    }

    // mal
    function() {
    ∙var name;
    }

    // bien
    function() {
    ∙∙var name;
    }
    ```
  - Deja un espacio antes de la llave de apertura.

    ```javascript
    // mal
    function test(){
      console.log('test');
    }

    // bien
    function test() {
      console.log('test');
    }

    // mal
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog'
    });

    // bien
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog'
    });
    ```

  - Deja un espacio antes del paréntesis de apertura en las sentencias de control (```if```, ```while```, etc.). No dejes espacios antes de la lista de argumentos en las invocaciones y declaraciones de funciones.
    ```javascript
    // mal
    if(isJedi) {
      fight ();
    }

    // bien
    if (isJedi) {
      fight();
    }

    // mal
    function fight () {
      console.log ('Swooosh!');
    }

    // bien
    function fight() {
      console.log('Swooosh!');
    }
    ```

  - Separa a los operadores con espacios.
    ```javascript
    // mal
    var x=y+5;

    // bien
    var x = y + 5;
    ```

  - Deja una línea en blanco al final del archivo.

    ```javascript
    // mal
    (function(global) {
      // ...algo...
    })(this);
    ```

    ```javascript
    // mal
    (function(global) {
      // ...algo...
    })(this);↵
    ↵

    ```

    ```javascript
    // bien
    (function(global) {
      // ...algo...
    })(this);↵

    ```

  - Usa indentación cuando uses métodos largos con 'chaining'. Emplea un punto adelante en cada nueva línea, lo que enfatiza que es un método llamado no una nueva sentencia.

    ```javascript
    // mal
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // mal
    $('#items').
      find('.selected').
        highlight().
        end().
      find('.open').
        updateCount();

    // bien
    $('#items')
      .find('.selected')
        .highlight()
        .end()
      .find('.open')
        .updateCount();

    // mal
    var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
        .attr('width',  (radius + margin) * 2).append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);

    // bien
    var leds = stage.selectAll('.led')
        .data(data)
      .enter().append('svg:svg')
        .class('led', true)
        .attr('width',  (radius + margin) * 2)
      .append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);
    ```

  - Deja una línea en blanco luego de los bloques y antes de la siguiente sentencia.

    ```javascript
    // bad
    if (foo) {
      return bar;
    }
    return baz;

    // good
    if (foo) {
      return bar;
    }

    return baz;

    // bad
    var obj = {
      foo: function() {
      },
      bar: function() {
      }
    };
    return obj;

    // good
    var obj = {
      foo: function() {
      },

      bar: function() {
      }
    };

    return obj;
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**

## <a name='commas'>Comas</a>

  - Comas al inicio de línea: **Nop.**

    ```javascript
    // mal
    var story = [
        once
      , upon
      , aTime
    ];

    // bien
    var story = [
      once,
      upon,
      aTime
    ];

    // mal
    var hero = {
        firstName: 'Bob'
      , lastName: 'Parr'
      , heroName: 'Mr. Incredible'
      , superPower: 'strength'
    };

    // bien
    var hero = {
      firstName: 'Bob',
      lastName: 'Parr',
      heroName: 'Mr. Incredible',
      superPower: 'strength'
    };
    ```

  - Coma adicional al final: **Nop.** Esto puede provocar problemas en IE6/7 o IE9 si está en quirksmode. Además, en algunas implementaciones de ES3 se puede aumentar la longitud del arreglo si se tiene una coma adicional al final. Esto fue clarificado en ES5 ([fuente](http://es5.github.io/#D)):

  > La Edición 5 aclara el hecho de que dejar una coma al final de un ArrayInitialiser (inicialización de un arreglo) no aumenta la longitud del arreglo. Esto no es un cambio semántico a la Edición 3 pero algunas implementaciones tal vez malinterpretaron esto.

    ```javascript
    // mal
    var hero = {
      firstName: 'Kevin',
      lastName: 'Flynn',
    };

    var heroes = [
      'Batman',
      'Superman',
    ];

    // bien
    var hero = {
      firstName: 'Kevin',
      lastName: 'Flynn'
    };

    var heroes = [
      'Batman',
      'Superman'
    ];
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='semicolons'>Puntos y Comas</a>

  - **Sip.**

    ```javascript
    // mal
    (function() {
      var name = 'Skywalker'
      return name
    })()

    // bien
    (function() {
      var name = 'Skywalker';
      return name;
    })();

    // super bien (evita que la funcion se vuelva un argumento
    // cuando dos archivos con IIFEs sean concatenados)
    ;(function() {
      var name = 'Skywalker';
      return name;
    })();
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='type-coercion'>Casting de Tipos & Coerción</a>

  - Ejecuta coerción al inicio de una sentencia.
  - Strings:

    ```javascript
    //  => this.reviewScore = 9;

    // mal
    var totalScore = this.reviewScore + '';

    // bien
    var totalScore = '' + this.reviewScore;

    // mal
    var totalScore = '' + this.reviewScore + ' total score';

    // bien
    var totalScore = this.reviewScore + ' total score';
    ```

  - Usa `parseInt` para números y siempre con la base numérica para el casting de tipo.

    ```javascript
    var inputValue = '4';

    // mal
    var val = new Number(inputValue);

    // mal
    var val = +inputValue;

    // mal
    var val = inputValue >> 0;

    // mal
    var val = parseInt(inputValue);

    // bien
    var val = Number(inputValue);

    // bien
    var val = parseInt(inputValue, 10);
    ```

  - Si por alguna razón estás haciendo algo salvaje y `parseInt` es un cuello de botella por lo que necesitaste usar Bitshift por [razones de desempeño](http://jsperf.com/coercion-vs-casting/3), deja un comentario explicando qué y porqué lo estás haciendo.

    ```javascript
    // bien
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    var val = inputValue >> 0;
    ```

  > **Nota:** Ten mucho cuidado al hacer operaciones de Bitshift. En Javascript los números son representados como [valores de 64-bit](http://es5.github.io/#x4.3.19), sin embargo las operaciones de Bitshift siempre retornan un entero de 32-bits ([fuente](http://es5.github.io/#x11.7)). Bitshift puede presentarnos un comportamiento inesperado para valores enteros mayores a 32 bits. [Discusión](https://github.com/airbnb/javascript/issues/109). El mayor entero con signo de 32 bits es 2,147,483,647:
  ```javascript
  2147483647 >> 0 //=> 2147483647
  2147483648 >> 0 //=> -2147483648
  2147483649 >> 0 //=> -2147483647
  ```

  - Booleans:

    ```javascript
    var age = 0;

    // mal
    var hasAge = new Boolean(age);

    // bien
    var hasAge = Boolean(age);

    // bien
    var hasAge = !!age;
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**

## <a name='accessors'>Funciones de Acceso</a>

  - Funciones de acceso para las propiedades no son requeridas.
  - Si creas funciones de acceso usa  ```getVal()``` y ```setVal('hello')```.

    ```javascript
    // mal
    dragon.age();

    // bien
    dragon.getAge();

    // mal
    dragon.age(25);

    // bien
    dragon.setAge(25);
    ```

  - Si la propiedad es un booleano, usa ```isVal()``` o ```hasVal()```.

    ```javascript
    // mal
    if (!dragon.age()) {
      return false;
    }

    // bien
    if (!dragon.hasAge()) {
      return false;
    }
    ```

  - Está bien crear funciones ```get()``` y ```set()```, pero sé consistente.

    ```javascript
    function Jedi(options) {
      options || (options = {});
      var lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
    }

    Jedi.prototype.set = function(key, val) {
      this[key] = val;
    };

    Jedi.prototype.get = function(key) {
      return this[key];
    };
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='constructors'>Constructores</a>

  - Asigna métodos al objeto prototype, en vez de sobreescribir prototype con un nuevo objeto. La sobreescritura de prototype hace la herencia imposible: ¡reseteando prototype sobreescribirás la base!

    ```javascript
    function Jedi() {
      console.log('new jedi');
    }

    // mal
    Jedi.prototype = {
      fight: function fight() {
        console.log('fighting');
      },

      block: function block() {
        console.log('blocking');
      }
    };

    // bien
    Jedi.prototype.fight = function fight() {
      console.log('fighting');
    };

    Jedi.prototype.block = function block() {
      console.log('blocking');
    };
    ```

  - Métodos pueden retornar `this` para ayudar con el encadenamiento de métodos (chaining).

    ```javascript
    // mal
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
    };

    var luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20) // => undefined

    // bien
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return this;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
      return this;
    };

    var luke = new Jedi();

    luke.jump()
      .setHeight(20);
    ```


  - Está bien escribir un método toString() personalizado, solo asegúrate que funcione correctamente y no cause efectos colaterales.

    ```javascript
    function Jedi(options) {
      options || (options = {});
      this.name = options.name || 'no name';
    }

    Jedi.prototype.getName = function getName() {
      return this.name;
    };

    Jedi.prototype.toString = function toString() {
      return 'Jedi - ' + this.getName();
    };
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='events'>Eventos</a>

  - Cuando envíes paquetes de datos a los eventos (ya sea con eventos del DOM o algo propietario como los eventos de Backbone), pasa un mapa en vez de un valor directo. Esto permitirá a un próximo colaborador a agregar más datos al paquete de datos sin que tenga que encontrar o actualizar un handler para cada evento. Por ejemplo, en vez de:

    ```js
    // mal
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', function(e, listingId) {
      // hacer algo con listingId
    });
    ```

    prefiere:

    ```js
    // bien
    $(this).trigger('listingUpdated', { listingId : listing.id });

    ...

    $(this).on('listingUpdated', function(e, data) {
      // hacer algo con data.listingId
    });
    ```

  **[[⬆ regresar a la Tabla de Contenido]](#TOC)**


## <a name='modules'>Módulos</a>

  - El módulo debe empezar con un `!`. Esto asegura que si un módulo mal formado olvide incluir al final un punto y coma, no hayan errores en producción cuando los scripts sean concatenados. [Explicación](https://github.com/airbnb/javascript/issues/44#issuecomment-13063933)
  - El archivo debe ser nombrado con camelCase, residir en un fólder con el mismo nombre, y corresponder al nombre de la función a exportar.
  - Agrega un método `noConflict()` que reestablezca el módulo exportado a la versión anterior y retorne este módulo (para ser asignado a una variable).
  - Siempre declara `'use strict';` al inicio de cada módulo.

    ```javascript
    // fancyInput/fancyInput.js

    !function(global) {
      'use strict';

      var previousFancyInput = global.FancyInput;

      function FancyInput(options) {
        this.options = options || {};
      }

      FancyInput.noConflict = function noConflict() {
        global.FancyInput = previousFancyInput;
        return FancyInput;
      };

      global.FancyInput = FancyInput;
    }(this);
    ```

    **[[⬆ regresar a la Tabla de Contenido]](#TOC)**



**Otras guías de estilo**

  - [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) (Guía de Estilo de Javascript de Google)
  - [jQuery Core Style Guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines) (Lineamientos de Estilo con el núcleo de jQuery)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js/) (Idiomatic Javascript: Principios de Escritura Consistente)
  - [JavaScript Standard Style](https://github.com/feross/standard) (Estilo estándar de JavaScript)


## <a name='license'>Licencia</a>

(The MIT License)

Copyright (c) 2012 Airbnb

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[[⬆ regresar a la Tabla de Contenido]](#TOC)**

# };