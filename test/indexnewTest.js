const assert = require('chai').assert;

const app = require('../indexnew');

// Results
 
  
  describe('assignTeamMarks()', function(done){
    it('the marks of one person should be more than or equal to the other', function(){
      app.assignTeamMarks("2016a7ps016g",function(assignTeamMark){
     
      assert.isAtLeast(assignTeamMarks.HighestMemMarks-assignTeamMarks.OtherMemMarks,10, 'xxxx');
      
    });
    });
     it('the assigned marks should be maximum of the two ', function(){
     app.assignTeamMarks("2016a7ps018g",function(assignTeamMark){
      
     assert.equal(assignTeamMark.HighestMemMarks,assignTeamMark.teamMarks);
      
    });
    
     
    });
     done;

   
  });








  

