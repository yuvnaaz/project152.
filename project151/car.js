AFRAME.registerComponent("car",{
    schema:{
        model:{type: "string", default: "./pixel_car/scene.gltf"},
        clickCounter: {type: "number", default: 0}
    },

    update: function(){
        window.addEventListener("click", (e) =>{
            this.data.clickCounter = this.data.clickCounter +1;
            if(this.data.clickCounter == - 1){
                const rotation = {x: 0, y: 20, z: 0};
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 2)
            { 
                const rotation = {x: 0, y: 100, z:0 };
            }
        })
        
        this.el.setAttribute("gltf-model", this.data.model)
        var pos = {x:0, y:0, z:0}
        var rotation = {x:0, y:0, z:0}
        this.el.setAttribute("position", pos)
        this.el.setAttribute("rotation", rotation)
    }

})                                                                                          
