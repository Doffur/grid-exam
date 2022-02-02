let gridCon = (function(){
    let _mainGrid = document.getElementById('main-grid')

    function render(){
        _createGrid();
        let images = document.querySelectorAll("image");

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
    
    return{
        renderWeb:render()
    }

})();

gridCon.renderWeb;