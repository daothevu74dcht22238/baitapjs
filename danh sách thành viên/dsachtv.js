//viết 1 hàm trong file js thực hiện các chức năng sau
//Tạo 1 biến chứa danh scahs lớp chứa 9 phần tử là thành viên của nhóm mình gồm các thông 
//tin: họ và tên, giới tính, nơi sinh
//Dùng js để in ra danh sách đó trên html 
// Tạo một mảng chứa thông tin thành viên nhóm

function indanhsach() {
    const thanhvien = [
        { hovaten: 'Đào Thế Vũ', gioitinh: 'Nam', Noisinh: 'Bắc Ninh' },
        { hovaten: 'Trần Đình Hưng Thịnh', gioitinh: 'Nam', Noisinh: 'Nghệ An' },
        { hovaten: 'Trần Minh Long', gioitinh: 'Nam', Noisinh: 'Nam Định' },
        { hovaten: 'Nguyễn Quang Huy', gioitinh: 'Nam', Noisinh: 'Hà Tĩnh' },
        { hovaten: 'Nguyễn Công Mạnh', gioitinh: 'Nam', Noisinh: 'Hà Tĩnh' },
        { hovaten: 'Nguyễn Nam Khánh', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
        { hovaten: 'Nguyễn Việt Dương', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
    ];
    // Tìm phần tử HTML có id là "danhsachthanhvien"
    const danhSach = document.getElementById('danhsachthanhvien');
 
    thanhvien.forEach((tv) => { 
        const div = document.createElement('div');
        div.className = 'thanh-vien';
        div.innerHTML = `
            <table style="width: 100%; border-spacing: 10px 5px;">
                <tr>
                    <td style="font-weight: bold; width: 30%;">Họ và tên:</td>
                    <td>${tv.hovaten}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Giới tính:</td>
                    <td>${tv.gioitinh}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Nơi sinh:</td>
                    <td>${tv.Noisinh}</td>
                </tr>
            </table>
        `;
        // Thêm CSS để tạo giao diện đẹp hơn
        div.style.marginBottom = '15px'; // Khoảng cách giữa các div
        div.style.padding = '10px'; // Khoảng cách bên trong
        div.style.background = '#f9f9f9'; // Màu nền
        div.style.borderRadius = '5px'; // Bo góc nhẹ
 
        danhSach.appendChild(div); // thêm phần tử div vào danhsach
    });
 }
 // Gọi hàm để in danh sách
 indanhsach();

