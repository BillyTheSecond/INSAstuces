  

{/* Carte de contact */ }
const FileDownloadBox = ({file_link, file_name, file_type}) => (
    <div
        onclick={`document.location.href='/static/files/${file_link}'`}
        class="file-download-box"
    >
        <img src={`/img/icons/filetypes/${filetype}.svg`} alt={`Fichier ${file_type}`} />
        <div class="file-download-box-info">
            <p>{file_name}</p>
        </div>
        
        
    </div>


);
export default FileDownloadBox;



