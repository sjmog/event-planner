'use strict'
describe("Event", function(){
    let event
    beforeEach(function(){
        event = new Event("2019-03-06T17:00", "Group retro")
    })
    it("will save date & time", function(){
        expect(event.dateTime).toBe("2019-03-06T17:00")
    })
    it("will save event description", function(){
        expect(event.description).toBe("Group retro")
    })
    it("will tranform to js date-time format",function(){
        expect(event.jsDateTime).toEqual(new Date("2019-03-06T17:00"))
    })
})