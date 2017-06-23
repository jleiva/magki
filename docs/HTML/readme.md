HTML Coding Standards
====================

A manera general queremos:

* Indentar con **2** espacios, no tabs.
* Elementos anidados deben ser indentados una vez (2 espacios).
* Usar comillas dobles (`" "`), nunca comillas simples, en atributos. `<div class="valor"></div>`
* No incluir "trailing slash" (`/`) en elementos que se autocierran, es opcional seg&uacute;n la especificacio&oacute;n de HTML5.  `<img src="" alt="">`
* No omitir etiquetas de cierre. ejem: `</li> &oacute; </body>`.
* Separar atributos por un espacio.
* Siempre usar igual y comillas dobles para valores de atributos. `<img class="valor" alt="valor" src="">`
* Siempre incluir etiquetas `html`, `head`, y `body`.
* Siempre usar min&uacute;scula para nombre de etiquetas y atributos.
* Siempre incluir el atributo `alt` para imagenes.
* Separar responsabilidades. Mantener markup (HTML), estilos (CSS) y comportamiento (JS) separado.
* Utilice HTML de acuerdo a su propósito. Utilice elementos para lo que se han creado. Por ejemplo, utilice elementos de encabezado (`h1 - h6`) para encabezados, elementos `p` para párrafos, elementos `a` para anclajes, etc.

## HTML5 doctype

```HTML
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

## Block-level elements
Use elementos apropiados de HTML5 para bloques; en caso de duda, leer sobre el elemento en [html5rocks.com](https://www.html5rocks.com), [html5doctor](http://html5doctor.com/) &oacute; [MDN](https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5) y si no queda claro, usar `divs`

![alt text](http://devdocs.magento.com/common/images/h5d-sectioning-flowchart.png "http://html5doctor.com/")

## Atributo de lenguaje

```HTML
<html lang="es">
  <!-- ... -->
</html>
```

## Character encoding

```HTML
<head>
  <meta charset="UTF-8">
</head>
```

## IE compatibility mode

```HTML
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

## Inclusion de CSS y JavaScript
Siguiendo la especificacion de HTML5, no es obligatorio especificar el `type` cuando se incluye CSS y JavaScript como `text/css` y `text/javascript`, cuando estos valores son los default.

```HTML
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css">

<!-- In-document CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="code-guide.js"></script>
```

## Reducir markup
Siempre que sea posible, evitar escribir elementos "padre" innecesarios.

```HTML
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

## Formularios
Siempre incluir un atributo `for` para elementos `label`. 

```HTML
<!-- Bad Example -->
<label><input type="radio" name="input" value="first"> First</label>
 
<!-- Good Example -->
<input type="radio" name="input" id="input-1" value="first">
<label for="input-1">First</label>
```

No usar el atributo `placeholder` para etiquetas; siempre usar un elemento `label`.

```HTML
<!-- Bad Example -->
<input type="text" id="name" placeholder="Enter your name">
 
<!-- Good Example -->
<label for="name">Name</label>
<input id="name" type="text" placeholder="Jane Doe">
```

## Comentarios
Siempre son una buena idea.

```HTML
<!-- Good single line comment -->
 
<!--
Good example of a multi-line comment.
If your comment takes up multiple lines, please do this.
-->
```

## Nombre de Clases y Ids
Usar nombre semanticos para  Clases y Ids, evitar nombres de "presentaci&oacute;n".


```HTML
<!-- Bad Example -->
<button type="submit" class="button-green">Submit</button>

<!-- Good Example -->
<button type="submit" class="action-primary">Submit</button>
```

## Fuentes

* [HTML Style Guide](https://contribute.jquery.org/style-guide/html)
* [Code Guide by @mdo](http://codeguide.co/)
