<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>StSophia Homes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon.ico">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body class="uc-body">

  <?php include_once('includes/header.php') ?>

<section class="uc_nav">
  <ul class="header_wrapper flex">
    <li><a href="#uc_project">О проекте</a></li>
    <li><a href="#uc_complex">О комплексе</a></li>
    <li><a href="#uc_gallery">Галерея</a></li>
    <li><a href="#uc_advantages">Преимущества</a></li>
    <li><a href="#uc_technical">Характеристики</a></li>
    <li><a href="#uc_infra">Инфраструктура</a></li>
    <li><a href="#uc_flats">Квартиры</a></li>
    <li><a href="#uc_filter">Подбор по параметрам</a></li>
  </ul>
</section>

<section class="scrollspy uc_project" id="uc_project">
  <div class="uc_project__box">
    <p>Жилой комплекс</p>
    <p class="content_name">Crystal Park</p>
    <img src="/img/logos/cristalPark_vis.svg" alt="Crystal Park" style="width:110px; height:auto;">
    <table>
      <tr><td class="content_name">230</td>   <td>Кол-во квартир<br>в комплексе</td></tr>
      <tr><td class="content_name">1.281</td> <td>Общая <br>площадь, м<sup>2</sup> </td></tr>
      <tr><td class="content_name">4,5659</td><td>территория <br>комплекса, ГА</td></tr>
      <tr><td class="bold">Месторасположение:</td>       <td>г.Киев, ул.Раисы Окипной, 18</td></tr>
      <tr><td class="bold">Сроки сдачи:</td>             <td>2-й квартал 2019 года</td></tr>
      <tr><td class="bold">Цена, м<sup>2</sup>:</td>     <td>10.000 грн</td></tr>
      <tr><td class="bold">Метражи квартир:</td>         <td>от 53 м<sup>2</sup> до 120 м<sup>2</sup></td></tr>
    </table>
  </div>
  <div class="label_box">
    Осталось всего <span class="bold">5 квартир</span>
  </div>

</section>

<?php include_once('includes/banner.php') ?>

<section class="scrollspy" id="uc_complex">
  О комплексе

</section>
<section class="scrollspy" id="uc_gallery">
галлерея
</section>
<section class="scrollspy" id="uc_advantages">
  преимущества

</section>

<section class="scrollspy" id="uc_technical">
  тех.характеристики

</section>
<section class="scrollspy main_map" id="uc_infra">
  <div class="main_map__inner" id="map"></div>
</section>

<section class="scrollspy" id="uc_flats">

</section>
<section class="scrollspy" id="uc_filter">

</section>






    <section class="main_news">
      <div class="wrapper">
        <div class="main_news__top">
          <div class="content_name">
            новости
          </div>
          <a class="grey_button" href="/news">Cмотреть все новости</a>
        </div>
        <div class="main_news__box flex">
          <div class="main_news__item">
            <figure class="effect-julia">
              <img src="/img/main/project_2.jpg" alt=""/>
              <figcaption>
                <div class="main_news_prev">
                  <p>По ввоей сути рыба-текст является</p>
                  <p>фльтернативой современному</p>
                  <p>lorem ipsum, который вызывает у </p>
                  <p>некторых людей недоумение при </p>
                  <p>попытках прочитать рыбу текст. </p>
                </div>
                <a href="#"></a>
              </figcaption>
            </figure>
            <div class="main_news__prev">
              <p class="subname">Большие скидки на квартиры в Ambassador house</p>
              <div class="main_news__date">
                <svg class="calendar"><use xlink:href="#calendar"></use></svg>
                <span>30.09.2018</span><span>|</span><span>14:15</span>
              </div>
            </div>
          </div>
          <div class="main_news__item">
            <figure class="effect-julia">
              <img src="/img/main/project_3.jpg" alt=""/>
              <figcaption>
                <div class="main_news_prev">
                  <p>По ввоей сути рыба-текст является</p>
                  <p>фльтернативой современному</p>
                  <p>lorem ipsum, который вызывает у </p>
                  <p>некторых людей недоумение при </p>
                  <p>попытках прочитать рыбу текст. </p>
                </div>
                <a href="#"></a>
              </figcaption>
            </figure>
            <div class="main_news__prev">
              <p class="subname">Большие скидки в Ambassador house</p>
              <div class="main_news__date">
                <svg class="calendar"><use xlink:href="#calendar"></use></svg>
                <span>30.09.2018</span><span>|</span><span>14:15</span>
              </div>
            </div>
          </div>
          <!-- end .main_news__item -->
        </div>
        <!-- end main_news__box -->
      </div>
    </section>



<?php include_once('includes/footer.php') ?>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDehzKltJ2hA0p9O2BWYkXG2Z4q7A-3TTM&sensor=false"></script>
<script src="/js/map.js"></script>
  </body>
</html>
