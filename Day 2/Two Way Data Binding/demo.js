(function(){
    console.log("Two way data binding");
    var elements = document.querySelectorAll('[data-bind]');
    var db = {};

    elements.forEach((element)=>{
        if(element.type === "text"){
            var bindingproperty = element.getAttribute('data-bind');
            addToScope();
            element.onkeyup = ()=>{
                db[bindingproperty]=element.value;
                console.log(element.value);
            }
        }
        function addToScope(){
            if(!db.hasOwnProperty(bindingproperty)){
                let value;
                Object.defineProperty(db, bindingproperty, {
                    configurable: true,
                    enumerable: true,
                    set: function(newvalue) {
                        value = newvalue;
                        elements.forEach((e)=>{
                            if(e.getAttribute('data-bind') === bindingproperty){
                                if(e.type == 'text'){
                                    e.value = newvalue;
                                }
                                else if(!e.type){
                                    e.innerHTML = newvalue;
                                }
                            }
                        })
                    },
                    get:function(){
                        return value;
                    }
                })
            }
        }
    })
})();