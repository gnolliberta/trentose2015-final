/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

var SantaModel = {
  
  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
    current:-1,
   init : function(list){
       this.requests = list;
       this.current = 0;
       
       
   },
  
   /* It moves "current" to the next request */
   next : function (){
       this.current++;
   },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function () {

       
       if(this.current== requests.length){return null;}
       else{return       this.requests[this.current];}
   },  
    
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
   pack : function(item) {
   }      
  
};

var SantaController = {
    init: function(){
         SantaModel.init(requests);
        SantaView.init();
    },
    current_request: function(){
        return SantaModel.getCurrentRequest();
    },
    next: function(){
        SantaModel.next();
    }
};

var SantaView = {
    corect: 0,
    init: function(){
        var request  = SantaController.current_request();
        $(".question").html(request.question);
        for(var i =0; i<request.options.length;i++){
            $(".question-items").append("<li>"+request.options[i]+"</li>");
        }
        
        $(".question-items li").click(function(){
            if($(this).text() === request.answer){
            this.correct++;
            
            }
            SantaController.next();
            $(".question-items").empty();
            SantaView.next();
            
        })
    },
    next: function(){
        
        var request  = SantaController.current_request();
        $(".question").html(request.question);
        for(var i =0; i<request.options.length;i++){
            $(".question-items").append("<li>"+request.options[i]+"</li>");
        }
        
    },
    final: function(){
   
    }
    
};



$(document).ready(function(){
    SantaController.init();

});