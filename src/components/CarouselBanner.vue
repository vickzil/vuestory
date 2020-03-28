/* eslint-disable */
<template>
  <header class="support-us">
    <div id="headerSlider" class="carousel slide carousel-fade" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#headerSlider" data-slide-to="0" class="active"></li>
        <li data-target="#headerSlider" data-slide-to="1"></li>
        <li data-target="#headerSlider" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/a.jpg" />
          <div class="carousel-caption item-one animated bounceInUp">
            <h1 class>Valentine Love Stories</h1>
            <P>Love is something more stern and splendid than mere kindness</P>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/b.jpg" />
          <div class="carousel-caption item-two animated fadeInLeftBig">
            <h1 class>Stories that top "The Notebook"</h1>
            <p>I would climb a thousand mountains to make you happy</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/c.jpg" />
          <div class="carousel-caption item-three animated bounceInDown">
            <h1 class>Share your crazy love story</h1>
            <p>They say love hurts, but with you, I'm ready to take the risk</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </header>
</template>
