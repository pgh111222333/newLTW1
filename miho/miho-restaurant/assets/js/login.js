window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const alertMessage = urlParams.get('alert');
    if (alertMessage) {
        alert(alertMessage); // Hiển thị thông báo nếu có
    }

    document.getElementById("loginButton").addEventListener("click", function(event) {
        event.preventDefault(); 
        window.location.href = "index.html"; 
    });
};

// Hàm mở popup đăng ký
function openSignupPopup() {
    document.getElementById("signup-popup-container").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
}

// Hàm đóng popup đăng ký
function closeSignupPopup() {
    document.getElementById("signup-popup-container").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
