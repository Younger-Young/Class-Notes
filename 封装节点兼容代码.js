//获取任意一个父级元素的第一个子级元素
function getFirstElementChild (element){
    //若是谷歌或火狐，则直接.出来
    if (element.firstElementChild){
        return element.firstElementChild;
    } else {
        //若是IE，用.firstChild的方式
        var node=element.firstChild;
        //若是2种方式都不支持的其他浏览器，
        while (node && node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}