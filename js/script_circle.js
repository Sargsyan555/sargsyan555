
function myFunction(){
    var centerX = document.getElementById('centerX').value;
    var centerY = document.getElementById('centerY').value;
    var pointX = document.getElementById('pointX').value;
    var pointY = document.getElementById('pointY').value;
    var r = document.getElementById('r').value;
    var a = (pointX-centerX)*(pointX-centerX)+(pointY-centerY)*(pointY-centerY)
    if (a < r*r){
        alert('Կետը գտնվում է շրջանի ներսում')
    }else if(a==r*r) {
        alert('Կետը գտնվում է շրջանագծի վրա')
    }else {
        alert('Կետը գտնվում է շրջանից դուրս')
    }
}
