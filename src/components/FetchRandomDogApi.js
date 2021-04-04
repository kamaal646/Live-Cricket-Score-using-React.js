import $ from 'jquery';

export const  btn = function fetchRandomDogApi()
{
    $.get('https://dog.ceo/api/breeds/image/random', function(data){

    var imageUrl = data.message;

    $('#dog-image').attr('src', imageUrl);
    })
}
//    $('#fetch-button').click(fetchRandomDogApi);
