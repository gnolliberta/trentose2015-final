/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the SantaModel object */

describe("Santa", function() {

  it("getCurrentRequest should work fine", function() {  
    SantaModel.init(requests);
    var value1 = SantaModel.getCurrentRequest();
    SantaModel.next();
    var value2 = SantaModel.getCurrentRequest();


    expect(value1).toBe(requests[0]);
    expect(value2).toBe(requests[1]);
  });
    it("pack should work fine", function() {  
    SantaModel.init(requests);
    var value1 = pack("no");
    SantaModel.next(); 
    var value2 = pack("no");

    expect(value1).toBe(false);
    expect(value2).toBe(true);

  });  
 
});
