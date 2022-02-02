let gridCon = (function(){
    let _mainGrid = document.getElementById('main-grid')


    function render(){
        _createGrid();

        let images = document.querySelectorAll(".image");
        images.forEach(img=>img.addEventListener("click",_zoomImage));



    }
    function _createGrid(){
        for(let counter = 0;counter < 9; counter++){
            let newGrid = document.createElement("div");
            let image = document.createElement("img");
            newGrid.setAttribute( "class" ,"grid");
            image.setAttribute("src",`images\/image-${counter+1}.jpg`);
            image.setAttribute("id",`${counter+1}`)
            image.setAttribute("class","image");
            newGrid.appendChild(image);
            _mainGrid.appendChild(newGrid);
        }
    }
    function _zoomImage(event){
            let backGround = document.getElementById("zoom");
            let newImage = document.createElement("img");
            let container = document.createElement("div");
            
            
            newImage.setAttribute("class","zoom-image");
            newImage.setAttribute("src",`images\/image-${event.target.id}.jpg`);
            container.appendChild(newImage);
            backGround.appendChild(container);
            backGround.style.display = "block";

            backGround.addEventListener("click",()=>{
                backGround.style.display = "none";
                backGround.removeChild(container);
            })


    }
    
    return{
        renderWeb:render()
    }

})();

gridCon.renderWeb;