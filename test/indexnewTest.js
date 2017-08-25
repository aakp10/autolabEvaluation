const assert = require('chai').assert;

const app = require('../indexnew');

// Results
 app.assignTeamMarks("2016a7ps018g",function(assignTeamMark){
  
  describe('assignTeamMarks()', function(){
    it('should assign max marks to the team', function(){
      console.log(assignTeamMark.HighestMemMarks);
      console.log(assignTeamMark.teamMarks);
      assert.equal(assignTeamMark.HighestMemMarks,assignTeamMark.teamMarks);
    });

    it('the assigned marks should be maximum', function(){
    // assert.isAtMost(4,4,"a");
     assert.isAtLeast(assignTeamMarks.HighestMemMarks-assignTeamMarks.OtherMemMarks,0, 'xxxx');
    });
  });


});





  

