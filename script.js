// In this exercise, you’ll write some jQuery statements to perform some DOM manipulation

// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

$(function () {
	console.log('Let’s get ready to party with jQuery!');
});

// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

$('article img').addClass('image-center');

// 3. Remove the last paragraph in the article.

const lastIndex = $('article p').length - 1;
$('article p').eq(lastIndex).remove();
// OR
// $('article p:last-child').remove();

// 4. Set the font size of the title to be a random pixel size from 0 to 100.

const fontSize = Math.floor(Math.random() * 101);
$('#title').css('font-size', `${fontSize}px`);

// 5. Add an item to the list; it can say whatever you want.

$('<li>').text('I can say whatever you want.').appendTo('ol');

// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.

$('aside').children().remove();
$('<p>').text('I’m apologizing for the list’s existence.').appendTo('aside');

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$('input').on('keyup blur change', function () {
	const r = $('input').eq(0).val();
	const g = $('input').eq(2).val();
	const b = $('input').eq(1).val();
	console.log($(this).val());
	$('body').css('background-color', `rgb(${r}, ${g}, ${b})`);
});

// 8. Add an event listener so that when you click on the image, it is removed from the DOM.

$('img').on('click', function () {
	$(this).remove();
});
