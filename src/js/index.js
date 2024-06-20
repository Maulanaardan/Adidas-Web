/*? no js js needed from me */
let logo = document.querySelector('.logo');
let bruno = document.querySelector('.bruno');
let shoes = document.querySelector('.shoes');

function logoClick() {
    let imageUi = document.querySelector('.image-ui');
    let headingContent = document.querySelector('.headingContent');
    let detailParagraph = document.querySelector('.detailParagraph');

    imageUi.src = './assets/adidas-logo-removebg-preview.png';
    headingContent.innerHTML = 'OUR LOGO';
    detailParagraph.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
}

function brunoClick() {
    let imageUi = document.querySelector('.image-ui');
    let headingContent = document.querySelector('.headingContent');
    let detailParagraph = document.querySelector('.detailParagraph');

    imageUi.src = './assets/bruno_fernandes-removebg-preview.png';
    headingContent.innerHTML = 'OUR AMBASADOR';
    detailParagraph.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
}

function shoesClick() {
    let imageUi = document.querySelector('.image-ui');
    let headingContent = document.querySelector('.headingContent');
    let detailParagraph = document.querySelector('.detailParagraph');

    imageUi.src = './assets/X_CRAZYFEST_MESSI-removebg-preview.png';
    headingContent.innerHTML = 'OUR BEST SHOES';
    detailParagraph.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
}