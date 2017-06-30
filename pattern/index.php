<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Pattern Primer</title>
<link rel="stylesheet" href="css/styles.css">
<link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet">
<style>
.pattern {
  clear: both;
  float: left;
  margin: 0 0 3em;
  width: 100%;
  border: 1px solid;
  border-color: #e5e5e5;
  border-radius: 3px;
}

.display {
    padding: 10px;
  width: auto;
  background-color: #fff;
  overflow: hidden;
}

.link {
    color: #004b6a;
  background-color: #fbf9f9;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.4);
  padding: 0.5em 1%;
  overflow: hidden;
  display: block;
  border-bottom: 1px solid;
  border-color: #e5e5e5;
  border-color: rgba(229, 229, 229, 0.5);
  border-radius: 3px 3px 0 0;
}
.pattern .source textarea {
    width: 90%;
}
</style>
</head>
<body>
  <div class="pp-header"></div>
  <div class="wrapper">

    <?php
    $files = array();
    $handle=opendir('patterns');
    while (false !== ($file = readdir($handle))):
        if(substr($file, -5) == '.html'):
            $files[] = $file;
        endif;
    endwhile;
    sort($files);
    foreach ($files as $file):
        echo '<div class="pattern">';
        echo '<div class="display">';
        include('patterns/'.$file);
        echo '</div>';
        echo '<div class="source">';
        echo '<div class="details">';
        echo '<pre><code class="pattern-markup  language-markup">';
        echo htmlspecialchars(file_get_contents('patterns/'.$file));
        echo '</code></pre>';
        echo '<div class="link">Fuente: <a href="patterns/'.$file.'">'.$file.'</a></div>';
        echo '</div>';
        echo '</div>';
        echo '</div>';
    endforeach;
    ?>
  </div>
  <script src="js/prism.js"></script>
</body>
</html>
