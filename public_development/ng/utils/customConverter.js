String.prototype.Capitalize = function(){
	return this.charAt(0).toUpperCase() + this.substring(1,this.length-1) + this.charAt(this.length-1).toUpperCase();
};
String.prototype.FirstCapitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1);};
String.prototype.replaceParentHeader=function(find,replace)
{
	var str=this;return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&'),'g'),replace);
};
function log(message){
  console.log(message);
}
log("laxman".Capitalize());
log("laxman".FirstCapitalize());
log("ds.da".replaceParentHeader(".",">"));
