"use strict";

const { prototypeCopy } = require("./prototype-copy");

const handlePrototypes = {

 getPrototype: (prototypeNumber) => {
   if (prototypeNumber === "") {
     prototypeNumber = 1;
   }
    const prototype = {
      id: prototypeNumber,
      checklistFormat: false,
    };

    let tone = prototypeNumber;
    if (tone > 3) {
      tone = tone - 3;
      prototype.checklistFormat = true;
    }

    prototype.copy = prototypeCopy[tone];
    return prototype;
  },
};

module.exports = { handlePrototypes };
