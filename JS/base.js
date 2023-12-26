let buttons = document.querySelectorAll('button');

buttons.forEach(function(button)
{
    button.addEventListener('click', function()
    {
        showButton(button.textContent);
    });
});

function showButton(buttonText)
{
    document.querySelector('input').value += buttonText;
}