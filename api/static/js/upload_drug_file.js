const form = document.getElementById('uploadForm');
        const messageDiv = document.getElementById('message');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const fileInput = document.getElementById('file');
            const file = fileInput.files[0];

            if (!file) {
                messageDiv.textContent = 'No file selected.';
                messageDiv.classList.add('error');
                return;
            }

            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/upload_drug_file', {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();
                // console.log("file")
                if (response.ok) {
                    messageDiv.textContent = result.message;
                    messageDiv.classList.remove('error');
                    messageDiv.classList.add('success');
                    window.tagsList = result.drug_list;
                    fetchData(1)
                    newElement();
                    // hideError();
                } else {
                    messageDiv.textContent = result.error;
                    messageDiv.classList.add('error');
                }
            } catch (err) {
                messageDiv.textContent = 'An error occurred. Please try again.';
                messageDiv.classList.add('error');
            }
        });
