const downloadButton = document.querySelector('.download-button');

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'ruta/del/archivo';
    link.download = 'Bodorriokilanoapp';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});