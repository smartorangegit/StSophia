<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Объекты | StSophia Homes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon.ico">
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <?php include_once('includes/header.php') ?>

    <section class="objects">
      <div class="wrapper">
        <div class="content_name">Наши объекты</div>
      </div>
    </section>
    <section class="contacts_map">
      <div class="contacts_map__inner" id="sophia"></div>
    </section>
    <style media="screen">
      .map__info-marker .content_name{
        font-size: 30px;
        font-family: 'CenturyGothic';
        margin: 8px auto;
      }
      .gm-style .gm-style-iw {
        text-align: center;
        }
    </style>


  <?php include_once('includes/footer.php') ?>
  <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDehzKltJ2hA0p9O2BWYkXG2Z4q7A-3TTM"></script>
  <script defer src="/js/map1.js"></script>
  </body>
</html>
