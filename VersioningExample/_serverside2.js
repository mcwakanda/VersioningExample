﻿//Create a new personvar person = new ds.Person({firstName: "Gary", lastName: "Weldon"});person.save();var personID = person.ID;//Modify that personperson = ds.Person(personID);person.lastName = "Trillent";person.save(); //revision created//Againperson = ds.Person(personID);person.firstName = "Barry";person.save(); //revision createdperson;