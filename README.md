VersioningExample
=================

This is an example of how you could set up an entity revision version history in Wakanda using the new object attribute type. (Wakanda 9 minimum).

Code to look at:
* The on save event in the Models folder. It's the same for each data class
* The Module/revisions.js - this is where the bulk of the logic happens.

There are two issues that I am getting clarification about:
* The on save datastore class method fires twice
* In _serverside1.js, the system sees every attribute as modified versus _serverside2.js where it acts as expected and only logs changed attributes.

Please visit [www.wakanda.org](http://www.wakanda.org "wakanda.org") for more information.
