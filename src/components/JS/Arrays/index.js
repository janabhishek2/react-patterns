// Files selection with code

const filesInput = document.getElementById("myFiles");

filesInput.addEventListener("change", (event) => {
    const files = event.target.files;
    uploadFiles(files);
});

const fileBaseUrl = "https://jsonplaceholder.typicode.com/todos";

const uploadFiles = async function(formData) {
    const headers = new Headers({
        fileInput: true
    });

    try {
        const response = await fetch(fileBaseUrl, {
            headers,
            method: "POST",
            body: formData,
        });
        if(!response.ok) {
            throw new Error('failed to fetch!!');
        }
        const data = await response.json();
        console.log(data);
    } catch(er) {
        console.log(er.message);
    }
}

const filesInputElement = document.getElementById("myFiles");
filesInputElement.addEventListener("change", (e) => {
    const fd = new FormData();
    fd.append("logo", filesInput.files[0]);
    uploadFiles(fd);
})
