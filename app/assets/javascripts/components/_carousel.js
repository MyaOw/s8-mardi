"use strict";

jQuery(document).ready(function ($) {

// définit l'intervalle entre les changements d'image
  let intervalle;
  intervalle = setInterval(function () {
    moveRight();
  }, 3000);

// arrête les changements au survol de l'image
  $('.slider').mouseover(function(){
    clearInterval(intervalle);
  });
  
  $('.slider').mouseleave(function(){
    intervalle = setInterval(function () {
      moveRight();
      }, 3000);
  });
  
// définit le nombre de slides et la largeur/hauteur de celles ci
// définit ensuite sliderUlWidth qui est la longueur totale des slides bout à bout
	let slideCount = $('.slider ul li').length;
	let slideWidth = $('.slider ul li').width();
	let slideHeight = $('.slider ul li').height();
	let sliderUlWidth = slideCount * slideWidth;
  
// définit la taille de _slider
	$('.slider').css({ width: slideWidth, height: slideHeight });
	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
  $('.slider ul li:last-child').prependTo('.slider ul');

// définit les animations au changement d'image
    function moveLeft() {
        $('.slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

// applique les fonctions move aux boutons
    $('.slider_prev').click(function () {
        moveLeft();
        return false;
    });

    $('.slider_next').click(function () {
        moveRight();
        return false;
    });

    // définit les paramètres pour les dots
    let slide1 = $('.slider ul li').eq(0);
    let slide2 = $('.slider ul li').eq(1);
    let slide3 = $('.slider ul li').eq(2);
    
    $('.dot1').click(function() {
      $(slide1).prependTo('.slider ul');
    });
    $('.dot2').click(function() {
      $(slide2).prependTo('.slider ul');
    });
    $('.dot3').click(function() {
      $(slide3).prependTo('.slider ul');
    });
});    
