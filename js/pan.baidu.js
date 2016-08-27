document.getElementsByClassName('create-private')[0].onclick = function() {
require(["function-widget-1:share/util/service/createLinkShare.js"]).prototype.makePrivatePassword=function(){return prompt("请输入自定义的密码","1234")};
}