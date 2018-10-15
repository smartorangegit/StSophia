<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Контакты | StSophia Homes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon.ico">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <?php include_once('includes/header.php') ?>

    <section class="contacts">
      <div class="wrapper">
        <div class="content_name">Наши контакты</div>
        <div class="contacts__box flex">
          <!-- <div class="footer__item">
            <div class="footer_name">&nbsp;</div>
            <svg class="footer_logo"><use xlink:href="#StSophia"></use></svg>
          </div> -->
          <div class="footer__item">
            <div class="footer_name">Контакты</div>
            <p class="flex">
              <svg class="footer_contact_svg"><use xlink:href="#phone"></use></svg>
              <span>+380 (044) 492 35 05</span>
            </p>
            <p class="flex">
              <svg class="footer_contact_svg"><use xlink:href="#letter"></use></svg>
              <span>sales@stsophia.ua</span>
            </p>
          </div>
          <div class="footer__item">
            <div class="footer_name">Офис</div>
            <p>01015, Украина, г. Киев,</p>
            <p>ул. Лаврская, 16 лит «В»</p>
          </div>
          <div class="footer__item">
            <div class="footer_name">Follow us</div>
            <div class="footer_social flex">
              <a href="#" class="footer_social__item"><svg><use xlink:href="#instagram"></use></svg></a>
              <a href="#" class="footer_social__item"><svg><use xlink:href="#fb"></use></svg></a>
              <a href="#" class="footer_social__item"><svg><use xlink:href="#youtube"></use></svg></a>
              <a href="#" class="footer_social__item"><svg style="margin-left: -1px"><use xlink:href="#telegram"></use></svg></a>
              <a href="#" class="footer_social__item"><svg><use xlink:href="#google1"></use></svg></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contacts_map">
      <div class="contacts_map__inner" id="map"></div>
      <div class="light_box">
        <div class="content_name">Получить консультацию</div>
        <p>менеджера</p>
        <form class="form_sales" action="#" method="post">
          <div class="input_outer">
            <input type="name" name="" placeholder="Имя, фамилия" value="" required>
          </div>
          <div class="input_outer">
            <input type="email" name="" placeholder="E-mail" value="" required>
          </div>
          <div class="input_outer">
            <input id="phone" type="tel" name="" placeholder="Телефон" value="" required>
          </div>
          <div class="input_outer">
            <input type="text" name="" placeholder="Сообщение" value="">
          </div>
          <div class="">
            <!-- капча -->
          </div>
          <div class="checkbox__outer flex">
            <input class="checkbox" type="checkbox" id="agree" name="feature" value="scales" checked />
            <label for="agree">Получать уведомления про акции и новости ST Sophia Homes</label>
          </div>
          <input type="submit" name="" value="Отправить сообщение">
        </form>
      </div>

    </section>


<?php include_once('includes/footer.php') ?>
<script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDehzKltJ2hA0p9O2BWYkXG2Z4q7A-3TTM&sensor=false"></script>
<script defer src="/js/map.js"></script>
  </body>
</html>
