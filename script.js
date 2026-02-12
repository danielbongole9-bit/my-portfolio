const btn = document.getElementById('colorBtn');
const contactpanel = document.getElementById('Contactpanel');
btn.addEventListener('click', () =>
{
    contactpanel.classList.toggle('show');
});
const glow = document.querySelector('.background-circle');
// List of cool engineering colors
const colors = [
    'linear-gradient(4deg, #00f2fe, #4facfe)', // Blue
    'linear-gradient(45deg, #8e2de2, #4a00e0)', // Purple
    'linear-gradient(45deg, #f093fb, #f5576c)', //Pink
    'linear-gradient(45deg, #43e97b, #38f9d7)', // Green 
];

let index = 0;
btn.addEventListener('click', () =>
{
    index = (index + 1) % colors[index];
    // Add a little 'shake' effect to the card when clicked
    document.querySelector('.card').computedStyleMap.transform = 'scale(0.95)';
    setTimeout(() => {

        document.querySelector('.card').computedStyleMap.transform = 'scale(1)';
    }, 100);
});