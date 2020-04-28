# Auth-gremlin

That PESKY GREMLIN is at it again. This time he's sabotaged the authentication functionality of our word find app. I don't know if he does it out of jealousy, or if he just wants to see the world burn. Oh well. Haters gonna hate. But you gotta love the haters, because haters are how you know you are somebody.

But I digress. Reimplement the missing authentication functionality of this server, using JWT's.

## Notes

Some endpoints rely on decoding a user's ID from the JWT payload. These endpoints reference `req.decodedJwt`. Be aware that if you apply a differently named key to the request object, this functionality will not work. So try to add a key called "decodedJwt" plz <3

### Purpose

This is a pracice exercise for Lambda School students learning authentication for the first time, built by Michael Harms.

