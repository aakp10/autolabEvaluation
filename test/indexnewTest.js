const assert = require('chai').assert;

const app = require('../indexnew');

// Results
var assignTeamMarks= app.assignTeamMarks("2016a7ps01g");


describe('indexnew', function(){
  describe('assignTeamMarks()', function(){
    it('should assign max marks to the team', function(){
      console.log(assignTeamMarks.HighestMemMarks);
      console.log(assignTeamMarks.teamMarks);
      assert.equal(assignTeamMarks.HighestMemMarks,assignTeamMarks.teamMarks);
    });

    it('the assigned marks should be maximum', function(){
    // assert.isAtMost(4,4,"a");
     assert.isAtMost(assignTeamMarks.OtherMemMarks,assignTeamMarks.HighestMemMarks, '4 is less than or equal to 4');
    });
  });
});

  

