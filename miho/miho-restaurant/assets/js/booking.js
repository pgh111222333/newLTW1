document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btnDoubleChair'); // Nút để mở popup
    const popup = document.getElementById('popup'); // Đảm bảo ID chính xác là 'popup'
    const overlay = document.getElementById('overlay');
    const submitButton = document.getElementById('submitBtn'); // Nút Submit

    // Hiển thị popup khi click vào các nút
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            popup.classList.remove('hidden'); // Hiển thị popup
            overlay.classList.remove('hidden'); // Hiển thị overlay
        });
    });

    // Đóng popup khi nhấn vào overlay
    overlay.addEventListener('click', () => {
        closePopup();
    });

    // Hàm đóng popup
    function closePopup() {
        popup.classList.add('hidden'); // Ẩn popup
        overlay.classList.add('hidden'); // Ẩn overlay
    }

    // Đóng popup khi nhấn vào nút Submit
    submitButton.addEventListener('click', () => {
        closePopup(); // Đóng popup khi nhấn Submit
    });
});
