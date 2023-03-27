function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    tint_color = "";
}

function draw() {

}

function take_snapshot() {
    save('myFilterPhoto.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}