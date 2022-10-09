const card = document.querySelector("#card")


card.addEventListener("mousemove", function (details) {

    const dimensions = this.getBoundingClientRect()
    const center = dimensions.width / 2
    const left = 0;
    const right = dimensions.width;
    const mouseValue = details.clientX - dimensions.x

    if (mouseValue < center) {
        const redclr = convertToRange(mouseValue, [left, center], [255, 0])
        this.style.backgroundColor = `rgb(${redclr},0,0)`
    } else {

        const greenclr = convertToRange(mouseValue, [center, right], [0, 255])
        this.style.backgroundColor = `rgb(0,${greenclr},0)`
    }
})

card.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#fff"

})

function convertToRange(value, srcRange, dstRange) {

    if (value < srcRange[0] || value > srcRange[1]) {
        return NaN;
    }
    const srcMax = srcRange[1] - srcRange[0];
    const dstMax = dstRange[1] - dstRange[0];
    const adjValue = value - srcRange[0];

    return (adjValue * dstMax / srcMax) + dstRange[0];

}