describe("rotateTo (method)",()=>{it("should rotate to the given degree",e=>{const t=window.createImage(),a=new Cropper(t,{ready(){expect(a.rotateTo(360).getImageData().rotate).to.equal(0),expect(a.rotateTo(90).getImageData().rotate).to.equal(90),expect(a.rotateTo(0).getImageData().rotate).to.equal(0),expect(a.rotateTo(-180).getImageData().rotate).to.equal(-180),e()}})}),it("should not work when it is not rotatable",e=>{const t=window.createImage(),a=new Cropper(t,{rotatable:!1,ready(){expect(a.rotateTo(360).getImageData().rotate).to.be.undefined,expect(a.rotateTo(90).getImageData().rotate).to.be.undefined,expect(a.rotateTo(-180).getImageData().rotate).to.be.undefined,e()}})})});