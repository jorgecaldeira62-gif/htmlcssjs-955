importZip() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.zip';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const zip = new JSZip();
            const loaded = await zip.loadAsync(file);

            const project = {
                id: Date.now().toString(),
                name: file.name.replace('.zip', ''),
                desc: 'Importado de ZIP',
                type: 'imported',
                files: {},
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                status: 'local'
            };

            // Processar arquivos do ZIP
            for (const [path, fileObj] of Object.entries(loaded.files)) {
                if (!fileObj.dir) {
                    const content = await fileObj.async('arraybuffer');

                    // DETECTAR E CONVERTER ENCODING
                    const encoding = EncodingHandler.detectEncoding(new Uint8Array(content));
                    const text = EncodingHandler.convertToUTF8(new Uint8Array(content), encoding);
                    const normalized = EncodingHandler.normalizeFile(text);

                    // Validar arquivo
                    if (EncodingHandler.isValidFile(path)) {
                        project.files[path] = normalized;
                    }
                }
            }

            Base.state.projects.push(project);
            Base.saveState();
            Base.showAlert(`✅ Projeto "${project.name}" importado!`, 'success');
            this.renderProjects();

        } catch (error) {
            Base.showAlert(`❌ Erro ao importar ZIP: ${error.message}`, 'error');
            console.error(error);
        }
    };
    input.click();
}
