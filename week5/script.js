// Change text content dynamically
document.addEventListener("DOMContentLoaded", function () {
    // Create a heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Dynamic JS!";
    document.body.appendChild(heading);

    // Modify CSS styles via JavaScript
    heading.style.color = "blue";
    heading.style.fontFamily = "Arial, sans-serif";
    heading.style.textAlign = "center";

    // Create a button
    const button = document.createElement("button");
    button.textContent = "Add/Remove Paragraph";
    button.style.display = "block";
    button.style.margin = "20px auto";
    document.body.appendChild(button);

    // Paragraph to add/remove
    let para;
    button.addEventListener("click", function () {
        if (!para) {
            para = document.createElement("p");
            para.textContent = "This paragraph was added dynamically!";
            para.style.color = "green";
            para.style.textAlign = "center";
            document.body.appendChild(para);
        } else {
            para.remove();
            para = null;
        }
    });
});