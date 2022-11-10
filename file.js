function vowels(str)
{
   
   const count= str.match(/[aeiou]/gi);
   //console.log(count)
   if(count!=null)
   return count.length;
   return 0;

}
let str="naumansukhera";
//console.log(vowels(str));

function UpperCase(str)
{
   
   const temp = str.match(/^[A-Z]*/gm);
 
   if(temp=='')
   {return "Not a Upper Case";}
   
   return " Upper Case";

}
console.log(UpperCase("Amsd "));

function creditnumber(str)
{
   
   const temp = str.match(/\d{16}/gm);
   //console.log(temp);
   if(temp==null)
   {return "Worng credit card number";}
   
   return "Credit Card Accepted";

}
console.log(creditnumber("53661999978789090"));

function countString(temp)
{
   return temp.length;
}
console.log(countString("nauman"));

function emailValidator(str)
{
   
   const temp = str.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm);
   //console.log(temp);
   if(temp==null)
   {return "Invalid Email";}
   
   return "Valid Email";

}
console.log(emailValidator("nauman@gmail.com"));