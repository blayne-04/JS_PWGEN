# LOGIC 
* length 8 <= x <= 128 else reprompt 
* prompts for lowercase, uppercase, numeric, special
var lowercase_toggle = true 
var lowercase_list = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
var lowercase = math.floor(math.random() * lowercase_list.length)