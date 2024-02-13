const downloadButton = document.querySelectorAll('.download-button')

downloadButton.forEach(but => {
    but.addEventListener('click', () => {
        const img = but.closest('figcaption').previousElementSibling
        const imgURL = img.src
        const imgName = imgURL.substring(imgURL.lastIndexOf('/') + 1)
        const link = document.createElement('a')
        link.href = imgURL
        link.download = imgName
        link.click()

        document.body.removeChild(link)
    })
})