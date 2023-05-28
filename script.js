



function print(){
    console.log("hello");
}
print();
//listening to the keys
window.addEventListener("keydown", e=>{
    console.log(e);

    switch (e.key) {
        
        case "ArrowUp":
            print();
            break;
        case "ArrowDown":
            print();
            break;
        case "ArrowLeft":
            print();
            break;
        case "ArrowRight":
            print();
            break;
        default:
            break;
    }
}); 