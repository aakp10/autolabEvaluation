const assert = require('chai').assert;

const app = require('../indexnew');

// Results
 
  
  describe('assignTeamMarks()', function(done){
    it('should assign max marks to the team', function(){
      app.assignTeamMarks("2016a7ps016g",function(assignTeamMark){
     // console.log(assignTeamMark.HighestMemMarks);
      //console.log(assignTeamMark.teamMarks);
      assert.isAtLeast(assignTeamMarks.HighestMemMarks-assignTeamMarks.OtherMemMarks,10, 'xxxx');
      
    });
    });
     it('the assigned marks should be maximum', function(){
     app.assignTeamMarks("2016a7ps018g",function(assignTeamMark){
      //console.log(assignTeamMark.HighestMemMarks);
      //console.log(assignTeamMark.teamMarks);
     assert.equal(assignTeamMark.HighestMemMarks,assignTeamMark.teamMarks);
      
    });
    
     
    });
     done;

   /* it('the assigned marks should be maximum', function(){
    // assert.isAtMost(4,4,"a");
    assert.equal(assignTeamMark.HighestMemMarks,assignTeamMark.teamMarks);
     
    });*/
  });








  

