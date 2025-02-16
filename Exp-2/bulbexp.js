
document.addEventListener('DOMContentLoaded', function() {
    const onImage = document.getElementById('id2');
    const offImage = document.getElementById('id1');
    const onBtn = document.getElementById('on');
    const offBtn = document.getElementById('off');

    console.log(onImage);
    console.log(offImage);

    onImage.style.display = 'none';
    offImage.style.display = 'block';

    onBtn.addEventListener('click', function() {
    onImage.style.display = 'block';
    offImage.style.display = 'none';
    });
    offBtn.addEventListener('click', function() {
    onImage.style.display = 'none';
    offImage.style.display = 'block';
    });
});
