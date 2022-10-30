export function openForm() {
    document.getElementById("myForm").style.display = "block";
}

export function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.getElementById("form-btn").addEventListener("click", openForm);
document.getElementById("btn-close").addEventListener("click", closeForm);