function calculateRectangleArea()
{
    let  chieudai = parseFloat(document.getElementById("chieudai").value);
    let chieurong = parseFloat(document.getElementById("chieurong").value);
    if (isNaN(chieudai)||isNaN(chieurong)||chieudai<=0 || chieurong<=0)
    {
        alert("Số không hợp lệ");
        return;
    }
    const dientichhcn = chieudai * chieurong;
    document.getElementById("xuatdientichhcn").innerHTML = "Diện tích hình chữ nhật là: " + dientichhcn.toFixed(2);
}
function calculateTriangleArea()
{
    let canhday = parseFloat(document.getElementById("canhday").value);
    let chieucao = parseFloat(document.getElementById("chieucao").value);
    if (isNaN(canhday)||isNaN(chieucao)||canhday<=0 || chieucao<=0)
        {
            alert("Số không hợp lệ");
            return;
        }
        const dientichtg = (canhday*chieucao)/2;
        document.getElementById("xuatdientichtg").innerHTML = "Diện tích tam giác là: " + dientichtg.toFixed(2);
}
function  calculateSquareArea()
{
    let canh = parseFloat(document.getElementById("canh").value);
    if(isNaN(canh)||canh<=0)
    {
        alert("Số không hợp lệ");
        return;
    }
    const dientichhv = canh*canh;
    document.getElementById("xuatdientichhv").innerHTML = "Diện tích hình vuông là: " + dientichhv.toFixed(2);
}