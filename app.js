function myEventListenerFunction() {
    const mainHeading = document.querySelector('h1');
    mainHeading.style.backgroundColor = 'red';
}
document.addEventListener('click', myEventListenerFunction);

//document.removeEventListener('click', myEventListenerFunction);