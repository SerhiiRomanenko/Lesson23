// 'use strict';
/*global $*/

const accordionData = [
    {
        title: 'London',
        content: `London is the capital and largest city of England and the United Kingdom.
        The city stands on the River Thames in the south-east of England,
        at the head of its 50-mile (80 km) estuary leading to the North Sea.`,
    },
    {
        title: 'Madrid',
        content: `Madrid is the capital and most-populous city of Spain. The city has almost 3.4 million
        inhabitants and a metropolitan area population of approximately 6.7 million.
        It is the second-largest city in the European Union, surpassed only by Berlin in its administrative limits.`,
    },
    {
        title: 'Paris',
        content: `Paris is the capital and most populous city of France, with an estimated population of
        2,175,601 residents as of 2018, in an area of more than 105 square kilometres (41 square miles).`,
    },
    {
        title: 'Barcelona',
        content: `Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city
        of the autonomous community of Catalonia, as well as the second most populous municipality of Spain.`,
    },
    {
        title: 'Milan',
        content: `Milan is a city in northern Italy, capital of Lombardy, and the second-most populous city proper
        in Italy after Rome. It is the only European city wealthier than its corresponding capital.`,
    },
];

$(accordionData).map((index, item) => {
    const $wrap = $('<div>');
    $('#section').append($wrap);

    const $title = $('<h2>');
    $title.text(item.title);
    $($wrap).append($title);

    const $info = $('<p>');
    $info.text(item.content);
    $($wrap).append($info);
    $info.hide();
});

$('div').map((i, item) => {
    $(item).on('click', () => {
        $('p').slideUp();
        const target = $(item).find('p');
        $(target).slideDown();
    });
});
